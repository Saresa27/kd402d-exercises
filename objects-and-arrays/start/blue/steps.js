// Objects and arrays · Blue track: steps that say more
// B1 to B3. This file starts where block 3 ended: a plays every step, with the loop.
// Click the page (not the console), then press keys. Predict first, every time.
// After each step: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

let steps = [
  { note: "C4", duration: "8n" },
  { note: "E4", duration: "4n" },
  { note: "G4", duration: "8n" },
  { note: "C5", duration: "2n" },
];

// Plays every step, one every 0.4 seconds.
function playSteps() {
  for (let i = 0; i < steps.length; i++) {
    synth.triggerAttackRelease(
      steps[i].note,
      steps[i].duration,
      Tone.now() + i * 0.4,
    );
  }
}

// ---------- B1: how hard each step is played ----------
// TODO B1a: give every step a third labelled part, velocity, from 0 (silent) to 1 (full):
//             { note: "C4", duration: "8n", velocity: 0.4 },
//           Watch the commas: one between the parts, one between the steps.
// TODO B1b: hand steps[i].velocity to the synth as a fourth value, after the start time.
//           Make the steps get louder and louder, then play it.
// B1c Take velocity out of one step. Predict: what does steps[i].velocity give for that step, and
//     how does it sound? Log it to check. In a comment: is that what you want? Put it back.

// ---------- B2: one function for one step ----------
// TODO B2a: write playStep(step, when). It plays one step object at the time it's given:
//             function playStep(step, when) {
//               synth.triggerAttackRelease(step.note, step.duration, when, step.velocity);
//             }
//           Inside it there's no steps[i]: step is already one object. Why is that tidier?
// TODO B2b: in keyDown, 1, 2 and 3 play one step each, now:  playStep(steps[0], Tone.now());
// TODO B2c: make the loop in playSteps use it: one line in the body,
//             playStep(steps[i], Tone.now() + i * 0.4);

// ---------- B3: two lists, picked by a key ----------
// TODO B3a: a second list of steps for a bass line, under steps:
//             let bass = [
//               { note: "C2", duration: "4n", velocity: 0.9 },
//               … at least three more
//             ];
// TODO B3b: give playSteps a parameter, list, so it plays any list it's handed:
//             function playSteps(list) { … list[i] … }
//           a plays steps, b plays bass. What does pressing a and b together sound like?
// TODO B3c: the keys could choose the list with if / else if. Or an object can look it up:
//             let songs = { a: steps, b: bass };
//           Then in keyDown, one line finds the list for any key:
//             let chosen = songs[event.key];
//           Play chosen if it isn't undefined. Why brackets, and not songs.event.key?
//           Add a third list on another key: how many lines of keyDown did you have to change?

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "a") {
      playSteps();
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
