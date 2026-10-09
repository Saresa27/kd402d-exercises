# Conditionals

This morning we built a song whose shape comes from decisions. This afternoon you make your own decisions in code: store yes/no facts, ask questions with comparisons, and let `if`, `else if` and `else` choose what you hear.

The slides for this afternoon walk you through every exercise: open them on your own laptop and go at your own pace.

The song uses one new thing from Tone.js: `Tone.Loop`. Think of it as "Tone calls this function for us, once every beat". That's all you need to know about it today.

## Run it

1. Sync your fork and pull (see the main README), so this `conditionals/` folder is on your laptop.
2. Open `conditionals/start/index.html`, then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab.
4. Click **1 · A yes/no fact**. You should hear one note.

Each core exercise has its own file (`exercise1.js`, `exercise2.js` …) and its own button on the page. The instruments are made in `setup.js`; you don't need to change it. When you save, the page reloads on its own.

Today every exercise keeps its variables inside its own function, so they don't clash with the variables in `demos.js` and `song.js`. Keep yours there too.

## The exercises

Do them in order. After each one: save, press its button, check the console, and commit.

| Exercise | File           | What you do                                          | A commit message could be         |
| -------- | -------------- | ---------------------------------------------------- | --------------------------------- |
| 1        | `exercise1.js` | Store a yes/no fact: `let isMuted = false;`          | `Store a yes/no fact`             |
| 2        | `exercise2.js` | Log the answers to three comparisons                 | `Log three comparisons`           |
| 3        | `exercise3.js` | Predict, then check, all six comparison operators    | `Predict six comparisons`         |
| 4        | `exercise4.js` | Compare `"4"` and `4` with `==` and `===`            | `Compare text and numbers`        |
| 5        | `exercise5.js` | Let `if` / `else` decide whether the note plays      | `Let isMuted decide`              |
| 6        | `exercise6.js` | Pick a low, middle or high note from the tempo       | `Pick a note from the tempo band` |
| 7        | `exercise7.js` | Combine conditions with `&&`, `\|\|` and `!`         | `Combine conditions`              |
| 8        | `exercise8.js` | Log which block ran, and fix the one that never runs | `Fix the order of the questions`  |

## Blue and purple tracks: the song

When 1–8 are done, build this morning's song yourself, one step at a time, in `song.js`. Each step changes one thing, so you always hear what your last change did. Press **Play** under "the song" on the page; you should hear a low note on every beat. **Stop** ends it.

- **Blue track:** steps 1, 3 and 4 (step 4c guards a sound with `&&`).
- **Purple track:** steps 5 and 6: bars, sections, and an ending. Do blue first.

After each step: save, press Play, listen, check the console, and commit.

| Step | What you do                                         | A commit message could be          |
| ---- | --------------------------------------------------- | ---------------------------------- |
| 1    | Write `playChord` and `playMelody`                  | `Add chord and melody functions`   |
| 3    | Count the beats from 1 to 4, then start again       | `Count the beats`                  |
| 4    | Play the bass on beat 1 and the chord on beats 1, 3 | `Decide what plays on which beat`  |
| 4c   | Play a high note on beat 4, only while `isLively`   | `Guard the high note with &&`      |
| 5    | Count the bars, and bring the melody in at bar 3    | `Bring the melody in after bar 2`  |
| 6    | Change the melody in each section, and end the song | `Give each section its own melody` |

Step 2 is already done for you: it's the `Tone.Loop` line.

## The demos

`demos.js` has the four short demos from the lecture: `if` / `else`, a comparison, `else if`, and `&&`, `||`, `!`. Each has its own button. Change the values at the top of a demo (`isHappy`, `energy`, `note` …), save, and press its button again. Before you press it, say out loud what you think you'll hear.

## Your own changes

When the song works, make it yours. Some ideas:

- Add a fourth section with its own melody note: one more `else if`.
- Play the bass on beat 3 too, but only after bar 4. Which operator joins those two conditions?
- Make a variable `let isSilent = false;` and play nothing at all while it is `true`. (Not `isMuted`: `demos.js` already has one, and two `let`s with the same name stop the file.)

## If something goes wrong

- **A button does nothing:** that file stopped before it reached the bottom, where its button is connected. Look for a red error in the console, and the file name and line number next to it.
- **The console says `false` and nothing else:** the round brackets around the comparison are missing. `"is it 8n? " + duration === "8n"` glues the text first, then compares the whole thing. Write `"is it 8n? " + (duration === "8n")`.
- **`SyntaxError: Identifier 'isMuted' has already been declared`:** two `let`s make the same name at the top level of two files. Keep the variable inside the exercise's function, or give it a new name.
- **A block never runs:** log a line as the first thing in each block. JavaScript runs the first block whose answer is `true`; an earlier, wider question may be catching everything (exercise 8).
- **`"false"` in quotation marks still counts as yes:** in an `if`, any text with something in it counts as `true`. Booleans have no quotation marks.
- **The console counts 1, 2, 3, 4, 5, 6 …:** the `if (beat > 4)` is missing, or it's above the line that adds one.
- **`ReferenceError: beat is not defined`:** the `let beat = 1;` line is missing, or it's spelled differently. Capitals count.
- **`SyntaxError: Unexpected token '}'`** or **`'else'`:** a curly bracket is missing or one too many. Every `{` needs its `}`. Format the file (it happens on save) and look at the indentation: it shows where each block ends.
- **The melody never comes in:** log `bar` and check that it goes up. Is `bar = bar + 1;` inside the `if (beat > 4)` block?
- **You wrote `=` instead of `===`:** `if (beat = 1)` doesn't compare, it puts 1 in `beat`. Every beat becomes beat 1. Use `===` to ask a question.
- **No sound:** check the volume and your headphones. Sound only starts after you click a button.
