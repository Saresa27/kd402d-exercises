// Pointers · Block 2: normalise, then stretch or squeeze (finished version)
// Exercises 5 and 6, done. Click the page, hold a key from a to j, and move the pointer.

// ---------- Sound ----------
const synth = new Tone.Synth().toDestination();

// ---------- State ----------
let octave = 4;

// 5a/5b: the right edge reads the window's width in pixels, minus one: 1439 on one screen,
//        900 when the window is narrower. The raw number depends on the screen, so on its own
//        it can't tell us "how far to the right".
// 5d: the left edge reads 0, the middle 0.5, the right edge (nearly) 1, whatever the width.
// 5e: normY is 0 at the top and 1 at the bottom: clientY counts down from the top.

// 6b: normX * 100 squeezes the whole screen into one key: a gentle wobble. normX * 2400 stretches
//     it over two octaves: a small move makes a big bend. What stays the same is normX itself:
//     0 to 1, left to right. Only the range it's stretched onto changes.
// 6c: -1200 + normX * 2400: -1200 at the left edge, 0 in the middle, +1200 at the right.
// 6d: any range is fine with a reason. This one keeps the real note in the middle of the screen.

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
  let normX = event.clientX / window.innerWidth; // 5c: 0 at the left, 1 at the right
  let normY = event.clientY / window.innerHeight; // 5e: 0 at the top, 1 at the bottom
  console.log(normX, normY);

  synth.detune.value = -1200 + normX * 2400; // 6c: the note itself in the middle
}

// ---------- Setup ----------
document.addEventListener("keydown", startNote);
document.addEventListener("keyup", stopNote);
window.addEventListener("pointermove", pointerMove);
