# Objects and arrays

This morning, one sound became one thing with labelled parts, `tone`, reached by label: `tone.note`. Then a melody became a list of those things, `steps`, reached by position and then by label: `steps[0].note`. This afternoon you build them yourself, change them while they play, and decide for yourself when something is a list and when it's a thing with labelled parts.

Self-paced, in VS Code, with the slides for this afternoon open on your laptop. There are three tracks: **core** (blocks 1 to 3) for everyone, then **blue** or **purple**. Each part has its own folder, and each folder starts from code that works, so you can start a block even if the one before isn't finished.

`objects-and-arrays/reference/` has a finished version of everything.

**Predict before you run, every time.** Write your prediction in a comment, then save and check.

| Folder    | File        | Exercises | What you do                                                                           |
| --------- | ----------- | --------- | ------------------------------------------------------------------------------------- |
| `block1/` | `arrays.js` | 1 to 4    | Reach notes by position, grow the list at both ends, shrink it with `pop` and `shift` |
| `block2/` | `sound.js`  | 5 to 8    | Build a `tone` object, change it, reach it with brackets, describe something real     |
| `block3/` | `steps.js`  | 9 to 12   | A list of step objects: reach in, add one, play them all, count some                  |
| `blue/`   | `steps.js`  | B1 to B3  | A velocity per step, a function for one step, and lists picked by key                 |
| `purple/` | `song.js`   | P1 to P3  | Objects inside objects: effects per step, a whole song as one object                  |

## Run a folder

1. Sync your fork and pull (see the main README), so this `objects-and-arrays/` folder is on your laptop.
2. Open the folder's `index.html` (for example `objects-and-arrays/start/block1/index.html`), then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab.
4. **Click on the page itself**, then press a key. The first key press switches the sound on.

When you save, the page reloads on its own and the code runs again from the top. Click the page again before you press keys. Moving on to the next folder? Open its `index.html` and run Live Preview again, and close the old tab.

## Block 1: the melody, extended (`block1/arrays.js`)

| Exercise | What you do                                                                 | A commit message could be      |
| -------- | --------------------------------------------------------------------------- | ------------------------------ |
| 1        | f, m and l play the first note, `notes[2]` and the last note                | `Play notes by position`       |
| 2        | `push` at the end, `unshift` at the front, and predict where C4 went        | `Grow the melody at both ends` |
| 3        | x takes the last note off with `pop` and plays it, z the first with `shift` | `Shrink the melody`            |
| 4        | In a comment: which of the four make every other note move?                 | `Who has to move`              |

## Block 2: one sound, described (`block2/sound.js`)

| Exercise | What you do                                                             | A commit message could be      |
| -------- | ----------------------------------------------------------------------- | ------------------------------ |
| 5        | Build `tone`, log it, and make t play it by reading its labels          | `Build a tone`                 |
| 6        | e changes the note and d the duration, without making a new object      | `Change the tone`              |
| 7        | `tone["note"]`, add `velocity`, and a label kept in a variable          | `Reach the tone with brackets` |
| 8        | Describe a drum hit, a synth sound or one of your own keys as an object | `Describe something real`      |

At the end of block 2: the pair check-in on the slides.

## Block 3: a list of steps (`block3/steps.js`)

| Exercise | What you do                                                             | A commit message could be |
| -------- | ----------------------------------------------------------------------- | ------------------------- |
| 9        | 1 and 2 play one step each: position, then label                        | `Play one step`           |
| 10       | `push` a step, and l plays the last one, however many there are         | `Add a step`              |
| 11       | Play them all by hand, then with the `for` loop, then add a fourth step | `Play every step`         |
| 12       | Count the steps that are `"4n"` long, and log every pass                | `Count the long steps`    |

## Blue: steps that say more (`blue/steps.js`)

| Step | What you do                                                               | A commit message could be |
| ---- | ------------------------------------------------------------------------- | ------------------------- |
| B1   | A `velocity` in every step, handed to the synth                           | `A velocity per step`     |
| B2   | `playStep(step, when)` plays one step object; the loop uses it            | `One function, one step`  |
| B3   | A bass line, and an object that picks the list by key: `songs[event.key]` | `Pick a list by key`      |

## Purple: objects inside objects (`purple/song.js`)

| Step | What you do                                                           | A commit message could be |
| ---- | --------------------------------------------------------------------- | ------------------------- |
| P1   | `effects` in every step: accents and echoes, and a step that has none | `Accents and echoes`      |
| P2   | A song is one object with a title, a gap and a list of steps          | `A song as an object`     |
| P3   | Optional: `Object.keys`, and every part of a step without naming it   | `Every label`             |

## If something goes wrong

- **`SyntaxError: Unexpected identifier` or `Unexpected string`, pointing into an object:** a comma is missing, between two parts or between two steps.
- **`SyntaxError` inside the curly braces:** `note = "C4"` with `=`. Inside an object it's a colon: `note: "C4"`.
- **It logs `undefined` where you expected a value:** check the spelling of the label, capitals included. `tone.Note` and `tone.note` are different labels.
- **`steps.note` is `undefined`:** `steps` is the list, and a list has positions, not labels. Choose a step first: `steps[0].note`.
- **`TypeError: Cannot read properties of undefined (reading 'note')`:** the position is past the end, so there's no step there to read a label from. The last step is at `steps.length - 1`.
- **`tone.label` is `undefined`, but `label` holds `"duration"`:** the dot looks for a part literally called `label`. When the label is in a variable, use brackets: `tone[label]`.
- **`Tone.note` is `undefined`:** a capital T means the library. Your object is `tone`.
- **Your change by key is gone after a save:** the page reloads and the code runs from the top again, so the object starts as it's written in the file.
- **h doesn't play the step you pushed last:** `playByHand` only plays the positions you typed. The loop asks `steps.length` every time.
- **No sound, but the console logs:** click the page after it reloads, check the volume and your headphones, and check that `Tone.start();` is still the first line in `keyDown`.
