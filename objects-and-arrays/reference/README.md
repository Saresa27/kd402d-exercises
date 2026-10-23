# Objects and arrays: finished versions

`block1/` to `block3/`, `blue/` and `purple/` each hold one way to finish that part. Comments in each file explain the answers. Run them the same way as in `objects-and-arrays/start`: open the folder's `index.html` with Live Preview, open the console, click the page and press keys.

Yours can look different and still be right: other notes, other labels, other things to describe. What matters is that you can point at each value and say how you reach it: by position, by label, or by position and then label.

Don't change these files. Read them, copy from them, run them, but make your own changes in `objects-and-arrays/start`.

## Block 1 (`block1/arrays.js`)

When the page loads:

```
(5) ['A3', 'C4', 'E4', 'G4', 'B4']
5
```

Then pressing x, z, x:

```
pop took B4
(4) ['A3', 'C4', 'E4', 'G4']
shift took A3
(3) ['C4', 'E4', 'G4']
pop took G4
(2) ['C4', 'E4']
```

- **Exercise 1.** With three notes the indexes are 0 to 2, so the last index is `notes.length - 1`. `notes[notes.length]` is `undefined`: nothing plays, and there's no error.
- **Exercise 2.** `unshift("A3")` puts A3 at 0, so C4 moves from 0 to 1 and f plays A3 now. l plays B4 with no change to its code, because it asks for the length every time.
- **Exercise 3.** `pop` and `shift` give back what they removed. On an empty list they give back `undefined`, with no error.
- **Exercise 4.** `push` and `pop` work at the end: nobody else moves. `unshift` and `shift` work at the front: every other note's index changes by one. With 1000 notes that's 1000 moves each time.

## Block 2 (`block2/sound.js`)

When the page loads:

```
{note: 'C4', duration: '8n'}
C4
8n
undefined
C4
C4
0.8
8n
undefined
{note: 'C2', duration: '16n', velocity: 1}
{wave: 'square', release: 1.5}
```

- **Exercise 5.** `tone.pitch` is `undefined`: there's no part with that label. Asking for one that isn't there isn't an error.
- **Exercise 6.** `tone.note = "E4"` changes one part of the same object. After a save, the page reloads and `tone` is made again from the file, with C4.
- **Exercise 7.** `tone["note"]` is the same reach as `tone.note`. `tone.velocity = 0.8` adds a part, because there wasn't one. `tone[label]` uses the value inside `label`, `"duration"`; `tone.label` looks for a part called `label`.
- **Exercise 8.** One drum hit and one synth sound. s puts the sound's wave shape and release onto the synth, so t sounds different afterwards.

## Block 3 (`block3/steps.js`)

When the page loads:

```
4n
{note: 'E4', duration: '4n'}
2
undefined
3
```

Then a, then c:

```
step 0: C4 for 8n
step 1: E4 for 4n
step 2: G4 for 8n
step 3: C5 for 2n
1 steps are 4n long
```

- **Exercise 9.** `steps[1]` gives back the whole step, an object. `steps.note` is `undefined`: `steps` is the list, which has positions, not labels.
- **Exercise 11.** By hand, only the position and the start time change from line to line, and h never plays the fourth step. The loop plays all four, unchanged, because it asks `steps.length`.
- **Exercise 12.** Only E4 is `"4n"`.

## Blue (`blue/steps.js`)

- **B1.** A step without a velocity gives `undefined`, and Tone plays it at full strength, 1. No error: it's loud, not silent.
- **B2.** Inside `playStep` the step is already one object, so it reads `step.note`, not `steps[i].note`. The function doesn't care which list the step came from.
- **B3.** `songs[event.key]` finds the list for the key that was pressed: `a`, `b` or `d`. Any other key gives `undefined`, so nothing plays. It has to be brackets: the label is the value of `event.key`, which is only known when a key goes down. A new list needs one new part in `songs`, and no change to `keyDown`.

## Purple (`purple/song.js`)

When the page loads:

```
{accent: true, echo: false}
true
true
Intro
4
C5
```

- **P1.** `steps[0].effects.accent` is three hops: position, label, label. Without the check, a step with no effects stops the loop with `TypeError: Cannot read properties of undefined (reading 'accent')`.
- **P2.** `intro.steps[3].note` is label, position, label. `playSong` reads the gap and the steps from the song it's handed, so the outro needed no new code.
- **P3.** `Object.keys(step)` is a list of labels, so `step[label]` needs brackets. `effects` logs as `[object Object]`: joining an object onto a string turns it into that text.
