# Pointers

This morning a pointer became data: a position from 0 to 1 that means the same on any screen, a speed in screens per second, and an average over time that smooths the speed out and settles when you stop. This afternoon you first build Thursday's shape by hand, then those three moves, and then you put them together: a shape whose note gets louder the faster you move through it.

Self-paced, in VS Code, with the slides for this afternoon open on your laptop. There are three tracks: **core** (blocks 1 to 5) for everyone, then **blue** or **purple**. Each part has its own folder, and each folder starts from code that works, so you can start a block even if the one before isn't finished.

`pointers/reference/` has a finished version of everything.

**Predict before you run, every time.** Write your prediction in a comment, then save and check.

| Folder    | File           | Exercises | What you do                                                                   |
| --------- | -------------- | --------- | ----------------------------------------------------------------------------- |
| `block1/` | `script.js`    | 1 to 4    | Thursday's build: a shape that plays when the pointer arrives, stays, presses |
| `block2/` | `normalise.js` | 5 and 6   | Normalise the position to 0 to 1, then stretch it onto `synth.detune`         |
| `block3/` | `speed.js`     | 7 and 8   | Work out speed in screens per second, and let it bend the note                |
| `block4/` | `average.js`   | 9 to 11   | Average over time: keep the last 10, then let each speed expire               |
| `block5/` | `script.js`    | 12 and 13 | Thursday's step 5: the faster you move through the shape, the louder it plays |
| `blue/`   | `two.js`       | B1 to B3  | Two pipelines at once, how long a speed should count, and a double-tap        |
| `purple/` | `script.js`    | P1 and P2 | Three shapes, three notes, and speed setting how far position can bend        |

Blocks 1 and 5 and purple use `shape.js`, the same file as in your A3 template, and the same sections (Settings, State, Sound, Controls, Setup). Anything you build there can move straight into A3.

## Run a folder

1. Sync your fork and pull (see the main README), so this `pointers/` folder is on your laptop.
2. Open the folder's `index.html` (for example `pointers/start/block1/index.html`), then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab.
4. **Click on the page itself** once. That switches the sound on and gives the page the keyboard.

When you save, the page reloads on its own and the code runs again from the top. Click the page again. Moving on to the next folder? Open its `index.html` and run Live Preview again, and close the old tab.

## Block 1: a shape that hears the pointer (`block1/script.js`)

| Exercise | What you do                                                                  | A commit message could be |
| -------- | ---------------------------------------------------------------------------- | ------------------------- |
| 1        | Give the shape a size, a colour and a position (0 to 1, like this morning)   | `Make a shape`            |
| 2        | A note when the pointer arrives on the shape, and why it needs a click first | `Sound on enter`          |
| 3        | Hold the note while the pointer is on the shape                              | `Hold while inside`       |
| 4        | Press to play instead, and fix the note that never stops when you drag off   | `Press to play`           |

## Block 2: normalise, then stretch (`block2/normalise.js`)

| Exercise | What you do                                                                | A commit message could be |
| -------- | -------------------------------------------------------------------------- | ------------------------- |
| 5        | `clientX` changes with the window; `clientX / window.innerWidth` doesn't   | `Normalise the position`  |
| 6        | `synth.detune.value = normX * 1200`, then squeeze, stretch, and the middle | `Stretch onto detune`     |

## Block 3: speed (`block3/speed.js`)

| Exercise | What you do                                                             | A commit message could be |
| -------- | ----------------------------------------------------------------------- | ------------------------- |
| 7        | Keep the last position and time, and work out screens per second        | `Speed`                   |
| 8        | Speed bends the note, and you choose how far for your mouse or trackpad | `Speed bends the note`    |

## Block 4: average over time (`block4/average.js`)

| Exercise | What you do                                                      | A commit message could be |
| -------- | ---------------------------------------------------------------- | ------------------------- |
| 9        | Keep only the last 10 speeds with `shift`, and use their average | `Average the last 10`     |
| 10       | Flick, then stop dead: why does the note stay bent?              | (a comment, no code)      |
| 11       | Let each speed expire after half a second with `setTimeout`      | `Forget by time`          |

## Block 5: move faster, play louder (`block5/script.js`)

| Exercise | What you do                                                                   | A commit message could be |
| -------- | ----------------------------------------------------------------------------- | ------------------------- |
| 12       | Speed, only while the pointer is on the shape, starting fresh when it arrives | `Speed on the shape`      |
| 13       | The averaged speed sets the volume of the held note                           | `Faster is louder`        |

## Blue: two pipelines, and a threshold (`blue/two.js`)

| Step | What you do                                                     | A commit message could be |
| ---- | --------------------------------------------------------------- | ------------------------- |
| B1   | Position bends the note, and the averaged speed sets the volume | `Two pipelines`           |
| B2   | How long a speed counts: 100 ms, 500 ms, 2000 ms                | `Memory`                  |
| B3   | A double-tap (two presses under 300 ms apart) plays a chord     | `Double-tap`              |

## Purple: several shapes (`purple/script.js`)

| Step | What you do                                                              | A commit message could be |
| ---- | ------------------------------------------------------------------------ | ------------------------- |
| P1   | Three shapes, each holding its own note                                  | `Three shapes`            |
| P2   | On the first shape, x bends the note and speed decides how far it can go | `Speed sets the range`    |

## If something goes wrong

- **No sound, but the console logs:** click the page after it reloads, and check the volume and your headphones. Sound needs a click or a key press first.
- **No sound when you move onto the shape:** nobody has clicked yet. Arriving with the pointer doesn't count as a click.
- **`TypeError: shape.addEventListener is not a function`:** listen on `shape.element`, not `shape`.
- **The note never stops:** a `triggerAttack` without a `triggerRelease`. Is the `pointerleave` (or `pointerup`) listener there, with the right spelling?
- **`TypeError: Cannot set properties of undefined (setting 'value')` on `detune`:** you're using a `PolySynth`. Use `new Tone.Synth()`: it has `.detune`.
- **`normX` goes far above 1:** you divided by `innerHeight`, or used `clientY`. `clientX` goes with `innerWidth`.
- **Speed is in the hundreds or thousands:** you used `clientX` (pixels) instead of `normX` (screens).
- **Speed is always nearly 0:** `lastX`, `lastY` and `lastTime` never change. Set them at the end of `pointerMove`.
- **Speed logs `Infinity` or `NaN`:** two moves in the same millisecond. Skip the move when `seconds === 0`.
- **The average is `NaN`:** the list is empty, and 0 / 0 is `NaN`. Give `average` 0 first, and only divide when `speeds.length > 0`.
- **`setTimeout` forgets everything at once, or straight away:** `setTimeout(forgetOldest(), 500)` with brackets calls it now. Hand it over without brackets: `setTimeout(forgetOldest, 500)`.
- **The newest speed disappears instead of the oldest:** that's `pop()`. `shift()` takes from the front, where the oldest is.
- **The note stays bent when you stop:** that's exercise 10. Only `pointerMove` changes the list, and it only runs when you move.
