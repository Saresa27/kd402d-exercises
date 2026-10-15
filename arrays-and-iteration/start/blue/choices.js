// Arrays and iteration · Blue track: decide inside the loop
// B1 to B3. This file starts where block 4 ended: a plays the melody, one note every 0.4 seconds.
// Click the page (not the console), then press keys. Predict first, every time.
// After each step: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

let melody = ["C4", "E4", "G4", "C4", "A4", "G4", "E4", "C4"];

// Plays every note in a list, one every 0.4 seconds.
function playNotes(notes) {
  for (let i = 0; i < notes.length; i++) {
    synth.triggerAttackRelease(notes[i], "8n", Tone.now() + i * 0.4);
  }
}

// ---------- B1: a different length for different notes ----------
// TODO B1a: in playNotes, before the note plays, choose its length with if / else if:
//             let length = "8n";
//             if (notes[i] === "C4") {
//               length = "4n";     // C4 rings longer
//             } else if …          // pick another note that plays short: "16n"
//           and play with length instead of "8n".
// TODO B1b: log each pass: which note, and which length it got.

// ---------- B2: stop as soon as you find it ----------
// TODO B2a: write findNote(target). It walks melody, logs every index it checks, and stops
//           the loop as soon as melody[i] is target:
//             console.log("checking index " + i);
//             if (melody[i] === target) {
//               console.log("found " + target + " at index " + i);
//               break;   // leaves the loop straight away
//             }
// TODO B2b: in keyDown, f calls findNote("A4"). Predict how many indexes it checks.
// TODO B2c: findNote("B4") is never found, and the loop logs nothing to say so. Fix it: before
//           the loop,  let foundAt = -1;  set it when you find the note, and after the loop
//           log "not in the melody" if it's still -1.
// B2d Which index does findNote("G4") give back: the first G4 or the second? Why?

// ---------- B3: two things in one walk ----------
// TODO B3: write describe(). One loop over melody keeps two running values at once:
//            let count = 0;    how many notes are "C4"
//            let played = "";  every note, joined:  played = played + melody[i] + " ";
//          After the loop, log both. In keyDown, d calls describe().
//          Predict both before you run it.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "a") {
      playNotes(melody);
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
