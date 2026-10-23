// Processing data · Purple: fast and slow swipes
// P1 and P2. Click the page (not the console), then drag a finger along q to p. Predict first.
// After each step: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Swipes, from block 3.
const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let swipe = [];

// How many keys are down right now. The swipe is over when the last one comes up.
let held = 0;

// ---------- P1: how fast was the swipe? ----------
// Block 3 knew which way. It didn't know how fast: it only stored positions.
// TODO P1a: make a second list, times, and push Date.now() into it every time you push a position.
// TODO P1b: in keyUp, work out how long the whole swipe took: last time minus first time.
// TODO P1c: a fast swipe plays its phrase quickly, a slow one plays it slowly.
//           Hint: the time between the notes in the phrase can come from the swipe.
// P1d In a comment: the position list and the time list must stay the same length. Why?

// ---------- P2: changing direction ----------
// TODO P2a: detect a swipe that goes one way and then turns back, like [1, 3, 5, 4, 2].
//           Hint: loop through the positions and look at how each one changes from the one before.
// TODO P2b: give it its own sound.
// P2c In a comment: a careless swipe can contain [2, 3, 3, 2, 4]. Is that a turn? How do you decide?

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    held = held + 1;
    let position = row.indexOf(event.key);
    if (position !== -1) {
      swipe.push(position);
      // TODO P1a goes here
    }
  }
}

function keyUp(event) {
  held = held - 1;
  if (held > 0) {
    return; // a finger is still on a key: the swipe isn't over yet
  }
  held = 0; // in case a key was already down when the page loaded
  if (swipe.length > 1) {
    let first = swipe[0];
    let last = swipe[swipe.length - 1];
    let now = Tone.now();
    if (last > first) {
      synth.triggerAttackRelease("C4", "16n", now);
      synth.triggerAttackRelease("E4", "16n", now + 0.12);
      synth.triggerAttackRelease("G4", "16n", now + 0.24);
    } else if (last < first) {
      synth.triggerAttackRelease("G4", "16n", now);
      synth.triggerAttackRelease("E4", "16n", now + 0.12);
      synth.triggerAttackRelease("C4", "16n", now + 0.24);
    }
    // TODO P1b, P1c, P2a and P2b
  }
  swipe = [];
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
