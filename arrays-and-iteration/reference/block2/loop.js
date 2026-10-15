// Arrays and iteration · Block 2: writing the loop by hand (finished version)
// Exercises 5 to 8, done. Click the page (not the console), then press any key.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// This morning's melody.
let melody = ["C4", "E4", "G4", "B4"];
melody.push("C5"); // exercise 8b: a fifth note. The loop below didn't change.

// Plays every note in melody.
function playMelody() {
  // Exercise 5: start, test, step, body.
  for (let i = 0; i < melody.length; i++) {
    console.log("pass " + i + ": " + melody[i]);
    synth.triggerAttackRelease(melody[i], "8n");
  }
  // 5c: every pass happens in a blink, and none of them waits, so all the notes start at the
  // same moment: a chord. Block 4 gives each note its own start time.
}

// Exercise 6: with  i <= melody.length  there's one pass too many. With four notes:
//   pass 0: C4   pass 1: E4   pass 2: G4   pass 3: B4   pass 4: undefined
// melody[4] is undefined: there's nothing at index 4, because the last index is length - 1.
// There's no error. Tone gets nothing to play and plays nothing, and the program carries on.
// That's what makes off-by-one bugs sneaky: often nothing tells you.
//
// Exercise 7: with  let i = 1  the first pass is at index 1, so C4 (index 0) never plays:
//   pass 1: E4   pass 2: G4   pass 3: B4
//
// Exercise 8c: the loop asks the array for its own length every time it checks the test, so it
// works for any number of notes. Nothing in the loop says "4".

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    console.log("---- playMelody ----");
    playMelody();
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
