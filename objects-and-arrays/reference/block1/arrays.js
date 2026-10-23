// Objects and arrays · Block 1: the melody, extended (finished version)
// Exercises 1 to 4, done. Click the page (not the console), then press p, f, m, l, x or z.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// This morning's melody: three notes, kept in order.
let notes = ["C4", "E4", "G4"];
notes.push("B4"); // 2a: ["C4", "E4", "G4", "B4"]. Nobody moved.
notes.unshift("A3"); // 2b: ["A3", "C4", "E4", "G4", "B4"]. Everyone moved up one place.
console.log(notes); // (5) ['A3', 'C4', 'E4', 'G4', 'B4']
console.log(notes.length); // 5
// 2b: "C4" was at index 0 and is now at index 1, so f plays A3. E4, G4 and B4 moved up one too.
// 2a: l plays B4 without any change to keyDown, because it asks for notes.length - 1 every time.

// Plays every note in a list, one every 0.4 seconds. Yesterday's loop. p calls it.
function playNotes(list) {
  for (let i = 0; i < list.length; i++) {
    synth.triggerAttackRelease(list[i], "8n", Tone.now() + i * 0.4);
  }
}

// 1a: before exercise 2, with ["C4", "E4", "G4"]: notes[0] is C4, notes[2] is G4, and
// notes[notes.length - 1] is notes[2], G4 again.
// 1c: three notes sit at 0, 1 and 2, so the last index is one less than the length.
// notes[notes.length] is notes[3]: there's nothing there, so it's undefined, Tone plays nothing,
// and there's no error. That's yesterday's off-by-one.

// 3c: on an empty list, pop and shift give back undefined. No error, and nothing plays.
// p still works: the loop has no passes, because 0 < 0 is false.

// 4a: push adds at the end and pop takes from the end: no other note changes its index.
//     unshift adds at the front and shift takes from the front: every other note changes its index.
// 4b: with 1000 notes, unshift and shift move all 1000 (every index goes up or down by one).
//     push and pop move none. Adding and removing at the end is cheap; at the front it isn't.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "p") {
      console.log("---- p plays " + notes.length + " notes ----");
      playNotes(notes);
    } else if (event.key === "f") {
      // 1b: the first note is always at position 0
      synth.triggerAttackRelease(notes[0], "8n");
    } else if (event.key === "m") {
      synth.triggerAttackRelease(notes[2], "8n");
    } else if (event.key === "l") {
      // the last note: works for any length
      synth.triggerAttackRelease(notes[notes.length - 1], "8n");
    } else if (event.key === "x") {
      // 3a: take the last note off, and play it
      let gone = notes.pop();
      console.log("pop took " + gone);
      console.log(notes);
      synth.triggerAttackRelease(gone, "8n");
    } else if (event.key === "z") {
      // 3b: take the first note off, and play it
      let gone = notes.shift();
      console.log("shift took " + gone);
      console.log(notes);
      synth.triggerAttackRelease(gone, "8n");
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
