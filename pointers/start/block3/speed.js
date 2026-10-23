// Pointers · Block 3: speed, in screens per second
// Exercises 7 and 8. Click the page (not the console), then move the pointer. Predict first, every time.
// After each exercise: save, click the page, try it, and commit.

// ---------- Sound ----------
const synth = new Tone.Synth().toDestination();

// ---------- State ----------
let playing = false; // is the held note on?

// Speed needs the last position and when it was. These have to survive from one
// pointermove to the next, so they live up here.
let lastX = 0;
let lastY = 0;
let lastTime = 0;

// ---------- Exercise 7: keep the last one, compare ----------
// We stay in normalised numbers, so speed means the same on any screen:
// how much of the screen you cross in one second.
// TODO 7a: in pointerMove, after normX and normY:
//            let now = Date.now();
//            let distance = Math.hypot(normX - lastX, normY - lastY);   // in screens
//            let seconds = (now - lastTime) / 1000;
//            let speed = distance / seconds;                             // screens per second
//            console.log(speed);
//          then remember this move for next time: lastX = normX; lastY = normY; lastTime = now;
// 7b Predict, in a comment: you move from the left edge to the right edge in half a second.
//    What is speed? Then move slowly, and flick: what numbers do you see?
// 7c Look at the very first number after a reload. In a comment: why is it so odd?
//    (What are lastX, lastY and lastTime the first time?)
// 7d Move, but leave out the three "last" lines. What happens to speed, and why?
// 7e Now and then speed logs Infinity or NaN. Two events can arrive in the same millisecond:
//    then seconds is 0. TODO: right after the seconds line, skip this move if no time has passed:
//            if (seconds === 0) {
//              return;
//            }

// ---------- Exercise 8: speed bends the note ----------
// TODO 8a: press the space bar for a held note, then: synth.detune.value = speed * 300;
// 8b Predict: drift slowly, then flick. Which bends further? Check.
// 8c Move at a steady pace and listen. In a comment: why does it warble?
// 8d Try a mouse and a trackpad, or swap with a neighbour. Is 300 right for yours?
//    Change it until a quick flick bends about an octave (1200 cents).

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
  // TODO 7a and 8a go here
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("pointermove", pointerMove);
