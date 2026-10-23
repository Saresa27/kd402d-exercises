# Processing data

This morning, a person tapping a key became a list of moments, and the pattern turned out to live in the gaps between them. A finger dragged across the keys became a list of positions, and the direction turned out to be whether they rise or fall. This afternoon you build both yourself, make them audible, and then do the same for an action of your own.

Self-paced, in VS Code, with the slides for this afternoon open on your laptop. There are three tracks: **core** (blocks 1 to 4) for everyone, then **blue** or **purple**. Each part has its own folder, and each folder starts from code that works, so you can start a block even if the one before isn't finished.

`processing-data/reference/` has a finished version of everything.

**Predict before you run, every time.** Write your prediction in a comment, then save and check.

| Folder    | File          | Exercises | What you do                                                                   |
| --------- | ------------- | --------- | ----------------------------------------------------------------------------- |
| `block1/` | `taps.js`     | 1 to 4    | Store each tap as a moment, deal with held keys, find the gaps and the rate   |
| `block2/` | `sound.js`    | 5 and 6   | Let the gap set the note length, and fast tapping change the note             |
| `block3/` | `swipe.js`    | 7 to 10   | Give each key a position, capture a swipe, and hear which way it went         |
| `block4/` | `own.js`      | 11        | Your own action from this morning: store it, find the change, make it audible |
| `blue/`   | `patterns.js` | B1 to B3  | Keep only the last five taps, speeding up or slowing down, a second row       |
| `purple/` | `swipes.js`   | P1 and P2 | Fast and slow swipes, and swipes that turn around                             |

## Run a folder

1. Sync your fork and pull (see the main README), so this `processing-data/` folder is on your laptop.
2. Open the folder's `index.html` (for example `processing-data/start/block1/index.html`), then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab.
4. **Click on the page itself**, then press a key. The first key press switches the sound on.

When you save, the page reloads on its own and the code runs again from the top. Click the page again before you press keys. Moving on to the next folder? Open its `index.html` and run Live Preview again, and close the old tab.

## Block 1: tapping one key (`block1/taps.js`)

| Exercise | What you do                                                               | A commit message could be |
| -------- | ------------------------------------------------------------------------- | ------------------------- |
| 1        | Every space bar tap is stored with `Date.now()`; slow and quick taps      | `Store each tap`          |
| 2        | Hold the key down, work out what went wrong, and fix it yourself          | `One hold, one tap`       |
| 3        | The gap between the newest tap and the one before, and where `taps` lives | `Find the gaps`           |
| 4        | Turn the gap into taps per second                                         | `Taps per second`         |

## Block 2: make it audible (`block2/sound.js`)

| Exercise | What you do                                                        | A commit message could be |
| -------- | ------------------------------------------------------------------ | ------------------------- |
| 5        | The gap sets the note length, never longer than 1 second           | `Gap sets the length`     |
| 6        | Fast tapping plays a higher note, and you choose where fast begins | `Fast taps, higher note`  |

At the end of block 2: the pair check-in on the slides.

## Block 3: swiping across the keys (`block3/swipe.js`)

| Exercise | What you do                                                          | A commit message could be |
| -------- | -------------------------------------------------------------------- | ------------------------- |
| 7        | `row.indexOf` gives each key a position; take `key` out of the event | `Give keys a position`    |
| 8        | Push each position into `swipe`, and watch the numbers rise or fall  | `Capture a swipe`         |
| 9        | When the last key comes up, compare the first and last position      | `Which way`               |
| 10       | A rising or falling phrase, and what messy swipes look like          | `Hear the direction`      |

## Block 4: your own action (`block4/own.js`)

| Exercise | What you do                                                                | A commit message could be |
| -------- | -------------------------------------------------------------------------- | ------------------------- |
| 11       | Describe it, choose what to store, find the change between values, play it | `My own action`           |

## Blue: patterns over time (`blue/patterns.js`)

| Step | What you do                                                         | A commit message could be |
| ---- | ------------------------------------------------------------------- | ------------------------- |
| B1   | Keep only the last five taps with `shift`                           | `Only the last five`      |
| B2   | Compare the last two gaps: speeding up or slowing down, and hear it | `Speeding up`             |
| B3   | A second row, the home row, and which row a swipe was on            | `A second row`            |

## Purple: fast and slow swipes (`purple/swipes.js`)

| Step | What you do                                                      | A commit message could be |
| ---- | ---------------------------------------------------------------- | ------------------------- |
| P1   | A time for every position: fast swipes play fast, slow ones slow | `Fast and slow swipes`    |
| P2   | Swipes that turn around get their own sound                      | `Turning around`          |

## If something goes wrong

- **The list fills up with taps when you hold the key:** that's exercise 2. The browser repeats a held key, and every repeat is another keydown.
- **The first gap is `NaN`:** with one tap there's nothing before it. `taps[i - 1]` is `undefined`, and a number minus `undefined` is `NaN` (not a number).
- **The gaps are huge, like 1729000000000:** you're logging a time, not a gap. A gap is one time minus the one before.
- **`indexOf` gives back -1:** that key isn't in the row. Check the spelling and that it's lower case, and that caps lock is off.
- **`taps` only ever holds one moment:** `let taps = [];` has moved inside `keyDown`, so every tap starts a new, empty list. Put it back at the top of the file.
- **`ReferenceError: key is not defined`:** `const { key } = event;` makes `key` inside `keyDown` only. Use it there, or take it out of the event again in the other function.
- **Nothing plays after a swipe:** check that `keyup` is added at the bottom, and that you swiped over at least two keys without lifting your finger.
- **Slow swipes play nothing:** a swipe ends when no key is down. Lift your finger between keys and every key is a swipe of one.
- **The page scrolls when you press the space bar:** click the page first; if it still scrolls, it does no harm.
- **No sound, but the console logs:** click the page after it reloads, check the volume and your headphones, and check that `Tone.start();` is still the first line in `keyDown`.
