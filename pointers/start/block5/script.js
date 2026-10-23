// Pointers · Block 5: move faster, play louder
// Exercises 12 and 13: Thursday's step 5, with this morning's speed and averaging.
// Predict first, every time. After each exercise: save, click the page once, try it, and commit.
//
// It starts with block 1 finished: a note that plays while the pointer is on the shape.

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

// ---------- Exercise 12: speed, only while you're on the shape ----------
// TODO 12a: in pointerMove, work out speed in screens per second, as in block 3.
//           Only while inside is true: if (!inside) { return; }
// 12b Move onto the shape and log speed. Look at the first speed each time you arrive:
//     why is it so odd? (Where was the pointer "last time"?)
// TODO 12c: fix it: in pointerEnter, set lastX, lastY and lastTime to where the pointer is now.
// 12d After 12c, check the console for NaN as you arrive: pointerenter and the first pointermove
//     can come in the same millisecond. Keep the  if (seconds === 0)  check from block 3.

// ---------- Exercise 13: the faster you move, the louder it plays ----------
// TODO 13a: average the speeds over the last half second, as in block 4, exercise 11:
//           push, setTimeout(forgetOldest, 500), and a useAverage function.
// TODO 13b: in useAverage, set the volume from the average:
//             let volume = -30 + average * 10; // -30 is nearly silent, 0 is full
//             if (volume > 0) {
//               volume = 0;
//             }
//             synth.volume.value = volume;
// 13c Predict, then try: sit still on the shape. Then move slowly. Then fast. Then stop dead.
// 13d Mouse and trackpad give different speeds. Change the 10 until a quick move is full volume.
// 13e Thursday's Beat Surfer question, in a comment: what could the movement do besides follow the
//     pointer? One idea for your A3.

// ---------- Controls (Event Handlers) ----------
function startSound(event) {
  Tone.start(); // browsers only allow sound after a click or a key press
}

function pointerEnter(event) {
  inside = true;
  synth.triggerAttack(note);
  shape.setColour(50, 100, 60);
  // TODO 12c goes here
}

function pointerLeave(event) {
  inside = false;
  synth.triggerRelease();
  shape.setColour(200, 80, 50);
}

function pointerMove(event) {
  // TODO 12a, 13a go here
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
