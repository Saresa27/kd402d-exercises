// Pointers · Block 5: move faster, play louder (finished version)
// Exercises 12 and 13, done. Click the page once, then move over the shape: slowly, fast, then stop.

import { createShape } from "./shape.js";

// ---------- Settings ----------
const note = "C4";

// ---------- State ----------
const shape = createShape();
let inside = false; // is the pointer on the shape?
let lastX = 0;
let lastY = 0;
let lastTime = 0;
let speeds = [];

// ---------- Sound ----------
const synth = new Tone.Synth().toDestination();

// 12b: the first speed after arriving compares with wherever the pointer was when it last moved
//      over the shape, maybe seconds ago and far away. 12c: start fresh on pointerenter.
// 12d: the first pointermove often arrives in the same millisecond as pointerenter: 0 / 0 is NaN,
//      and the synth refuses a NaN volume. The seconds === 0 check skips it.
// 13c: still on the shape: nearly silent. Slow: quiet. Fast: loud. Stop dead: it fades within
//      half a second, because the speeds expire.
// 13d: 10 suited a mouse here: 3 screens per second is full volume.
// 13e: for example: the shape drifts away from fast movements, or grows with the average speed,
//      or changes colour when you've been still for a while.

// ---------- Controls (Event Handlers) ----------
function startSound(event) {
  Tone.start(); // browsers only allow sound after a click or a key press
}

function pointerEnter(event) {
  inside = true;
  synth.volume.value = -30; // start quiet: we haven't moved yet
  synth.triggerAttack(note);
  shape.setColour(50, 100, 60);
  // 12c: "last time" is now, here
  lastX = event.clientX / window.innerWidth;
  lastY = event.clientY / window.innerHeight;
  lastTime = Date.now();
}

function pointerLeave(event) {
  inside = false;
  synth.triggerRelease();
  shape.setColour(200, 80, 50);
}

function pointerMove(event) {
  if (!inside) {
    return; // 12a: only while on the shape
  }
  let normX = event.clientX / window.innerWidth;
  let normY = event.clientY / window.innerHeight;
  let now = Date.now();
  let distance = Math.hypot(normX - lastX, normY - lastY);
  let seconds = (now - lastTime) / 1000;
  if (seconds === 0) {
    return; // two events in the same millisecond: no time has passed, so no speed
  }
  let speed = distance / seconds; // screens per second
  lastX = normX;
  lastY = normY;
  lastTime = now;

  speeds.push(speed); // 13a
  setTimeout(forgetOldest, 500);
  useAverage();
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
  let average = 0;
  if (speeds.length > 0) {
    average = total / speeds.length;
  }
  // 13b: from -30 (nearly silent) when still, up to 0 (full) when fast
  let volume = -30 + average * 10;
  if (volume > 0) {
    volume = 0;
  }
  synth.volume.value = volume;
}

// ---------- Setup ----------
function setup() {
  shape.setSize(200);
  shape.setColour(200, 80, 50);
  shape.setPosition(0.4, 0.3);

  window.addEventListener("pointerdown", startSound);
  window.addEventListener("pointermove", pointerMove);
  shape.element.addEventListener("pointerenter", pointerEnter);
  shape.element.addEventListener("pointerleave", pointerLeave);
}

setup();
