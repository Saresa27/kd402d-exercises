// Pointers · Block 2: normalise, then stretch or squeeze
// Exercises 5 and 6. Click the page (not the console), then move the pointer. Predict first, every time.
// After each exercise: save, click the page, try it, and commit.
//
// This is the keyboard instrument from the User input lecture, on a plain Tone.Synth,
// with an empty pointer section: the same file as this morning's activity.

// ---------- Sound ----------
// A plain Synth: one note at a time, and it has a .detune you can change.
const synth = new Tone.Synth().toDestination();

// ---------- State ----------
let octave = 4;

// ---------- Exercise 5: how far left or right? ----------
// TODO 5a: in pointerMove, log event.clientX. Move to the far right edge: what's the biggest number?
// 5b Make the browser window narrower and do it again. In a comment: why is the number different?
// TODO 5c: normalise it: let normX = event.clientX / window.innerWidth;  and log normX instead.
// 5d Predict, in a comment: what does the left edge read? The middle? The right edge?
//    Then resize the window again and check that the right edge still reads (nearly) 1.
// TODO 5e: do the same for up and down: normY, from event.clientY and window.innerHeight.
//          In a comment: where is normY 0, at the top or the bottom?

// ---------- Exercise 6: stretch it onto detune ----------
// synth.detune.value bends the note that's playing, in cents.
// 100 cents is one key on the piano, 1200 is an octave, 0 is the note as it is.
// TODO 6a: in pointerMove: synth.detune.value = normX * 1200;
//          Hold the "a" key with one hand and move the pointer with the other.
// 6b Predict, then try: normX * 100. Then normX * 2400. In a comment: what changes, and what stays the same?
// TODO 6c: put the note itself in the middle of the screen: an octave down at the left edge,
//          an octave up at the right. Hint: start at -1200, and stretch over 2400.
// 6d Keep the range you like best. In a comment: why that one?

// ---------- Keyboard ----------
function noteFor(key) {
  if (key === "a") {
    return "C" + octave;
  } else if (key === "s") {
    return "D" + octave;
  } else if (key === "d") {
    return "E" + octave;
  } else if (key === "f") {
    return "F" + octave;
  } else if (key === "g") {
    return "G" + octave;
  } else if (key === "h") {
    return "A" + octave;
  } else if (key === "j") {
    return "B" + octave;
  }
  return "";
}

function startNote(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat) {
    return;
  }
  const note = noteFor(event.key);
  if (note !== "") {
    synth.triggerAttack(note);
  }
}

function stopNote(event) {
  if (noteFor(event.key) !== "") {
    synth.triggerRelease();
  }
}

// ---------- Pointer ----------
function pointerMove(event) {
  // TODO 5a, 5c, 5e and 6a go here
}

// ---------- Setup ----------
document.addEventListener("keydown", startNote);
document.addEventListener("keyup", stopNote);
window.addEventListener("pointermove", pointerMove);
