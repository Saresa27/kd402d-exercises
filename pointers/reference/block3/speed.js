// Pointers · Block 3: speed, in screens per second (finished version)
// Exercises 7 and 8, done. Click the page, press the space bar for a held note, then move.

// ---------- Sound ----------
const synth = new Tone.Synth().toDestination();

// ---------- State ----------
let playing = false; // is the held note on?

// Speed needs the last position and when it was. These have to survive from one
// pointermove to the next, so they live up here.
let lastX = 0;
let lastY = 0;
let lastTime = 0;

// 7b: the whole screen (1) in half a second (0.5) is 1 / 0.5 = 2 screens per second.
//     A slow drift is well under 1; a quick flick is 3 to 6.
// 7c: the first time, lastX and lastY are 0 (the top-left corner) and lastTime is 0, which is
//     1 January 1970. So the distance is real but the time is decades: the first speed is tiny.
//     7e: if two moves arrive in the same millisecond, seconds is 0, and speed is Infinity
//     (or NaN, 0 / 0, if the pointer didn't move either). The if skips those moves.
// 7d: without the "last" lines, every move is compared with the top-left corner at 1970,
//     so speed is always nearly 0.
// 8b: a flick bends further: a bigger speed, a bigger detune.
// 8c: it warbles because every event's speed is a little different, and the detune follows each one.
// 8d: 300 suited a mouse here; trackpads often need more. Any number is fine if you tested it.

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
  let distance = Math.hypot(normX - lastX, normY - lastY); // 7a: in screens
  let seconds = (now - lastTime) / 1000;
  if (seconds === 0) {
    return; // two events in the same millisecond: no time has passed, so no speed
  }
  let speed = distance / seconds; // screens per second
  lastX = normX;
  lastY = normY;
  lastTime = now;
  console.log(speed);

  synth.detune.value = speed * 300; // 8a
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("pointermove", pointerMove);
