// Objects and arrays · Purple track: objects inside objects (finished version)
// P1 to P3, done. Click the page (not the console), then press a, i, o or k.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Every step has a part whose value is another object: effects.
let steps = [
  { note: "C4", duration: "8n", effects: { accent: true, echo: false } },
  { note: "E4", duration: "8n", effects: { accent: false, echo: false } },
  { note: "G4", duration: "8n" }, // P1c: no effects at all. It plays plainly.
  { note: "C5", duration: "4n", effects: { accent: true, echo: true } },
];

// ---------- P1: an object inside an object ----------
console.log(steps[0].effects); // {accent: true, echo: false}
console.log(steps[0].effects.accent); // true: position, label, label
console.log(steps[3].effects.echo); // true
// P1c: without the check below, a step with no effects stops the loop with
//   TypeError: Cannot read properties of undefined (reading 'accent')
// steps[2].effects is undefined, and the code tried to read accent from it. One missing part
// breaks every step after it, too: the error ends the loop.

// Plays one step at a time `when`, with its effects. P1b and P1c.
function playStep(step, when) {
  let velocity = 0.5;
  let echo = false;
  if (step.effects !== undefined) {
    if (step.effects.accent === true) {
      velocity = 1;
    }
    echo = step.effects.echo;
  }
  synth.triggerAttackRelease(step.note, step.duration, when, velocity);
  if (echo === true) {
    // the echo: the same note again, a little later and much softer
    synth.triggerAttackRelease(step.note, step.duration, when + 0.2, 0.2);
  }
}

function playSteps() {
  for (let i = 0; i < steps.length; i++) {
    playStep(steps[i], Tone.now() + i * 0.4);
  }
}

// ---------- P2: a song is an object, with a list inside ----------
let intro = { title: "Intro", gap: 0.4, steps: steps };
console.log(intro.title); // Intro
console.log(intro.steps.length); // 4
console.log(intro.steps[3].note); // C5: label, position, label

let outro = {
  title: "Outro",
  gap: 0.2,
  steps: [
    { note: "G4", duration: "16n", effects: { accent: true, echo: false } },
    { note: "E4", duration: "16n", effects: { accent: false, echo: false } },
    { note: "D4", duration: "16n", effects: { accent: false, echo: false } },
    { note: "C4", duration: "2n", effects: { accent: true, echo: true } },
  ],
};

function playSong(song) {
  console.log("---- " + song.title + " ----");
  for (let i = 0; i < song.steps.length; i++) {
    playStep(song.steps[i], Tone.now() + i * song.gap);
  }
}
// P2c: playSong didn't change for the outro. It reads the gap and the steps from the song it's handed.

// ---------- P3 (optional): every label, without naming them ----------
function describe(step) {
  let labels = Object.keys(step);
  for (let i = 0; i < labels.length; i++) {
    let label = labels[i];
    // label is a variable holding "note", "duration"…, so brackets: step.label would look for
    // a part literally called "label".
    console.log(label + ": " + step[label]);
  }
}
// P3b: effects logs as "effects: [object Object]". Joining an object onto a string turns it into
// that text. console.log(label + ":", step[label]) shows the object itself.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "a") {
      playSteps();
    } else if (event.key === "i") {
      playSong(intro);
    } else if (event.key === "o") {
      playSong(outro);
    } else if (event.key === "k") {
      for (let i = 0; i < intro.steps.length; i++) {
        console.log("-- step " + i);
        describe(intro.steps[i]);
      }
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
