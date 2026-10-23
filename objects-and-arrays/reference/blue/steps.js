// Objects and arrays · Blue track: steps that say more (finished version)
// B1 to B3, done. Click the page (not the console), then press a, b, d, 1, 2 or 3.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// B1a: every step has a velocity, getting louder and louder.
let steps = [
  { note: "C4", duration: "8n", velocity: 0.3 },
  { note: "E4", duration: "4n", velocity: 0.5 },
  { note: "G4", duration: "8n", velocity: 0.7 },
  { note: "C5", duration: "2n", velocity: 1 },
];
// B1c: a step without a velocity gives undefined for steps[i].velocity. Tone takes undefined to
// mean "no velocity given" and plays it at full strength, 1, with no error. So a forgotten
// velocity is loud, not silent, and nothing tells you. Worth checking the log.

// B3a: a bass line
let bass = [
  { note: "C2", duration: "4n", velocity: 0.9 },
  { note: "C2", duration: "8n", velocity: 0.5 },
  { note: "G2", duration: "4n", velocity: 0.9 },
  { note: "E2", duration: "8n", velocity: 0.5 },
];

// B3c: a third list, for d
let high = [
  { note: "C6", duration: "16n", velocity: 0.4 },
  { note: "G5", duration: "16n", velocity: 0.4 },
  { note: "E5", duration: "16n", velocity: 0.4 },
  { note: "C5", duration: "16n", velocity: 0.4 },
];

// B3c: which key plays which list. The labels are keys, the values are lists of steps.
let songs = { a: steps, b: bass, d: high };

// B2a: plays one step object at the time it's given. Inside, step is already one object, so it
// reads step.note, not steps[i].note: the function doesn't care where the step came from.
function playStep(step, when) {
  synth.triggerAttackRelease(step.note, step.duration, when, step.velocity);
}

// B3b: plays any list of steps it's handed, one every 0.4 seconds.
function playSteps(list) {
  for (let i = 0; i < list.length; i++) {
    playStep(list[i], Tone.now() + i * 0.4); // B2c
  }
}

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    // B3c: look the list up by the key's name. The label is in a variable, event.key, so it has to
    // be brackets: songs.event would look for a part literally called "event".
    let chosen = songs[event.key];
    if (chosen !== undefined) {
      playSteps(chosen);
    } else if (event.key === "1") {
      // B2b
      playStep(steps[0], Tone.now());
    } else if (event.key === "2") {
      playStep(steps[1], Tone.now());
    } else if (event.key === "3") {
      playStep(steps[2], Tone.now());
    }
  }
}
// B3b: a and b together play both lists at once: melody and bass line.
// B3c: adding the third list took one new list and one new part in songs. keyDown didn't change.

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
