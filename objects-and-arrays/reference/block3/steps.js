// Objects and arrays · Block 3: a list of steps (finished version)
// Exercises 9 to 12, done. Click the page (not the console), then press 1, 2, l, h, a or c.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// A melody where every note has its own length: a list of steps, and every step is an object.
let steps = [
  { note: "C4", duration: "8n" },
  { note: "E4", duration: "4n" },
];

// ---------- Exercise 9: one step, position then label ----------
console.log(steps[1].duration); // 4n
console.log(steps[1]); // {note: 'E4', duration: '4n'}: a position gives back the whole step
console.log(steps.length); // 2: it counts the steps, not their parts
console.log(steps.note); // undefined
// 9b: steps is the list, and a list has positions, not labels. Choose a step first: steps[0].note.

// ---------- Exercise 10: add a step ----------
steps.push({ note: "G4", duration: "8n" });
console.log(steps.length); // 3

// 11b: a fourth step, with a long duration
steps.push({ note: "C5", duration: "2n" });

// ---------- Exercise 11: play them all ----------
// 11a: one line per step. From line to line only the position (0, 1, 2) and the start time
// (+ 0, + 0.4, + 0.8) change. Everything else is the same: that's the loop, asking to be written.
function playByHand() {
  synth.triggerAttackRelease(steps[0].note, steps[0].duration, Tone.now());
  synth.triggerAttackRelease(
    steps[1].note,
    steps[1].duration,
    Tone.now() + 0.4,
  );
  synth.triggerAttackRelease(
    steps[2].note,
    steps[2].duration,
    Tone.now() + 0.8,
  );
}
// 11b: h never plays the fourth step: nothing in playByHand mentions steps[3].

// 11c: yesterday's loop. steps[i] is position, .note and .duration are label.
function playSteps() {
  for (let i = 0; i < steps.length; i++) {
    // 12b: log every pass
    console.log(
      "step " + i + ": " + steps[i].note + " for " + steps[i].duration,
    );
    synth.triggerAttackRelease(
      steps[i].note,
      steps[i].duration,
      Tone.now() + i * 0.4,
    );
  }
}
// 11c: a plays all four, and nothing in the loop changed: it asks steps.length every time.

// ---------- Exercise 12: ask every step a question ----------
function countLong() {
  let count = 0;
  for (let i = 0; i < steps.length; i++) {
    if (steps[i].duration === "4n") {
      count++;
    }
  }
  console.log(count + " steps are 4n long"); // 1: only E4
}

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    console.log("key: " + event.key);
    if (event.key === "1") {
      // 9a: position 0, then its labels
      synth.triggerAttackRelease(steps[0].note, steps[0].duration);
    } else if (event.key === "2") {
      synth.triggerAttackRelease(steps[1].note, steps[1].duration); // longer: "4n"
    } else if (event.key === "l") {
      // 10b: the last step, however many there are
      synth.triggerAttackRelease(
        steps[steps.length - 1].note,
        steps[steps.length - 1].duration,
      );
    } else if (event.key === "h") {
      playByHand();
    } else if (event.key === "a") {
      playSteps();
    } else if (event.key === "c") {
      countLong();
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
