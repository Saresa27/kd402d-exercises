// Objects and arrays · Block 3: a list of steps
// Exercises 9 to 12. Click the page (not the console), then press keys. Predict first, every time.
// After each exercise: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// A melody where every note has its own length: a list of steps, and every step is an object.
let steps = [
  { note: "C4", duration: "8n" },
  { note: "E4", duration: "4n" },
];
// TODO 10a and 11b: push more steps here, under the list.

// ---------- Exercise 9: one step, position then label ----------
// steps[0] is position: the first step. steps[0].note is label: that step's note.
// TODO 9a: in keyDown, 1 plays the first step:
//            synth.triggerAttackRelease(steps[0].note, steps[0].duration);
//          and 2 plays the second step. Listen: which one is longer?
// 9b Predict, then log, one line each:
//      steps[1].duration      steps[1]      steps.length      steps.note
//    In a comment: why is steps.note undefined?

// ---------- Exercise 10: add a step ----------
// TODO 10a: under the list:  steps.push({ note: "G4", duration: "8n" });
//           Predict steps.length, then log it.
// TODO 10b: in keyDown, l plays the last step, however many there are:
//             steps[steps.length - 1].note   and   steps[steps.length - 1].duration

// ---------- Exercise 11: play them all ----------
// TODO 11a: write playByHand(), one line per step, each starting 0.4 s after the one before:
//             synth.triggerAttackRelease(steps[0].note, steps[0].duration, Tone.now());
//             synth.triggerAttackRelease(steps[1].note, steps[1].duration, Tone.now() + 0.4);
//             … and steps[2] at Tone.now() + 0.8
//           In keyDown, h calls it. In a comment: what changes from line to line?
// TODO 11b: push a fourth step under the list, with a long duration: "2n".
//           Does h play it? Why not?
// TODO 11c: write playSteps() with yesterday's for loop instead. The body is one line:
//             synth.triggerAttackRelease(steps[i].note, steps[i].duration, Tone.now() + i * 0.4);
//           In keyDown, a calls it. Does it play the fourth step? Did you change the loop for it?

// ---------- Exercise 12: ask every step a question ----------
// TODO 12a: write countLong(). It counts the steps whose duration is "4n", with yesterday's counter:
//             let count = 0;   before the loop
//             count++;         inside it, when steps[i].duration === "4n"
//           and logs the count after the loop. In keyDown, c calls it. Predict first.
// TODO 12b: in playSteps, log every pass before the note plays:
//             step 1: E4 for 4n

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    console.log("key: " + event.key);
    // TODO 9a, 10b, 11a, 11c and 12a: 1, 2, l, h, a and c go here, with if and else if
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
