# Arrays and iteration

This morning, many notes went into one list, `melody`, and a `for` loop walked it for us: start at 0, keep going while `i < melody.length`, step forward, and do something at every position. This afternoon you write those loops yourself, break them on purpose, and make them do more than play.

Self-paced, in VS Code, with the slides for this afternoon open on your laptop. There are three tracks: **core** (blocks 1 to 4) for everyone, then **blue** or **purple**. Each part has its own folder, and each folder starts from code that works, so you can start a block even if the one before isn't finished.

`arrays-and-iteration/reference/` has a finished version of everything.

**Predict before you run, every time.** Write your prediction in a comment, then save and check. That's how you learn to see an off-by-one before the computer does.

| Folder    | File          | Exercises | What you do                                                        |
| --------- | ------------- | --------- | ------------------------------------------------------------------ |
| `block1/` | `arrays.js`   | 1 to 4    | Make arrays a few ways: write them out, `push`, `unshift`, numbers |
| `block2/` | `loop.js`     | 5 to 8    | Write the `for` loop yourself, break it at both ends, fix it       |
| `block3/` | `count.js`    | 9 to 11   | Count while you walk, then trace a loop by hand                    |
| `block4/` | `timing.js`   | 12 to 14  | Use `i` to spread the notes out in time, then play a second list   |
| `blue/`   | `choices.js`  | B1 to B3  | `if` inside the loop, stop early with `break`, two counts at once  |
| `purple/` | `patterns.js` | P1 to P4  | Two lists by one index, a loop inside a loop, a little variation   |

Today's arrays hold single values: notes, numbers. Arrays of things with labelled parts come on Friday.

## Run a folder

1. Sync your fork and pull (see the main README), so this `arrays-and-iteration/` folder is on your laptop.
2. Open the folder's `index.html` (for example `arrays-and-iteration/start/block1/index.html`), then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab.
4. Blocks 1 and 3 only log: read the console. In the other folders, **click on the page itself**, then press a key. The first key press switches the sound on.

When you save, the page reloads on its own and the code runs again. Click the page again before you press keys. Moving on to the next folder? Open its `index.html` and run Live Preview again, and close the old tab.

## Block 1: making arrays (`block1/arrays.js`)

| Exercise | What you do                                                            | A commit message could be    |
| -------- | ---------------------------------------------------------------------- | ---------------------------- |
| 1        | Log `melody`, its length, its first and last note, and `melody[4]`     | `Log the melody by position` |
| 2        | Start from `[]` and `push` four notes, logging the length each time    | `Build a riff with push`     |
| 3        | `unshift` at the front, `push` at the end, and predict the new indexes | `Add at both ends`           |
| 4        | An array of numbers, and `new Array()` so you recognise it             | `An array of numbers`        |

## Block 2: writing the loop by hand (`block2/loop.js`)

| Exercise | What you do                                                  | A commit message could be     |
| -------- | ------------------------------------------------------------ | ----------------------------- |
| 5        | Write the `for` loop from its four parts, without copying it | `Loop over the melody`        |
| 6        | Change `<` to `<=`, and explain what `melody[4]` is          | `Break the loop at the end`   |
| 7        | Start at 1 instead of 0: which note goes missing?            | `Break the loop at the start` |
| 8        | Fix it, `push` a fifth note, and run the same loop unchanged | `Five notes, same loop`       |

## Block 3: counting while you walk (`block3/count.js`)

| Exercise | What you do                                                         | A commit message could be |
| -------- | ------------------------------------------------------------------- | ------------------------- |
| 9        | Count the C4s: a counter before the loop, `count++` inside it       | `Count the C4s`           |
| 10       | Count something you choose, with its own counter                    | `Count something else`    |
| 11       | Write a table of every pass by hand, then check it with the console | `Trace a loop by hand`    |

At the end of block 3: the pair check-in on the slides.

## Block 4: spreading the notes out in time (`block4/timing.js`)

| Exercise | What you do                                                           | A commit message could be |
| -------- | --------------------------------------------------------------------- | ------------------------- |
| 12       | Give each note a start time: `Tone.now() + i * 0.4`                   | `Spread the melody out`   |
| 13       | Try a step of 0.2 and 0.8, predicting when the last note starts       | `Change the step`         |
| 14       | `playNotes(notes)` plays any list: `a` plays the melody, `b` the bass | `One loop, two lists`     |

## Blue: decide inside the loop (`blue/choices.js`)

| Step | What you do                                                            | A commit message could be  |
| ---- | ---------------------------------------------------------------------- | -------------------------- |
| B1   | `if` / `else if` on `notes[i]` gives different notes different lengths | `Longer and shorter notes` |
| B2   | `findNote(target)` stops at the first match with `break`               | `Find a note and stop`     |
| B3   | One loop keeps a count and a list of the notes at the same time        | `Two running values`       |

## Purple: loops over loops (`purple/patterns.js`)

| Step | What you do                                                              | A commit message could be     |
| ---- | ------------------------------------------------------------------------ | ----------------------------- |
| P1   | `tune` and `lengths`, walked by one index, with a running start time     | `A tune with its own lengths` |
| P2   | A loop inside a loop: the melody three times, an octave higher each time | `Repeat in rising octaves`    |
| P3   | Every note a little stronger or softer, with `Math.random()`             | `A little variation`          |
| P4   | Optional: `filter` and `map`, a look at where loops go next              | `Try filter and map`          |

## If something goes wrong

- **The last pass logs `undefined`, and nothing plays for it:** the test is `i <= melody.length`. The last index is `melody.length - 1`, so the test is `i < melody.length`.
- **The first note is missing:** the loop starts at `let i = 1`. Positions start at 0.
- **All the notes play at once, as a chord:** the loop doesn't wait between passes. Give each note a start time: `Tone.now() + i * 0.4`.
- **The melody plays once after loading, then goes quiet:** the start time is `i * 0.4` without `Tone.now() +`. A plain number means "seconds after the sound started on this page", and those moments have gone.
- **The count is always 0 or 1:** `let count = 0;` is inside the loop, so it starts again at every pass. Move it above the loop.
- **`ReferenceError: count is not defined`:** the same thing: a `let` inside the loop only exists inside the loop. Make the counter before the loop.
- **Every note counts:** `if (melody[i] = "C4")` puts "C4" into the array instead of asking. Use `===`.
- **`TypeError: melody is not a function`:** round brackets, `melody(0)`. Positions use square brackets: `melody[0]`.
- **`SyntaxError` on the `for` line:** the three parts are separated by semicolons, not commas: `for (let i = 0; i < melody.length; i++)`.
- **The page freezes:** the loop never stops. Check the step: `i++`, not `i--`, and that the test uses `i`.
- **No sound, but the console logs:** click the page after it reloads, check the volume and your headphones, and check that `Tone.start();` is still the first line in `keyDown`.
