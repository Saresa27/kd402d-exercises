// Pointers · Blue: two pipelines, and a threshold
// B1 to B3. Click the page (not the console), press the space bar for a held note, then move.
// Predict first. After each step: save, click the page, try it, and commit.
//
// It starts with block 4 finished: averaged speed bends the note, and each speed expires after 500 ms.

// ---------- Sound ----------
const synth = new Tone.Synth().toDestination();
const chord = new Tone.PolySynth(Tone.Synth).toDestination(); // for B3

// ---------- State ----------
let playing = false;
let lastX = 0;
let lastY = 0;
let lastTime = 0;
let speeds = [];
let lastPress = 0; // for B3: when the pointer last went down

// ---------- B1: two pipelines at once ----------
// Position and speed are two different raw values. Give each its own job.
// TODO B1a: let normX bend the note: synth.detune.value = normX * 1200;
// TODO B1b: let the average speed set the volume instead, in useAverage:
//             -30 when still, up to 0 when fast (and never above 0).
// B1c In a comment: can you now play a melody with x while the speed sets how loud it is?

// ---------- B2: how long should a speed count? ----------
// TODO B2a: put the 500 in a setting at the top, const memory = 500; and use it in setTimeout.
// B2b Try 100, then 2000. In a comment: which feels like a swell, which like a twitch?
//     Which would you choose for a quiet, slow instrument? For a drum?

// ---------- B3: a threshold, not a continuous value ----------
// A double-tap is a pattern: two pointerdowns less than 300 ms apart. It either happened or it didn't.
// TODO B3a: in pointerDown, work out the gap since lastPress (like Monday's taps), then remember now.
// TODO B3b: if the gap is under 300 ms, play a chord: chord.triggerAttackRelease(["C4", "E4", "G4"], "8n");
// B3c In a comment: 300 is a choice. Try 150 and 600. Which ones fire too often, or never?

// ---------- Keyboard: the space bar starts and stops a held note ----------
function keyDown(event) {
  Tone.start();
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
  let distance = Math.hypot(normX - lastX, normY - lastY);
  let seconds = (now - lastTime) / 1000;
  if (seconds === 0) {
    return; // two events in the same millisecond: no time has passed, so no speed
  }
  let speed = distance / seconds;
  lastX = normX;
  lastY = normY;
  lastTime = now;

  speeds.push(speed);
  setTimeout(forgetOldest, 500);
  useAverage();
  // TODO B1a goes here
}

function forgetOldest() {
  speeds.shift();
  useAverage();
}

function useAverage() {
  let total = 0;
  for (let i = 0; i < speeds.length; i++) {
    total = total + speeds[i];
  }
  let average = 0;
  if (speeds.length > 0) {
    average = total / speeds.length;
  }
  synth.detune.value = average * 300;
  // TODO B1b: replace the line above
}

function pointerDown(event) {
  Tone.start();
  // TODO B3a and B3b go here
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("pointermove", pointerMove);
window.addEventListener("pointerdown", pointerDown);
