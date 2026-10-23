// Pointers · Purple: several shapes, and one value shaping another (finished version)
// P1 and P2, done. Click the page once, then move over the shapes: slowly, then fast.

import { createShape } from "./shape.js";

// ---------- State ----------
const shape = createShape();
const shape2 = createShape(); // P1a
const shape3 = createShape();
let onFirst = false; // is the pointer on the first shape?
let lastX = 0;
let lastY = 0;
let lastTime = 0;
let speeds = [];
let average = 0; // the average speed, kept up to date by useAverage

// ---------- Sound ----------
// P1b: one synth per shape, because a Tone.Synth plays one note at a time.
const synth = new Tone.Synth().toDestination();
const synth2 = new Tone.Synth().toDestination();
const synth3 = new Tone.Synth().toDestination();

// P1c: the only differences are which synth, which note and which shape. Later in the course a
//      function with parameters can do all three; for now, three is fine.
// P2c: slowly, the note bends only a little from one side of the shape to the other.
//      Fast, the same movement bends it much further: speed sets how wide the range is.
// P2d: position sets the pitch, speed sets the range. Swapped (speed bends, position sets the range),
//      the pitch jumps around with every movement: harder to play a melody.

// ---------- Controls (Event Handlers) ----------
function startSound(event) {
  Tone.start();
}

function pointerEnter(event) {
  onFirst = true;
  synth.triggerAttack("C4");
  shape.setColour(50, 100, 60);
}

function pointerLeave(event) {
  onFirst = false;
  synth.triggerRelease();
  shape.setColour(200, 80, 50);
}

function pointerEnter2(event) {
  synth2.triggerAttack("E4");
  shape2.setColour(50, 100, 60);
}

function pointerLeave2(event) {
  synth2.triggerRelease();
  shape2.setColour(160, 70, 45);
}

function pointerEnter3(event) {
  synth3.triggerAttack("G4");
  shape3.setColour(50, 100, 60);
}

function pointerLeave3(event) {
  synth3.triggerRelease();
  shape3.setColour(300, 70, 55);
}

function pointerMove(event) {
  let normX = event.clientX / window.innerWidth;
  let normY = event.clientY / window.innerHeight;
  let now = Date.now();
  let distance = Math.hypot(normX - lastX, normY - lastY);
  let seconds = (now - lastTime) / 1000;
  if (seconds === 0) {
    return; // two events in the same millisecond: no time has passed, so no speed
  }
  let speed = distance / seconds;
  lastX = normX;
  lastY = normY;
  lastTime = now;

  speeds.push(speed); // P2a
  setTimeout(forgetOldest, 500);
  useAverage();

  if (onFirst) {
    let range = 100 + average * 400; // P2b: slow is narrow, fast is wide
    synth.detune.value = (normX - 0.5) * 2 * range;
  }
}

function forgetOldest() {
  speeds.shift();
  useAverage();
}

function useAverage() {
  let total = 0;
  for (let i = 0; i < speeds.length; i++) {
    total = total + speeds[i];
  }
  average = 0;
  if (speeds.length > 0) {
    average = total / speeds.length;
  }
}

// ---------- Setup ----------
function setup() {
  shape.setSize(160);
  shape.setColour(200, 80, 50);
  shape.setPosition(0.2, 0.4);

  shape2.setSize(160);
  shape2.setColour(160, 70, 45);
  shape2.setPosition(0.45, 0.2);

  shape3.setSize(160);
  shape3.setColour(300, 70, 55);
  shape3.setPosition(0.7, 0.5);

  window.addEventListener("pointerdown", startSound);
  window.addEventListener("pointermove", pointerMove);
  shape.element.addEventListener("pointerenter", pointerEnter);
  shape.element.addEventListener("pointerleave", pointerLeave);
  shape2.element.addEventListener("pointerenter", pointerEnter2);
  shape2.element.addEventListener("pointerleave", pointerLeave2);
  shape3.element.addEventListener("pointerenter", pointerEnter3);
  shape3.element.addEventListener("pointerleave", pointerLeave3);
}

setup();
