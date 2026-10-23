// Pointers · Block 1: a shape that hears the pointer (finished version)
// Exercises 1 to 4, done. Click the page once, then press on the shape.

import { createShape } from "./shape.js";

// ---------- Settings ----------
const note = "C4"; // the note the shape plays

// ---------- State ----------
const shape = createShape(); // one shape, made by shape.js

// ---------- Sound ----------
// A plain Synth: one note at a time.
const synth = new Tone.Synth().toDestination();

// 1b: setPosition uses the same 0 to 1 numbers as this morning, of the window's width and height.
//     (0.5, 0.5) puts the shape's top-left corner in the middle of the window; (1, 1) puts it in the
//     bottom-right corner, so the shape itself is off the page.

// 2b: browsers only allow sound after a click or a key press, and arriving with the pointer doesn't
//     count. The colour would change (the function runs), but there's no sound until startSound has run.

// 3b: without a pointerleave listener the note never stops. There's no error: as far as JavaScript
//     knows, nothing is wrong. Every triggerAttack needs a triggerRelease somewhere.

// 4b: press, drag off and let go outside: pointerup happens somewhere else, not on the shape, so the
//     note keeps playing. 4c: also stopping it on pointerleave fixes that.
// 4d: there's no right answer. Pressing is a deliberate act, like a key; hovering is easier to play fast.

// ---------- Controls (Event Handlers) ----------
function startSound(event) {
  Tone.start(); // browsers only allow sound after a click or a key press
}

// 2a and 3a: hold the note while the pointer is on the shape (now switched off for exercise 4).
function pointerEnter(event) {
  synth.triggerAttack(note);
  shape.setColour(50, 100, 60);
}

function pointerLeave(event) {
  synth.triggerRelease();
  shape.setColour(200, 80, 50);
}

// 4a: press to play, let go to stop.
function pointerDown(event) {
  Tone.start(); // pressing counts as a click
  synth.triggerAttack(note);
  shape.setColour(50, 100, 60);
}

function pointerUp(event) {
  synth.triggerRelease();
  shape.setColour(200, 80, 50);
}

// ---------- Setup ----------
function setup() {
  // 1a
  shape.setSize(150);
  shape.setColour(200, 80, 50);
  shape.setPosition(0.4, 0.4);

  window.addEventListener("pointerdown", startSound);

  // 2a and 3a: hover to play
  // shape.element.addEventListener("pointerenter", pointerEnter);
  // shape.element.addEventListener("pointerleave", pointerLeave);

  // 4a: press to play
  shape.element.addEventListener("pointerdown", pointerDown);
  shape.element.addEventListener("pointerup", pointerUp);
  shape.element.addEventListener("pointerleave", pointerUp); // 4c: stop when the pointer leaves, too
}

setup();
