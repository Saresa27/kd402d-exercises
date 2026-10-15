// Arrays and iteration · Purple track: loops over loops
// P1 to P4. This file starts where block 4 ended: a plays the melody, one note every 0.4 seconds.
// Click the page (not the console), then press keys. Predict first, every time.
// After each step: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

let melody = ["C4", "E4", "G4", "B4"];

// Plays every note in a list, one every 0.4 seconds.
function playNotes(notes) {
  for (let i = 0; i < notes.length; i++) {
    synth.triggerAttackRelease(notes[i], "8n", Tone.now() + i * 0.4);
  }
}

// ---------- P1: two lists, one index ----------
// Two arrays of the same length: position i in one belongs with position i in the other.
let tune = ["E4", "D4", "C4", "D4", "E4", "E4", "E4"];
let lengths = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.8]; // seconds
// TODO P1a: write playTune(). One loop over tune plays tune[i] for lengths[i] seconds.
//           Each note starts when the one before it ends, so keep a running start time:
//             let start = Tone.now();
//             … in the loop: play at start, then  start = start + lengths[i];
// TODO P1b: in keyDown, t calls playTune(). Then add the rest of the tune to the end of both
//           lists, under them. push takes several values at once:
//             tune.push("D4", "D4", "D4", "E4", "G4", "G4");
//             lengths.push(0.4, 0.4, 0.8, 0.4, 0.4, 0.8);
// TODO P1c: what if the two arrays aren't the same length? Before the loop, log a warning if
//           tune.length !== lengths.length. Try it by deleting one length.

// ---------- P2: a loop inside a loop ----------
// TODO P2a: write playRepeats(times). An outer loop counts the repeats; inside it, a loop
//           walks the melody. Use r for the outer counter and i for the inner one.
// TODO P2b: work out when each note starts. Every note so far has a number:
//             (r * melody.length + i) * 0.3
//           Predict: with times = 3, how many notes play, and when does the last one start?
//           Log r, i and the start time on every inner pass to check.
// TODO P2c: in keyDown, r calls playRepeats(3). Then make every repeat one octave higher than
//           the one before. Use a list of note names without octaves,
//             let names = ["C", "E", "G", "B"];
//           and join a name with an octave you work out from r:  "C" + 5  is  "C5".

// ---------- P3: a little variation ----------
// triggerAttackRelease takes a fourth value: how hard the note is played, from 0 to 1.
// TODO P3a: in playNotes, play every note with a slightly different strength:
//             let strength = 0.5 + Math.random() * 0.5;
//           and hand it over as the fourth value. Log it on every pass.
// TODO P3b: make the first note of every list the strongest, 1, whatever Math.random says.
//           Keep it small and tasteful: the melody should still sound like itself.

// ---------- P4 (optional): a look ahead ----------
// Arrays have methods that run a loop for you. This isn't part of the course yet: it's here
// so you can see where loops go next.
//   let notC = melody.filter(function (note) {
//     return note !== "C4";
//   });
// filter walks the array and keeps each note for which the function gives back true.
// TODO P4a: log notC. Then write the same thing as a for loop with push, and compare.
// TODO P4b: look up map on MDN. What would melody.map(function (note) { return note + "!"; })
//           give back? Predict, then check.

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
