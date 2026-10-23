// Processing data · Purple: fast and slow swipes (finished version)
// P1 and P2, done. Click the page (not the console), then drag a finger along q to p.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Swipes, from block 3.
const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let swipe = [];

// How many keys are down right now. The swipe is over when the last one comes up.
let held = 0;

let times = []; // P1a: when each position arrived

// P1d: swipe[2] and times[2] describe the same key. If one list gets a value the other doesn't,
//      every pair after it is wrong. That's why both pushes sit side by side.
// P2c: a single step back of one key is usually a careless swipe. This version only calls it a turn
//      when the swipe goes back by more than one position from its furthest point.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    held = held + 1;
    let position = row.indexOf(event.key);
    if (position !== -1) {
      swipe.push(position);
      times.push(Date.now()); // P1a
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

    // P1b: how long the whole swipe took
    let duration = times[times.length - 1] - times[0];
    // P1c: the phrase's spacing comes from the swipe, between 0.05 and 0.3 seconds
    let spacing = duration / 1000 / 2;
    if (spacing < 0.05) {
      spacing = 0.05;
    } else if (spacing > 0.3) {
      spacing = 0.3;
    }
    console.log("swipe took " + duration + " ms");

    // P2a: find the furthest point in the first direction, then see how far it came back
    let turned = false;
    let furthest = first;
    for (let i = 1; i < swipe.length; i++) {
      if (last >= first && swipe[i] > furthest) {
        furthest = swipe[i];
      } else if (last < first && swipe[i] < furthest) {
        furthest = swipe[i];
      }
    }
    if (last >= first && furthest - last > 1) {
      turned = true;
    } else if (last < first && last - furthest > 1) {
      turned = true;
    }

    if (turned) {
      console.log("turned around");
      synth.triggerAttackRelease("C4", "16n", now); // P2b: up and back down
      synth.triggerAttackRelease("G4", "16n", now + spacing);
      synth.triggerAttackRelease("C4", "16n", now + spacing * 2);
    } else if (last > first) {
      synth.triggerAttackRelease("C4", "16n", now);
      synth.triggerAttackRelease("E4", "16n", now + spacing);
      synth.triggerAttackRelease("G4", "16n", now + spacing * 2);
    } else if (last < first) {
      synth.triggerAttackRelease("G4", "16n", now);
      synth.triggerAttackRelease("E4", "16n", now + spacing);
      synth.triggerAttackRelease("C4", "16n", now + spacing * 2);
    }
  }
  swipe = [];
  times = [];
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
