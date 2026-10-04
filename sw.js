const CACHE_NAME = "voidblock-v15";
const CORE = ["./","./index.html","./manifest.json","./favicon.svg","./icon.svg"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function patchGame(response) {
  if (!response || !response.ok) return response;
  return response.text().then(html => {
    const oldLoop = 'function loop(t){if(!running||paused)return;const dt=Math.min(100,t-lastTime);lastTime=t;const speed=Math.max(70,850-(level-1)*65);fallTimer+=dt;if(current&&collides(current,current.x,current.y+1)){lockTimer+=dt;if(lockTimer>=500){lock();fallTimer=0;lockTimer=0}}else{lockTimer=0;if(fallTimer>=speed){fallTimer=0;stepDown(0)}}draw();raf=requestAnimationFrame(loop)}';
    const newLoop = 'function loop(t){if(!running||paused)return;const dt=Math.min(100,t-lastTime);lastTime=t;const speed=Math.max(70,850-(level-1)*65);fallTimer+=dt;if(current&&collides(current,current.x,current.y+1)){lockTimer+=dt;if(lockTimer>=120){lock();fallTimer=0;lockTimer=0;return}}else{lockTimer=0;if(fallTimer>=speed){fallTimer=0;stepDown(0)}}draw();raf=requestAnimationFrame(loop)}';
    if (!html.includes(newLoop)) html = html.replace(oldLoop,newLoop);
    return new Response(html, {status: response.status, statusText: response.statusText, headers: response.headers});
  });
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const request = event.request;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isGamePage = url.pathname.endsWith("/") || url.pathname.endsWith("/index.html");

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
        }
        return response;
      }).catch(() => cached || caches.match("./index.html"));

      const result = cached || network;
      return isGamePage ? result.then(patchGame) : result;
    })
  );
});
