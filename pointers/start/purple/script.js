// Pointers · Purple: several shapes, and one value shaping another
// P1 and P2. Click the page once, then move over the shapes. Predict first.
// After each step: save, try it, and commit.
//
// It starts with one shape that holds a note while the pointer is on it (block 1, exercise 3).

import { createShape } from "./shape.js";

// ---------- Settings ----------
const note = "C4";

// ---------- State ----------
const shape = createShape();
let lastX = 0;
let lastY = 0;
let lastTime = 0;
let speeds = [];
let average = 0; // the average speed, kept up to date by useAverage

// ---------- Sound ----------
const synth = new Tone.Synth().toDestination();

// ---------- P1: three shapes, three notes ----------
// TODO P1a: make two more shapes, at other places, in other colours.
// TODO P1b: each one plays its own note while the pointer is on it. You'll need one synth per shape:
//           a Tone.Synth plays one note at a time.
// P1c In a comment: you wrote three pointerEnter functions that are nearly the same.
//     What's the only thing that's different? (No need to fix it, but notice it.)

// ---------- P2: one value shaping another's range ----------
// Position bends the note. Speed decides how far it can bend.
// TODO P2a: add the speed, averaged over half a second, from block 4 (push, setTimeout, useAverage).
//           In useAverage, store the result in average, at the top.
// TODO P2b: in pointerMove, while on the first shape (keep a let onFirst at the top, set in
//           pointerEnter and pointerLeave), bend its note with x, centred on the note:
//             let range = 100 + average * 400;          // in cents: slow is narrow, fast is wide
//             synth.detune.value = (normX - 0.5) * 2 * range;
// P2c Predict, then try: move slowly from left to right across the shape. Then fast. What changes?
// P2d In a comment: which raw value sets the pitch, and which sets the range? Swap them: is it better?

// ---------- Controls (Event Handlers) ----------
function startSound(event) {
  Tone.start();
}

function pointerEnter(event) {
  synth.triggerAttack(note);
  shape.setColour(50, 100, 60);
}

function pointerLeave(event) {
  synth.triggerRelease();
  shape.setColour(200, 80, 50);
}

function pointerMove(event) {
  let normX = event.clientX / window.innerWidth;
  // TODO P2a and P2b go here
}

// ---------- Setup ----------
function setup() {
  shape.setSize(160);
  shape.setColour(200, 80, 50);
  shape.setPosition(0.2, 0.4);

  window.addEventListener("pointerdown", startSound);
  window.addEventListener("pointermove", pointerMove);
  shape.element.addEventListener("pointerenter", pointerEnter);
  shape.element.addEventListener("pointerleave", pointerLeave);
}

setup();
