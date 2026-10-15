// Arrays and iteration · Block 3: counting while you walk
// Exercises 9 to 11. Nothing plays in this block: the code runs every time you save,
// and the answers are in the console. Predict first, every time.
// After each exercise: save, read the console, and commit.

// A longer melody, with some notes more than once.
let melody = ["C4", "E4", "G4", "C4", "A4", "C4", "G4", "E4"];

// ---------- Exercise 9: count something ----------
// How many times does "C4" come in the melody?
// 9a Predict the count, in a comment, by reading the list above.
// TODO 9b: write it in three parts:
//            before the loop:  let count = 0;
//            in the loop:      if melody[i] is "C4", add one:  count++;
//            after the loop:   console.log("C4 comes " + count + " times");
// TODO 9c: move  let count = 0;  inside the loop, as the first line of the body. Predict, then
//          run it. In a comment: what went wrong, and why? Then move it back.

// ---------- Exercise 10: count something else ----------
// TODO 10: write a second loop, with its own counter, that counts something you choose.
//          Give the counter a name that says what it counts. Predict, then check. Some ideas:
//            - notes that aren't "C4"                 (!==)
//            - notes that are "E4" or "G4"            (||)
//            - notes in the first half of the melody  (a test on i, not on melody[i])
//            - every note: what should that count be, without the loop?

// ---------- Exercise 11: trace it by hand ----------
// A short melody, so you can follow every pass.
let short = ["E4", "C4", "G4", "C4"];
// TODO 11a: in a comment, write a table: one row per pass, with the value of i,
//           short[i], and the count at the START of that pass. Like this:
//             i | short[i] | count at the start
//             0 | "E4"     | 0
//             1 | ...
//           Then write what is logged after the loop.
// TODO 11b: only now, write the loop that counts "C4" in short, and log the count after it.
//           Add  console.log(i, short[i], countShort);  as the first line of the body
//           to check your table, pass by pass.
