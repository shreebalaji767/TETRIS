# VOIDBLOCK — Tetris

A fast, responsive, offline-ready Tetris game built with **HTML, CSS and vanilla JavaScript**. No external libraries are required.

## 🎮 Controls

### Laptop / PC / Desktop

| Key | Action |
|---|---|
| **←** | Move left |
| **→** | Move right |
| **↓** | Soft drop |
| **↑** / **X** | Rotate clockwise |
| **Z** | Rotate counter-clockwise |
| **A** | Rotate 180° |
| **Space** | Hard drop |
| **C** | Hold piece |
| **P** | Pause / Resume |
| **Esc** | Pause / Resume |
| **R** | Restart |

The game also pauses automatically when the browser tab becomes hidden or the window loses focus.

### 📱 Android / Tablet / Touchscreen

The on-screen controls work on phones, tablets, touch laptops and other touchscreen devices:

- ◀ **LEFT** — move left
- ↺ **CCW** — rotate counter-clockwise
- ↻ **CW** — rotate clockwise
- ▶ **RIGHT** — move right
- ⟳ **180°** — rotate 180°
- **HOLD** — store the current piece
- ▼ **SOFT** — soft drop
- **PAUSE / RESUME** — pause or continue the game
- **HARD DROP** — instantly drop the piece

The controls automatically resize and rearrange for different screen sizes and orientations.

### 👆 Board Gestures

- **Tap** the board → rotate clockwise
- **Swipe left/right** → move
- **Swipe down** → soft drop
- **Swipe up** → hard drop

## ✨ Game Features

- Classic **10 × 20 Tetris** board
- Hidden spawn rows for smoother piece entry
- Seven-piece bag randomizer
- Five-piece **NEXT** queue
- **HOLD** piece system
- Ghost piece / landing preview
- Clockwise and counter-clockwise rotation
- **180° rotation**
- Wall-kick rotation handling
- Automatic piece spawning after a block locks
- Line clearing
- TETRIS detection for four-line clears
- Perfect Clear detection
- Perfect Clear bonus scoring
- Level progression
- Increasing fall speed
- High-score persistence using local storage
- Game Over screen
- Pause / Resume
- Restart and Exit controls
- Keyboard controls
- Touch controls
- Swipe controls
- Responsive desktop, tablet and mobile layouts
- Landscape support
- Safe-area support for modern phones
- Fullscreen support
- Installable PWA
- Offline support through a service worker
- Sound effects
- Optional vibration feedback
- Configurable ghost piece
- Configurable board grid
- Reduced-motion support
- No external JavaScript libraries

## 🏆 Scoring

Scoring is intentionally based on **lines cleared**, not ordinary movement.

| Lines cleared | Base score |
|---:|---:|
| 1 | 100 × level |
| 2 | 300 × level |
| 3 | 500 × level |
| 4 | 800 × level |

### Perfect Clear

If clearing lines leaves the entire board empty:

**Perfect Clear bonus = 1200 × current level**

A four-line clear is also displayed as **TETRIS!**.

Movement, rotation, holding and ordinary falling do not independently add score.

## 📈 Levels

The level increases as lines are cleared:

- Level 1 starts the game.
- Every 10 cleared lines advances the level.
- Higher levels increase the automatic falling speed.

## 🎨 Visual Feedback

The game includes:

- Line-clear flash animation
- TETRIS feedback
- Perfect Clear feedback
- Ghost piece
- Optional grid
- Active touch-button feedback
- Pause/resume state feedback
- Game Over overlay
- Responsive glass-style control panel

The touch-control background is intentionally faded and blurred so controls remain visible without covering the game board visually.

## 📱 Responsive Design

VOIDBLOCK adapts to:

- Desktop monitors
- Laptop screens
- Android phones
- iPhones / iPads
- Android tablets
- Touchscreen laptops
- Portrait orientation
- Landscape orientation
- Small-height screens
- Very small mobile screens

The board and controls resize according to the available viewport.

## ⚙️ Settings

The Settings panel includes:

- **Sound** — game effects and line-clear sounds
- **Vibration** — supported-device haptic feedback
- **Ghost Piece** — landing-position preview
- **Grid** — board guide lines
- **Reset Best** — clear the saved high score

Preferences and the best score are stored locally in the browser.

## 📲 PWA / Offline

VOIDBLOCK includes:

- Web App Manifest
- Service Worker
- Install App button
- Standalone display mode
- Offline game support
- Fullscreen support
- Mobile home-screen support

The service worker uses a versioned cache and refreshes automatically when a new game build is deployed.

## 🛠️ Technology

Built using:

- HTML5
- CSS3
- Vanilla JavaScript
- HTML Canvas
- Web Audio API
- Vibration API when supported
- Web App Manifest
- Service Worker
- Local Storage

No frameworks or external libraries are required.

## 🐛 Reliability / Bug Fixes

Recent updates have focused heavily on controls and stability:

- Fixed automatic next-piece spawning after bottom lock
- Removed the old service-worker gameplay patch
- Made the actual `index.html` game logic the single gameplay authority
- Fixed touch button press-state cleanup
- Added pointer capture/release handling
- Added lost-pointer-capture cleanup
- Improved repeated movement buttons
- Added ESC pause/resume
- Added automatic pause when the browser loses focus
- Improved pause button state
- Improved responsive control layouts
- Improved small-screen and landscape layouts
- Refreshed the service-worker cache after gameplay/control changes
- Added JavaScript syntax validation during recent upgrades

## 📁 Main Files

- `index.html` — complete game UI, rendering, controls and gameplay
- `manifest.json` — PWA configuration
- `sw.js` — offline caching and service-worker updates
- `icon.svg` — application icon
- `favicon.svg` — browser favicon

## 🚀 Run Locally

Because the game is a static web application, it can be served from any static web server.

For example:

```bash
python -m http.server 8000
```

Then open:

```
http://localhost:8000/
```

A web server is recommended when testing PWA/service-worker functionality.

## 📦 Deployment

VOIDBLOCK can be deployed to:

- GitHub Pages
- Any static web host
- Any server capable of serving HTML/CSS/JavaScript files

## 🔄 Recent Update

### Universal Controls & Responsive UI

The latest upgrade added:

- Dedicated LEFT and RIGHT movement buttons
- Dedicated CCW and CW rotation buttons
- 180° rotation button
- Touch PAUSE / RESUME button
- ESC pause/resume on computers
- Responsive controls for phones and tablets
- Faded/blurred control background
- Better touch-button feedback
- Better pointer handling
- Browser-focus auto-pause
- Small-screen layouts
- Landscape layouts
- Service-worker cache refresh

### Gameplay & Feedback Updates

Earlier upgrades added:

- Immediate lock and automatic next-piece spawn
- Line-clear flash animation
- TETRIS feedback
- Perfect Clear detection and bonus
- Improved pause/resume UI
- Clean service-worker architecture
- Offline-ready PWA behavior

---

**VOIDBLOCK**  
*Classic blocks. Modern controls. No excuses. 🧱*
