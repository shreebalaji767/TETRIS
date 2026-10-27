# VOIDBLOCK Upgrade Notes

## Implemented on main

- Added selectable Marathon, Sprint 40, Ultra 120-second, and Zen modes.
- Added a compact HUD for combo, timer, and pieces locked.
- Added combo scoring for consecutive line clears, a back-to-back Tetris bonus, and hard-drop distance points.
- Added a persistent career stats panel: games played, total lines, Tetrises, perfect clears, and best combo.
- Improved line-clear feedback and made the game mode selector lock during active play.
- Updated the README with controls, mode descriptions, and scoring details.
- Bumped the service-worker cache version so deployed clients can receive the new game files.
- Kept the game dependency-free, static-hostable, and offline-first.

## Compatibility notes

- Career stats and best score are stored locally in the current browser; they do not sync across devices.
- Ultra's timer pauses with the game. Zen disables automatic falling, but soft drop remains available.
- Browser-extension console warnings are not necessarily emitted by VOIDBLOCK itself.
