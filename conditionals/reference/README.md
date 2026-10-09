# Conditionals: a finished version

One way to do every exercise in `conditionals/start`: the core exercises (`exercise1.js` to `exercise8.js`) and the song for the blue and purple tracks (`song.js`, all steps done). `demos.js` is the same as in `start/`: the four demos from the lecture. Comments in each file explain the answers.

Yours can look different and still be right: other notes, other names, other numbers. What matters is that you can point at each comparison and say what question it asks, and at each `if` and say which block runs and why.

Run it the same way as `conditionals/start`: open `index.html` with Live Preview, open the console, and press the buttons.

Don't change these files. Read them, copy from them, run them, but make your own changes in `conditionals/start`.

## Worked through, exercise by exercise

What each button should play and log, and the reasoning behind it.

### 1 · A yes/no fact

```js
let isMuted = false;
console.log("Exercise 1: isMuted is " + isMuted);
```

Console: `Exercise 1: isMuted is false`. One note plays. `false` has no quotation marks: it's a boolean, not text. In 1c you were the decision: you read `isMuted`, saw `true`, and turned the line off by hand. Nothing in the code reads the fact yet.

### 2 · A comparison

```js
console.log("Exercise 2: is duration 8n? " + (duration === "8n"));
console.log("Exercise 2: is duration not 4n? " + (duration !== "4n"));
console.log("Exercise 2: is bpm more than 100? " + (bpm > 100));
```

Console: `true`, `true`, `false`. A comparison is a question; its answer is a boolean. With `duration = "4n"` and `bpm = 120`, all three flip. Without the round brackets, `+` runs first and the console shows only `false`.

### 3 · Six comparisons

With `bpm = 90` and `octave = 4`:

| Comparison    | Answer  | Why                          |
| ------------- | ------- | ---------------------------- |
| `bpm === 90`  | `true`  | same value, same kind        |
| `bpm !== 120` | `true`  | 90 is not 120                |
| `bpm < 90`    | `false` | 90 is not less than itself   |
| `octave > 3`  | `true`  |                              |
| `bpm <= 90`   | `true`  | the `=` lets 90 itself count |
| `octave >= 5` | `false` |                              |

With `bpm = 120` and `octave = 5`: `false`, `false`, `false`, `true`, `false`, `true`.

### 4 · `==` or `===`

```js
typedOctave == octave; // true
typedOctave === octave; // false
Number(typedOctave) === octave; // true
```

`==` turns `"4"` into `4` before comparing (yesterday's type coercion), so it hides that `typedOctave` is text. `===` compares the value and its kind, so it tells the truth. We use `===` by default, and turn text into a number on purpose when we need to.

### 5 · `if` / `else`

```js
if (isMuted) {
  console.log("Exercise 5: muted, so nothing plays");
} else {
  synth.triggerAttackRelease(note, duration, start);
}
```

`false`: the note plays. `true`: silence, and the console says so. One block runs, never both. In 5c, `"false"` in quotation marks is text, and in an `if` any text with something in it counts as yes: silence, which is why booleans have no quotation marks.

### 6 · `else if`

```js
if (bpm < 80) {
  synth.triggerAttackRelease("C3", "4n", start);
} else if (bpm < 120) {
  synth.triggerAttackRelease("C4", "4n", start);
} else {
  synth.triggerAttackRelease("C5", "4n", start);
}
```

60 → C3, 100 → C4, 140 → C5. The edges: 80 plays C4 (80 is not less than 80), 120 plays C5. The first question whose answer is `true` wins; the rest are skipped.

### 7 · And, or, not

```js
if (!isMuted && bpm > 90) {
  synth.triggerAttackRelease("E4", duration, start);
}
if (duration === "8n" || duration === "16n") {
  synth.triggerAttackRelease("G5", "16n", start + 0.5);
}
```

| Change from the start values | E4 plays? | High G plays? |
| ---------------------------- | --------- | ------------- |
| none                         | yes       | yes           |
| `isMuted = true`             | no        | yes           |
| `bpm = 80`                   | no        | yes           |
| `duration = "4n"`            | yes       | no            |
| `duration = "16n"`           | yes       | yes           |

Each side of `||` is a whole comparison: `duration === "8n" || "16n"` doesn't ask what it looks like it asks.

### 8 · Which block ran?

The starter asks `bpm > 60` first. 150 is more than 60, so the middle block runs and the fast block can never run: anything more than 120 is also more than 60. A log in each block shows it straight away:

```
Exercise 8: playing the middle pattern because bpm is 150
```

The fix is to ask the narrowest question first: `bpm > 120`, then `bpm > 60`, then `else`. After the fix: 150 → fast, 90 → middle, 50 → slow.

### The song (blue and purple)

`song.js` here has every step. Pressing Play, the console counts `bar 1, beat 1` up to `bar 8, beat 4`, then the song stops.

| Bar | Beat 1       | Beat 2 | Beat 3     | Beat 4      |
| --- | ------------ | ------ | ---------- | ----------- |
| 1–2 | bass + chord |        | chord      | high C      |
| 3–4 | bass + chord | G4     | chord + G4 | G4 + high C |
| 5–6 | bass + chord | A4     | chord + A4 | A4 + high C |
| 7–8 | bass + chord | E4     | chord + E4 | E4 + high C |

The high C on beat 4 is step 4c: it plays only while `isLively && beat === 4` is `true`. Set `isLively` to `false` and it's gone.
