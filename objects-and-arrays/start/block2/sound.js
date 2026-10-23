// Objects and arrays · Block 2: one sound, described
// Exercises 5 to 8. Click the page (not the console), then press keys. Predict first, every time.
// After each exercise: save, click the page, press keys, and commit.

// The instrument: a plain Synth, like this morning's. It plays one note at a time.
const synth = new Tone.Synth().toDestination();

// ---------- Exercise 5: build a tone ----------
// One sound, described by its labelled parts: an object.
// TODO 5a: under this comment, make the object and log it:
//            let tone = { note: "C4", duration: "8n" };
//            console.log(tone);
// TODO 5b: in keyDown, t plays it, reading each part by its label:
//            synth.triggerAttackRelease(tone.note, tone.duration);
// 5c Predict, then log, one line each: tone.note, tone.duration, tone.pitch.
//    In a comment: what is tone.pitch, and why is there no error?

// ---------- Exercise 6: change a property ----------
// TODO 6a: in keyDown, e changes the note, then logs the whole object:
//            tone.note = "E4";
//            console.log(tone);
//          Press t, then e, then t. Did you have to make a new object?
// TODO 6b: d changes the duration to "2n" and logs tone. Press t, d, t.
// 6c Press e, then save the file. What does t play now? Why? (Hint: what runs when the page loads?)

// ---------- Exercise 7: the same reach, with brackets ----------
// TODO 7a: under your object, predict, then log both. Are they the same?
//            console.log(tone.note);
//            console.log(tone["note"]);
// TODO 7b: add a property with the dot, under the object:  tone.velocity = 0.8;
//          Read it back with brackets:  console.log(tone["velocity"]);
//          In a comment: did that line add a property, or change one? How can you tell?
// TODO 7c: in t, hand the velocity to the synth as a fourth value, after the start time:
//            synth.triggerAttackRelease(tone.note, tone.duration, Tone.now(), tone.velocity);
//          Try 0.2 and 1 instead of 0.8. Keep the one you like.
// 7d When the label is in a variable. Predict, then log both:
//      let label = "duration";
//      console.log(tone[label]);
//      console.log(tone.label);
//    In a comment: why does only one of them give "8n"?

// ---------- Exercise 8: describe something real ----------
// Pick one of these, or your own. Before any code, write its labelled parts in a comment.
// Then build it as an object, log it, and give it a key.
//   A drum hit:     which note, how long, how hard.         Play it with h.
//   A synth sound:  which wave shape, how long it rings on after the note ends.
//                   s puts it on the synth, then t sounds different:
//                     synth.oscillator.type = sound.wave;
//                     synth.envelope.release = sound.release;
//                   (wave shapes: "sine", "square", "triangle", "sawtooth"; release in seconds)
//   A key on your own instrument: which key, which note, and a name for what it does.
// TODO 8: your object, under this line, and its key in keyDown.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    console.log("key: " + event.key);
    // TODO 5b, 6a, 6b and 8: t, e, d and your own keys go here, with if and else if
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
