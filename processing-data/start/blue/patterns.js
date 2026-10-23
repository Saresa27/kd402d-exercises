// Processing data · Blue: patterns over time
// B1 to B3. Click the page (not the console). Space bar taps; drag along q to p to swipe. Predict first.
// After each step: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Taps, from blocks 1 and 2.
let taps = [];

// Swipes, from block 3.
const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let swipe = [];

// How many keys are down right now. The swipe is over when the last one comes up.
let held = 0;

// ---------- B1: only the last five ----------
// Tap for a minute and the list keeps growing. A program that runs all evening would keep thousands.
// TODO B1a: after each push, if there are more than five taps, take the oldest one off the front.
// B1b In a comment: which list method takes from the front? Does the gap still come out right?

// ---------- B2: speeding up or slowing down ----------
// TODO B2a: with at least three taps, compare the newest gap with the one before it.
//           Smaller means speeding up; bigger means slowing down. Log which.
// TODO B2b: make it audible: one note for speeding up, another for slowing down.
// B2c In a comment: a gap 1 ms smaller counts as speeding up. Is that what a person would call it?
//     Change it so only a clear change counts.

// ---------- B3: a second row ----------
// TODO B3a: make a second row, the home row: ["a", "s", "d", "f", "g", "h", "j", "k", "l"].
// TODO B3b: when a swipe starts, remember which row it's on, and log it with the direction.
// B3c In a comment: what should happen if a swipe starts on one row and ends on the other?

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    held = held + 1;
    if (event.key === " ") {
      taps.push(Date.now());
      // TODO B1a goes here
      if (taps.length > 1) {
        let i = taps.length - 1;
        let gap = taps[i] - taps[i - 1];
        console.log("gap: " + gap + " ms");
        synth.triggerAttackRelease("C4", "16n");
        // TODO B2a and B2b go here
      }
    }
    let position = row.indexOf(event.key);
    if (position !== -1) {
      swipe.push(position);
    }
    // TODO B3b goes here
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
    if (last > first) {
      console.log("left to right");
    } else if (last < first) {
      console.log("right to left");
    }
  }
  swipe = [];
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
