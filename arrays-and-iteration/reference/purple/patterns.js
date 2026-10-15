// Arrays and iteration · Purple track: loops over loops (finished version)
// P1 to P4, done. Click the page (not the console), then press keys:
//   a   the melody, every note a little different (P3)
//   t   the tune, with its own note lengths (P1)
//   r   the melody three times, an octave higher each time (P2)
//   p   the look ahead: filter, and the same thing as a loop (P4)

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

let melody = ["C4", "E4", "G4", "B4"];

// P3: every note a little different in strength, and the first one always the strongest.
function playNotes(notes) {
  for (let i = 0; i < notes.length; i++) {
    let strength = 0.5 + Math.random() * 0.5; // somewhere from 0.5 to 1
    if (i === 0) {
      strength = 1;
    }
    console.log(notes[i] + " at strength " + strength);
    synth.triggerAttackRelease(notes[i], "8n", Tone.now() + i * 0.4, strength);
  }
}

// ---------- P1: two lists, one index ----------
let tune = ["E4", "D4", "C4", "D4", "E4", "E4", "E4"];
let lengths = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.8]; // seconds
// P1b: the rest of the tune, at the end of both lists. push takes several values at once.
tune.push("D4", "D4", "D4", "E4", "G4", "G4");
lengths.push(0.4, 0.4, 0.8, 0.4, 0.4, 0.8);

function playTune() {
  if (tune.length !== lengths.length) {
    console.log(
      "tune has " + tune.length + " notes but lengths has " + lengths.length,
    );
  }
  let start = Tone.now(); // a running value: when the next note starts
  for (let i = 0; i < tune.length; i++) {
    synth.triggerAttackRelease(tune[i], lengths[i], start);
    start = start + lengths[i]; // the next note starts when this one ends
  }
}
// P1c: if lengths is one shorter, the last pass asks for lengths[12], which is undefined.
// There's no error: Tone gets a note with no length, and it sounds wrong or not at all.
// Nothing tells you why, except the warning before the loop.

// ---------- P2: a loop inside a loop ----------
let names = ["C", "E", "G", "B"];

function playRepeats(times) {
  for (let r = 0; r < times; r++) {
    for (let i = 0; i < names.length; i++) {
      let note = names[i] + (4 + r); // repeat 0 in octave 4, repeat 1 in octave 5 …
      let at = (r * names.length + i) * 0.3; // this note's number, times the step
      console.log(
        "r " + r + ", i " + i + ": " + note + " after " + at + " seconds",
      );
      synth.triggerAttackRelease(note, "8n", Tone.now() + at);
    }
  }
}
// P2b: the inner loop runs all the way through for every pass of the outer loop:
// 3 repeats × 4 notes = 12 notes. The last one is r = 2, i = 3: note number 2 * 4 + 3 = 11,
// so it starts after 11 * 0.3 = 3.3 seconds (the console shows 3.3000000000000003).

// ---------- P4: a look ahead ----------
function lookAhead() {
  let notC = melody.filter(function (note) {
    return note !== "C4";
  });
  console.log(notC); // ["E4", "G4", "B4"]

  // The same thing as a for loop with push: filter does this bookkeeping for you.
  let notCLoop = [];
  for (let i = 0; i < melody.length; i++) {
    if (melody[i] !== "C4") {
      notCLoop.push(melody[i]);
    }
  }
  console.log(notCLoop); // ["E4", "G4", "B4"]

  // map makes a new array of the same length, with the function's answer for every element.
  console.log(
    melody.map(function (note) {
      return note + "!";
    }),
  ); // ["C4!", "E4!", "G4!", "B4!"]
}

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "a") {
      playNotes(melody);
    } else if (event.key === "t") {
      playTune();
    } else if (event.key === "r") {
      playRepeats(3);
    } else if (event.key === "p") {
      lookAhead();
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
