// Pointers · Blue: two pipelines, and a threshold (finished version)
// B1 to B3, done. Click the page, press the space bar for a held note, then move. Double-tap for a chord.

// ---------- Settings ----------
const memory = 500; // B2a: how long a speed counts, in ms

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

// B1c: yes: x picks the pitch (an octave across the screen) and the speed of your hand sets the volume,
//      so you can play the same melody loud or soft.
// B2b: 100 ms is a twitch: the volume follows every jerk. 2000 ms is a swell: slow to rise, slow to fade.
//      A quiet, slow instrument suits a long memory; a drum suits a short one.
// B3c: 150 ms is hard to hit on purpose; 600 ms fires when you only meant two separate taps.
//      300 is a common middle.

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
  setTimeout(forgetOldest, memory); // B2a
  useAverage();

  synth.detune.value = normX * 1200; // B1a: position sets the pitch
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
  // B1b: speed sets the volume
  let volume = -30 + average * 10;
  if (volume > 0) {
    volume = 0;
  }
  synth.volume.value = volume;
}

function pointerDown(event) {
  Tone.start();
  let now = Date.now();
  let gap = now - lastPress; // B3a
  lastPress = now;
  if (gap < 300) {
    chord.triggerAttackRelease(["C4", "E4", "G4"], "8n"); // B3b
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("pointermove", pointerMove);
window.addEventListener("pointerdown", pointerDown);
