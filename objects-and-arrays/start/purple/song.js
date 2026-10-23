// Objects and arrays · Purple track: objects inside objects
// P1 to P3. This file starts where block 3 ended: a plays every step, with the loop.
// Click the page (not the console), then press keys. Predict first, every time.
// After each step: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Every step now has a part whose value is another object: effects.
let steps = [
  { note: "C4", duration: "8n", effects: { accent: true, echo: false } },
  { note: "E4", duration: "8n", effects: { accent: false, echo: false } },
  { note: "G4", duration: "8n", effects: { accent: false, echo: true } },
  { note: "C5", duration: "4n", effects: { accent: true, echo: true } },
];

// Plays every step, one every 0.4 seconds. The effects aren't used yet.
function playSteps() {
  for (let i = 0; i < steps.length; i++) {
    synth.triggerAttackRelease(
      steps[i].note,
      steps[i].duration,
      Tone.now() + i * 0.4,
    );
  }
}

// ---------- P1: an object inside an object ----------
// P1a Predict, then log, one line each. Count the hops in each: position, label, label.
//       steps[0].effects      steps[0].effects.accent      steps[3].effects.echo
// TODO P1b: in playSteps, make the effects do something. No new Tone.js, only what you know:
//             accent: true   → play the step at velocity 1, otherwise 0.5 (the fourth value)
//             echo: true     → play the same note again, 0.2 s later, at velocity 0.2
// TODO P1c: take effects out of one step completely, and press a. Read the error in the console.
//           Which value was undefined, and what did the code try to read from it?
//           Fix playSteps so a step without effects plays plainly, with no error.

// ---------- P2: a song is an object, with a list inside ----------
// TODO P2a: make one object that holds a whole song: a title, the gap between steps, and the steps:
//             let intro = { title: "Intro", gap: 0.4, steps: steps };
//           Predict, then log: intro.title, intro.steps.length, intro.steps[3].note
// TODO P2b: write playSong(song). It logs the song's title, then walks song.steps, with song.gap
//           as the time between steps. Read song.steps[i].effects too, like P1b.
//           In keyDown, i plays intro.
// TODO P2c: a second song on o, with its own title, a shorter gap and steps of its own,
//           written inside the object:
//             let outro = { title: "Outro", gap: 0.2, steps: [ { … }, { … } ] };
//           Did playSong need to change?

// ---------- P3 (optional): every label, without naming them ----------
// Object.keys gives back an array of an object's labels:
//   Object.keys(steps[0])    is    ["note", "duration", "effects"]
// TODO P3a: write describe(step). It loops over Object.keys(step) and logs every part:
//             note: C4
//           Why does this need step[label], with brackets, and not step.label?
// TODO P3b: in keyDown, k describes every step of intro. What does it log for effects? Why?
// Object.keys isn't part of the course yet: this is a look at where objects go next.

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
