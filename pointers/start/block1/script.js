// Pointers · Block 1: a shape that hears the pointer
// Exercises 1 to 4: Thursday's guided build, by hand this time. Predict first, every time.
// After each exercise: save, click the page once, try it, and commit.
//
// The same sections as your A3 template, so everything here can move straight into A3.

import { createShape } from "./shape.js";

// ---------- Settings ----------
const note = "C4"; // the note the shape plays

// ---------- State ----------
const shape = createShape(); // one shape, made by shape.js

// ---------- Sound ----------
// A plain Synth: one note at a time.
const synth = new Tone.Synth().toDestination();

// ---------- Exercise 1: make a shape ----------
// The shape is already on the page: a pink circle in the top-left corner.
// TODO 1a: in setup, give it a size, a colour and a position, for example
//            shape.setSize(150);
//            shape.setColour(200, 80, 50);   // hue 0 to 360, saturation, lightness
//            shape.setPosition(0.5, 0.5);
// 1b Predict, in a comment: setPosition(0.5, 0.5) puts the shape's top-left corner where? And (1, 1)?
//    Hint: these are the same 0 to 1 numbers as this morning. Check, then put it back.

// ---------- Exercise 2: a sound when you arrive ----------
// TODO 2a: write a function pointerEnter(event) that plays the note once:
//            synth.triggerAttackRelease(note, "8n");
//          and listen for "pointerenter" on shape.element (not on shape) in setup.
// 2b Move onto the shape before clicking anywhere. Why is there no sound?
//    startSound below is already listening for a click anywhere: click once, and try again.
// TODO 2c (optional): a different sound on "pointerleave".

// ---------- Exercise 3: hold a note while you're on it ----------
// TODO 3a: change pointerEnter to start the note and keep it going: synth.triggerAttack(note);
//          and write pointerLeave to stop it: synth.triggerRelease();
// 3b Predict, in a comment: what happens if you forget the pointerleave listener? Try it.

// ---------- Exercise 4: press to play instead ----------
// TODO 4a: play the note on "pointerdown" on the shape, and stop it on "pointerup".
//          Comment out the enter and leave listeners while you try it.
// 4b Press on the shape, drag off, and let go outside. What happens to the note? Why?
// TODO 4c: fix it: also stop the note on "pointerleave".
// 4d In a comment: hovering or pressing, which feels more like an instrument to you?

// ---------- Controls (Event Handlers) ----------
function startSound(event) {
  Tone.start(); // browsers only allow sound after a click or a key press
}

// ---------- Setup ----------
function setup() {
  // TODO 1a goes here

  window.addEventListener("pointerdown", startSound);
  // TODO 2a, 3a and 4a: listen on shape.element here
}

setup();
