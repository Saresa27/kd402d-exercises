// Pointers · Block 4: average over time
// Exercises 9 to 11. Click the page (not the console), press the space bar for a held note,
// then move the pointer. Predict first, every time.
// After each exercise: save, click the page, try it, and commit.
//
// It starts with block 3 finished: speed, in screens per second, bends the note.

// ---------- Sound ----------
const synth = new Tone.Synth().toDestination();

// ---------- State ----------
let playing = false; // is the held note on?
let lastX = 0;
let lastY = 0;
let lastTime = 0;

// The speeds we remember. The average of these bends the note.
let speeds = [];

// ---------- Exercise 9: only keep the last 10 ----------
// One move is a tiny, jumpy piece of data. The average of several is smoother.
// TODO 9a: in pointerMove, push each speed onto speeds. Log speeds.length. Move for a while:
//          what happens to it?
// TODO 9b: keep only the last 10: right after the push,
//            if (speeds.length > 10) {
//              speeds.shift(); // take out the oldest, at the front
//            }
// TODO 9c: work out the average of speeds with a for loop, and use it instead of speed:
//            synth.detune.value = average * 300;
// 9d Listen with a steady movement. In a comment: smoother than block 3? Why?
// 9e In a comment: this morning, averaging every speed ever stored got slower and slower to react.
//    Why does keeping 10 fix that?

// ---------- Exercise 10: flick, then stop dead ----------
// 10a Predict, in a comment: flick the pointer fast across the screen, then hold your hand
//     completely still. What does the note do? Then try it.
// 10b In a comment: why? Which function would have to run for anything to change?

// ---------- Exercise 11: let each speed expire ----------
// Instead of keeping 10, keep each speed for half a second.
// TODO 11a: replace the if-and-shift from 9b with a timer, right after the push:
//             setTimeout(forgetOldest, 500);
//           and write forgetOldest, which takes the oldest speed off the front.
//           (No brackets after forgetOldest inside setTimeout: we hand the function over, we don't call it.)
// TODO 11b: speeds now also change when nothing moves. Move the averaging and the detune line
//           into a function useAverage(), and call it from both pointerMove and forgetOldest.
// 11c Flick and stop again. What happens now? And what does useAverage do when speeds is empty?
//     Make sure an empty list gives an average of 0, not NaN.
// 11d In a comment: 500 ms is a choice. What would 100 feel like? 2000? Try one.

// ---------- Keyboard: the space bar starts and stops a held note ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.key === " " && event.repeat === false) {
    if (playing) {
      synth.triggerRelease();
    } else {
      synth.triggerAttack("A3");
    }
    playing = !playing;
  }
}

// ---------- Pointer ----------
function pointerMove(event) {
  let normX = event.clientX / window.innerWidth;
  let normY = event.clientY / window.innerHeight;
  let now = Date.now();
  let distance = Math.hypot(normX - lastX, normY - lastY); // in screens
  let seconds = (now - lastTime) / 1000;
  if (seconds === 0) {
    return; // two events in the same millisecond: no time has passed, so no speed
  }
  let speed = distance / seconds; // screens per second
  lastX = normX;
  lastY = normY;
  lastTime = now;

  synth.detune.value = speed * 300;
  // TODO 9a, 9b and 9c go here
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("pointermove", pointerMove);
