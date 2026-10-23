// Processing data · Block 4: your own action (one example)
// There's no single answer here. This is one: how long you hold each key down.
// Click the page (not the console), then hold the space bar down, shorter and longer.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// 11a: "I press a key and keep it down for a while, sometimes short, sometimes long."
//      The measurable thing: HOW LONG it stays down.
// 11b: a list of hold times in milliseconds. Each one is keyup time minus keydown time.
let holds = [];
let downAt = 0; // when the key went down

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false && event.key === " ") {
    // here we don't want repeats: one hold is one keydown
    downAt = Date.now();
  }
}

function keyUp(event) {
  if (event.key === " ") {
    let hold = Date.now() - downAt;
    holds.push(hold); // 11c
    console.log(holds);
    if (holds.length > 1) {
      let change = hold - holds[holds.length - 2]; // 11d
      console.log("change: " + change + " ms");
      // 11e: longer than last time plays higher, shorter plays lower
      if (change > 0) {
        synth.triggerAttackRelease("G4", "8n");
      } else {
        synth.triggerAttackRelease("C4", "8n");
      }
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
