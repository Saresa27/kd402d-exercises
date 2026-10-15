// Arrays and iteration · Block 4: spreading the notes out in time
// Exercises 12 to 14. This file starts where block 2 ended: one key plays the melody as a chord.
// Click the page (not the console), then press a. Predict first, every time.
// After each exercise: save, click the page, press a key, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

let melody = ["C4", "E4", "G4", "B4"];
// TODO 14a: a second, longer list:  let bass = ["A2", "C3", "E3", "A3", "C4"];

// Plays every note in melody. All the notes start at once.
function playMelody() {
  for (let i = 0; i < melody.length; i++) {
    console.log("pass " + i + ": " + melody[i]);
    synth.triggerAttackRelease(melody[i], "8n");
  }
}

// ---------- Exercise 12: stagger the melody ----------
// triggerAttackRelease takes a third value: when the note starts, in seconds.
// Tone.now() is "now" on Tone's clock. i grows by one every pass, so i * 0.4 pushes
// every note 0.4 seconds later than the one before.
// 12a Predict, in a comment: with four notes, when does the last note start?
// TODO 12b: give the note a start time:
//             synth.triggerAttackRelease(melody[i], "8n", Tone.now() + i * 0.4);
//           Add the start time to the console.log too, and check your prediction.
// 12c Take away  Tone.now() +  and press a again, a few seconds after the page loaded.
//     What happens? Put it back. (A plain number means "this many seconds after the sound
//     started on this page", and that moment has already gone.)

// ---------- Exercise 13: change the step ----------
// TODO 13: try 0.2 and then 0.8 instead of 0.4. Before each run, predict when the last note
//          starts. Pick the one you like and keep it.

// ---------- Exercise 14: a second melody, the same loop ----------
// TODO 14b: change playMelody so it plays any list you hand it:
//             function playNotes(notes) {
//               for (let i = 0; i < notes.length; i++) { … notes[i] … }
//             }
//           Every melody inside the function becomes notes.
// TODO 14c: in keyDown, a plays melody and b plays bass:
//             playNotes(melody);   and   playNotes(bass);
//           Predict when the last bass note starts, then check.
// 14d In a comment: what did you change in the loop to play five notes instead of four?

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "a") {
      console.log("---- melody ----");
      playMelody();
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
