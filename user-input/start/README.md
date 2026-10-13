# User input

Until now, every program ran from top to bottom and stopped. Today the program waits for you to press a key, and responds the moment you do: your computer keyboard becomes an instrument.

This folder has two parts:

- **This morning:** `index.html` and `instrument.js` in this folder, which we build together in the lecture.
- **This afternoon:** four folders, `block1/`, `block2/`, `blue/` and `purple/`, which you work through at your own pace. See [This afternoon](#this-afternoon) below.

`user-input/reference/` has a finished version of everything.

## This morning

We build `instrument.js` together in the lecture, one step at a time. The steps in the file match the slides.

### Run it

1. Sync your fork and pull (see the main README), so this `user-input/` folder is on your laptop.
2. Open `user-input/start/index.html`, then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab.
4. Click **Switch the sound on**. Then click anywhere on the page, so the page has the keyboard, and press keys.

The instruments are made in `setup.js`; you don't need to change it. When you save, the page reloads on its own; click **Switch the sound on** again after each reload.

### The steps

After each step: save, press keys, check the console, and commit.

| Step | What you do                                                     | A commit message could be           |
| ---- | --------------------------------------------------------------- | ----------------------------------- |
| 1    | Listen for `keydown` and log `event.key`                        | `Log every key press`               |
| 2    | Play a note when `a` goes down, and another for `s`             | `Play a note on a key press`        |
| 3    | Write `noteFor(key)`, and play the note it gives back           | `Look up the note for each key`     |
| 4    | Start the note on `keydown`, stop it on `keyup`, skip repeats   | `Hold and release notes`            |
| 5    | `z` and `x` change the octave, space switches the sound          | `Change octave and sound with keys` |
| 6    | Make it your own                                                | your choice                         |

### Make it your own

Some ideas:

- Add the black keys: `w e t y u` play `C#` `D#` `F#` `G#` `A#`.
- Map the keys by letter instead: `c` plays C, `d` plays D … `b` plays B. Which is easier to play? Which is easier to remember?
- Only the notes C, D, E, G and A (a pentatonic scale): nothing you play sounds wrong.
- A different sound: change a `new Tone.PolySynth()` in `setup.js` to `new Tone.PolySynth(Tone.FMSynth)`. (This is the one time you may change `setup.js`.)
- A key that changes how long every note is, or how loud.

## This afternoon

Self-paced, in VS Code, with the slides for this afternoon open on your laptop. There are three tracks: **core** (blocks 1 and 2) for everyone, then **blue** or **purple**. Each part has its own folder, and each folder starts from code that works, so you can start block 2 even if block 1 isn't finished.

| Folder    | File             | Exercises | What you do                                              |
| --------- | ---------------- | --------- | -------------------------------------------------------- |
| `block1/` | `listening.js`   | 1 to 4    | Hear the event, play notes with `if` / `else if`, name the handler |
| `block2/` | `key-as-data.js` | 5 to 8    | Let the key's value pick the note: by name, then by position, with Shift |
| `blue/`   | `hold.js`        | B1 to B3  | Hold notes with `keyup`, skip repeats, remember an octave and a mute switch |
| `purple/` | `perform.js`     | P1 to P4  | Play along with Friday's song: start, stop, switch parts, change the tempo |

### Run a folder

1. Open the folder's `index.html` (for example `user-input/start/block1/index.html`), then run **Live Preview: Show Preview (External Browser)** from the Command Palette.
2. Open the browser's developer tools and click the **Console** tab.
3. **Click on the page itself**, then press keys. The first key press switches the sound on: every handler calls `Tone.start()` first.

Each file makes its own instrument in its first line; there's no `setup.js` in these folders. When you save, the page reloads on its own; click the page again before you play.

### Block 1: listening for keys (`block1/listening.js`)

| Exercise | What you do                                                     | A commit message could be      |
| -------- | --------------------------------------------------------------- | ------------------------------ |
| 1        | Predict `event.key` for five keys, then check                   | `Log every key press`          |
| 2        | `a` plays C4                                                    | `Play a note on a`             |
| 3        | `s` and `d` with `else if`, and a three-note tune               | `Three keys, three notes`      |
| 4        | Name the handler `handleKeyDown`, and find out who calls it     | `Name the key handler`         |

### Block 2: the key as data (`block2/key-as-data.js`)

| Exercise | What you do                                                        | A commit message could be      |
| -------- | ------------------------------------------------------------------ | ------------------------------ |
| 5        | Keys are note names: the letter is the pitch                       | `Letters play their own note`  |
| 6        | Keys are piano keys: `noteForKey(key, oct)` for the home row       | `Piano layout on the home row` |
| 7        | Shift plays an octave up                                           | `Shift for an octave up`       |
| 8        | Log what came in and what it played                                | `Log key and note`             |

### Blue: hold, repeat, remember (`blue/hold.js`)

| Step | What you do                                                      | A commit message could be     |
| ---- | ---------------------------------------------------------------- | ----------------------------- |
| B1   | A `PolySynth`: start on `keydown`, stop on `keyup`               | `Hold notes while keys are down` |
| B2   | Skip the repeated keydowns with `event.repeat`                   | `Ignore key repeat`           |
| B3   | `z` / `x` change the octave (2 to 6), `m` mutes                  | `Octave and mute keys`        |

### Purple: play along with the song (`purple/perform.js`)

| Step | What you do                                                      | A commit message could be     |
| ---- | ---------------------------------------------------------------- | ----------------------------- |
| P1   | Space starts the song, or stops it if it's playing               | `Space starts and stops`      |
| P2   | Keys 1 to 4 switch the bass, chord, melody and high note         | `Switch parts on and off`     |
| P3   | Arrow keys change the tempo by 5 (60 to 180)                     | `Tempo on the arrow keys`     |
| P4   | Play the home row on top, landing on the beat with `"@8n"`        | `Play along in time`          |

## If something goes wrong

- **Nothing happens when you press keys, and there's no error:** check the spelling of the event name. It's `"keydown"`, all lowercase. `"keyDown"` isn't an error: the browser waits for an event called that, and it never comes.
- **One note plays when the page loads, then nothing:** there are brackets after the function name in `addEventListener("keydown", playNote())`. That calls `playNote` straight away and hands over what it gives back. Take the brackets off: `addEventListener("keydown", playNote)`.
- **Key presses show up in the console instead of the page:** the console has the keyboard. Click on the page itself first.
- **No sound, but the console logs the key:** click **Switch the sound on** again (every reload switches it off), and check the volume and your headphones.
- **`TypeError: Cannot read properties of undefined (reading 'key')`:** the function has no `event` parameter, or you called it yourself. Write `function startNote(event)`, and let the browser call it.
- **A note keeps playing after you let go:** the `keyup` listener is missing, or `stopNote` asks `noteFor` for a different note than `startNote` did. Did the octave change while the key was down? Press the key again to release it.
- **A held note stutters:** the `if (event.repeat)` check is missing at the top of `startNote`.
- **`SyntaxError: Identifier 'synth' has already been declared`:** `synth` is made in `setup.js`. Don't make it again in `instrument.js`.
- **`noteFor` always gives back `""`:** log `key` at the top of `noteFor`. Is it the key you expected? Capitals count: with Shift or Caps Lock on, `a` is `"A"`.
- **No sound in the afternoon folders, but the console logs the key:** is `Tone.start();` the first line inside your handler? Did you click the page after it reloaded?
- **With Shift held, nothing plays:** `event.key` is a capital letter (`"A"`). Look up `event.key.toLowerCase()` instead.
- **`"h"` plays with the letters mapping:** check the comparison. `event.key <= "g"` keeps only a to g.
- **The tempo shows `125.00000000000001`:** keep the tempo in your own `let tempo` variable, change that, and give it to Tone: `Tone.Transport.bpm.value = tempo;`
