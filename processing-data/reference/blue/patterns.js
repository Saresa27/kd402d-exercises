// Processing data · Blue: patterns over time (finished version)
// B1 to B3, done. Click the page (not the console). Space bar taps; drag along a row to swipe.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Taps, from blocks 1 and 2.
let taps = [];

// Swipes, from block 3.
const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let swipe = [];

// How many keys are down right now. The swipe is over when the last one comes up.
let held = 0;

// B3a: the second row.
const home = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
let swipeRow = ""; // which row the current swipe is on

// B1b: shift takes from the front. The gap only uses the last two taps, so it still comes out right.
// B2c: people don't hear a 1 ms change. Here only a change of more than 30 ms counts.
// B3c: this version keeps the row the swipe started on and ignores keys from the other row.
//      You could also call it a diagonal swipe. Either is fine if you can say why.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    held = held + 1;
    if (event.key === " ") {
      taps.push(Date.now());
      if (taps.length > 5) {
        taps.shift(); // B1a: keep only the last five
      }
      if (taps.length > 1) {
        let i = taps.length - 1;
        let gap = taps[i] - taps[i - 1];
        console.log("gap: " + gap + " ms");
        if (taps.length > 2) {
          let before = taps[i - 1] - taps[i - 2]; // B2a: the gap before this one
          if (gap < before - 30) {
            console.log("speeding up");
            synth.triggerAttackRelease("G4", "16n"); // B2b
          } else if (gap > before + 30) {
            console.log("slowing down");
            synth.triggerAttackRelease("C3", "16n");
          } else {
            synth.triggerAttackRelease("C4", "16n");
          }
        } else {
          synth.triggerAttackRelease("C4", "16n");
        }
      }
    }

    // B3b: the first key of a swipe decides its row
    if (swipe.length === 0) {
      if (row.indexOf(event.key) !== -1) {
        swipeRow = "top";
      } else if (home.indexOf(event.key) !== -1) {
        swipeRow = "home";
      }
    }
    let position = -1;
    if (swipeRow === "top") {
      position = row.indexOf(event.key);
    } else if (swipeRow === "home") {
      position = home.indexOf(event.key);
    }
    if (position !== -1) {
      swipe.push(position);
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
    if (last > first) {
      console.log(swipeRow + " row, left to right");
    } else if (last < first) {
      console.log(swipeRow + " row, right to left");
    }
  }
  swipe = [];
  swipeRow = "";
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
