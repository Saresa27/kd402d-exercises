// Arrays and iteration · Block 4: spreading the notes out in time (finished version)
// Exercises 12 to 14, done. Click the page (not the console), then press a or b.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

let melody = ["C4", "E4", "G4", "B4"];
let bass = ["A2", "C3", "E3", "A3", "C4"]; // exercise 14a

// Exercises 12 to 14: plays any list it's handed, one note every 0.4 seconds.
function playNotes(notes) {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "pass " + i + ": " + notes[i] + " starts after " + i * 0.4 + " seconds",
    );
    synth.triggerAttackRelease(notes[i], "8n", Tone.now() + i * 0.4);
  }
}

// 12a: the last of four notes has i = 3, so it starts 3 * 0.4 = 1.2 seconds after the key press.
// The first note starts at 0 * 0.4 = 0, straight away. (1.6 counts four gaps: there are three.)
//
// 12c: without Tone.now(), i * 0.4 means "this many seconds after the sound started on this
// page". Right after the first key press that's almost now, so it plays. A few seconds later
// those moments are in the past, and Tone plays nothing. Tone.now() + makes it "from now".
//
// The console shows "starts after 1.2000000000000002 seconds" for i = 3: computers store most
// decimal numbers a tiny bit off. You can't hear the difference.
//
// Exercise 13: the last note starts at 3 * step:
//   0.2 → 0.6 seconds    0.4 → 1.2 seconds    0.8 → 2.4 seconds
//
// Exercise 14: bass has five notes, so the last one has i = 4 and starts at 4 * 0.4 = 1.6 seconds.
// 14d: nothing in the loop changed for five notes. Only the name of the list became notes, so
// the same loop can be handed any list.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "a") {
      console.log("---- melody ----");
      playNotes(melody);
    } else if (event.key === "b") {
      console.log("---- bass ----");
      playNotes(bass);
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
