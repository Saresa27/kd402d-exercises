// Pointers · Block 4: average over time (finished version)
// Exercises 9 to 11, done. Click the page, press the space bar for a held note, then move.

// ---------- Sound ----------
const synth = new Tone.Synth().toDestination();

// ---------- State ----------
let playing = false; // is the held note on?
let lastX = 0;
let lastY = 0;
let lastTime = 0;

// The speeds we remember. The average of these bends the note.
let speeds = [];

// 9a: without the shift, speeds.length grows by about 60 a second, forever.
// 9d: smoother: each new speed is only a tenth of the average, so one jumpy value can't throw
//     the pitch around.
// 9e: averaging everything means one new speed counts for 1 / thousands after a while, so the
//     note hardly reacts. Ten recent speeds always count for a tenth each.

// 10a/10b: with "keep 10", the note stays bent when you stop. No movement, no pointermove, so
//          nothing is pushed or shifted: the last ten fast speeds stay in the list. Only
//          pointerMove changes speeds, and it only runs when the pointer moves.

// 11c: now each speed leaves half a second after it arrived, moving or not, so the list empties
//      and the note settles back to its own pitch. An empty list would give 0 / 0, which is NaN,
//      so useAverage checks the length first.
// 11d: 100 ms reacts fast but is jumpy again; 2000 ms is very smooth but slow to settle.
//      This version keeps 500.
// (Exercise 9's if-and-shift is replaced by the timer: keeping both would do two jobs at once.)

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

  speeds.push(speed); // 9a
  setTimeout(forgetOldest, 500); // 11a: forget this speed in half a second
  useAverage(); // 11b
}

// 11a: the oldest speed is always at the front, because they all live for the same time.
function forgetOldest() {
  speeds.shift();
  useAverage();
}

// 9c and 11b: the average of everything still in the list bends the note.
function useAverage() {
  let total = 0;
  for (let i = 0; i < speeds.length; i++) {
    total = total + speeds[i];
  }
  let average = 0; // 11c: an empty list means "not moving"
  if (speeds.length > 0) {
    average = total / speeds.length;
  }
  synth.detune.value = average * 300;
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("pointermove", pointerMove);
