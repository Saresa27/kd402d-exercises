// Arrays and iteration · Block 1: making arrays (finished version)
// Exercises 1 to 4, done. Everything happens in the console; it runs every time the page loads.

// This morning's melody: four notes, kept in order.
let melody = ["C4", "E4", "G4", "B4"];

// ---------- Exercise 1: write the list out ----------
console.log(melody); // ["C4", "E4", "G4", "B4"]
console.log(melody.length); // 4: how many notes
console.log(melody[0]); // "C4": counting starts at 0, so the first note is at index 0

// 1c: the last note. With 4 notes the indexes are 0, 1, 2, 3: the last one is one less than
// the length. melody.length - 1 keeps working when the melody gets longer.
console.log(melody[3]); // "B4"
console.log(melody[melody.length - 1]); // "B4"

// 1d: there's nothing at index 4. No error: the array answers undefined.
console.log(melody[4]); // undefined

// ---------- Exercise 2: start empty, build it up ----------
let riff = [];
console.log(riff.length); // 0
riff.push("C4");
console.log(riff.length); // 1
riff.push("C4");
console.log(riff.length); // 2
riff.push("G4");
console.log(riff.length); // 3
riff.push("G4");
console.log(riff.length); // 4
console.log(riff); // ["C4", "C4", "G4", "G4"]
// 2c: start from [] when you don't know the notes yet when you write the code: for example,
// to remember the keys the player presses, one push per key press.

// ---------- Exercise 3: add at the front too ----------
let chord = ["E4", "G4"];
chord.unshift("C4"); // ["C4", "E4", "G4"]: everyone already there moves up one place
chord.push("B4"); // ["C4", "E4", "G4", "B4"]: nobody moves
console.log(chord);
console.log(chord[1]); // "E4": it was at 0, the unshift moved it to 1
console.log(chord[3]); // "B4"
// 3c: E4 and G4 changed their index (0 → 1, 1 → 2), because unshift adds at the front and
// everyone behind it shuffles up. push adds at the end, so nobody else moves.

// ---------- Exercise 4: an array of numbers ----------
let steps = [0.2, 0.4, 0.6, 0.8];
console.log(steps[2]); // 0.6
console.log(steps[1] + steps[2]); // 1: numbers add up. (Strings would join: "0.4" + "0.6" is "0.40.6".)
// The console shows numbers without quotes, and in a different colour from strings.

// 4c: the other way to make an empty array. Same as []; write [] in your own code.
let empty = new Array();
console.log(empty.length); // 0
