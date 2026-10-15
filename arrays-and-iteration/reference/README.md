# Arrays and iteration: finished versions

`block1/` to `block4/`, `blue/` and `purple/` each hold one way to finish that part. Comments in each file explain the answers. Run them the same way as in `arrays-and-iteration/start`: open the folder's `index.html` with Live Preview, open the console, and (except in blocks 1 and 3) click the page and press keys.

Yours can look different and still be right: other notes, other names, other things to count. What matters is that you can point at each loop and say where it starts, when it stops, how it steps, and what happens at every position.

Don't change these files. Read them, copy from them, run them, but make your own changes in `arrays-and-iteration/start`.

## Block 1 (`block1/arrays.js`)

The console, top to bottom:

```
(4) ['C4', 'E4', 'G4', 'B4']
4
C4
B4
B4
undefined
0
1
2
3
4
(4) ['C4', 'C4', 'G4', 'G4']
(4) ['C4', 'E4', 'G4', 'B4']
E4
B4
0.6
1
0
```

Chrome shows an array with its length in front, `(4)`. Click the arrow to open it up.

- **Exercise 1.** Four notes, so the indexes are 0 to 3: the last index is always `length - 1`. `melody[4]` isn't an error; there's nothing there, so it's `undefined`.
- **Exercise 3.** `unshift` adds at the front, so E4 moves from 0 to 1 and G4 from 1 to 2. `push` adds at the end and nobody moves.
- **Exercise 4.** `steps[1] + steps[2]` is `1`: numbers add up. The console shows numbers without quotes.

## Block 2 (`block2/loop.js`)

With five notes (after 8b), one key press logs:

```
---- playMelody ----
pass 0: C4
pass 1: E4
pass 2: G4
pass 3: B4
pass 4: C5
```

- **Exercise 5.** All the notes start at the same moment, so you hear a chord: the loop doesn't wait between passes.
- **Exercise 6.** With `<=` and four notes there's a fifth pass, `pass 4: undefined`. There's nothing at index 4, Tone gets nothing to play, and there's no error.
- **Exercise 7.** Starting at 1, the first pass is `pass 1: E4`, and C4 never plays.
- **Exercise 8.** The loop asks the array for its length every time it checks the test, so it works for any number of notes.

## Block 3 (`block3/count.js`)

```
C4 comes 3 times
Notes that aren't C4: 5
Notes that are E4 or G4: 4
Notes in the first half: 4
0 E4 0
1 C4 0
2 G4 1
3 C4 1
C4 comes 2 times in short
```

- **Exercise 9c.** With `let count = 0;` inside the loop, the count starts again at every pass, and it only exists inside the loop: `ReferenceError: count is not defined`.
- **Exercise 11.** The table is the count at the _start_ of each pass. It goes up during pass 1 and pass 3, so the log after the loop shows 2.

## Block 4 (`block4/timing.js`)

- **Exercise 12.** The last of four notes has `i = 3`, so it starts `3 * 0.4 = 1.2` seconds after the key press. (1.6 is the common wrong answer: it counts four gaps, but there are three.) The console shows `1.2000000000000002`: computers store most decimals a tiny bit off.
- **Exercise 12c.** Without `Tone.now() +`, a plain number means seconds after the sound started on the page. A few seconds after loading, those moments have gone, and nothing plays.
- **Exercise 13.** The last note starts at `3 * step`: 0.6 seconds for 0.2, 2.4 seconds for 0.8.
- **Exercise 14.** `bass` has five notes, so its last note starts at `4 * 0.4 = 1.6` seconds. Nothing in the loop changed: only its list became a parameter, `notes`.

## Blue (`blue/choices.js`)

- **B1.** C4 plays for `"4n"`, E4 for `"16n"`, everything else for `"8n"`. The `let length` is inside the loop on purpose: every note starts from `"8n"`.
- **B2.** `findNote("A4")` checks indexes 0 to 4 and stops. `findNote("B4")` checks all eight, then says it isn't there. `findNote("G4")` finds the first G4, at index 2, and never reaches the second.
- **B3.** `C4 comes 3 times` and `The melody is: C4 E4 G4 C4 A4 G4 E4 C4`, from one walk.

## Purple (`purple/patterns.js`)

- **P1.** `tune[i]` and `lengths[i]` belong together because they share an index. The running start time is the same pattern as block 3's count: made before the loop, changed in every pass.
- **P2.** The inner loop runs all the way through for every pass of the outer one: 3 × 4 = 12 notes. The last is note number 11, at `11 * 0.3 = 3.3` seconds.
- **P3.** Strength is the fourth value of `triggerAttackRelease`, from 0 to 1.
- **P4.** `filter` and the same loop with `push` give the same `["E4", "G4", "B4"]`. That's what `filter` is: a loop with the bookkeeping done for you.
