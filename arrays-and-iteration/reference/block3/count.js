// Arrays and iteration · Block 3: counting while you walk (finished version)
// Exercises 9 to 11, done. The code runs every time the page loads; the answers are in the console.

// A longer melody, with some notes more than once.
let melody = ["C4", "E4", "G4", "C4", "A4", "C4", "G4", "E4"];

// ---------- Exercise 9: count something ----------
let count = 0; // before the loop: starts at 0, once
for (let i = 0; i < melody.length; i++) {
  if (melody[i] === "C4") {
    count++; // in the loop: one more, only when the test is true
  }
}
console.log("C4 comes " + count + " times"); // after the loop: C4 comes 3 times

// 9c: with  let count = 0;  inside the loop, count goes back to 0 at the start of every pass.
// It also only exists inside the loop, so the console.log after it fails with
//   ReferenceError: count is not defined
// The counter has to be made once, before the loop, so it survives from pass to pass.

// ---------- Exercise 10: count something else ----------
let notC = 0;
for (let i = 0; i < melody.length; i++) {
  if (melody[i] !== "C4") {
    notC++;
  }
}
console.log("Notes that aren't C4: " + notC); // 5

let eOrG = 0;
for (let i = 0; i < melody.length; i++) {
  if (melody[i] === "E4" || melody[i] === "G4") {
    eOrG++;
  }
}
console.log("Notes that are E4 or G4: " + eOrG); // 4

let firstHalf = 0;
for (let i = 0; i < melody.length; i++) {
  if (i < melody.length / 2) {
    firstHalf++;
  }
}
console.log("Notes in the first half: " + firstHalf); // 4
// Counting every note gives melody.length, 8: you don't need a loop for that one.

// ---------- Exercise 11: trace it by hand ----------
let short = ["E4", "C4", "G4", "C4"];
//   i | short[i] | countShort at the start of the pass
//   0 | "E4"     | 0
//   1 | "C4"     | 0
//   2 | "G4"     | 1
//   3 | "C4"     | 1
// The test fails at i = 4, and the log after the loop shows 2.
let countShort = 0;
for (let i = 0; i < short.length; i++) {
  console.log(i, short[i], countShort); // the table above, row by row
  if (short[i] === "C4") {
    countShort++;
  }
}
console.log("C4 comes " + countShort + " times in short"); // 2
