// Processing data · Block 4: your own action
// Exercise 11. Start from what you wrote on paper this morning.
// After each step: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// 11a In a comment: describe your action in plain words, as you did on paper.
//     Then write the measurable thing inside it in CAPITALS.
// 11b In a comment: what will you store, and in what? A list of times? Of positions? Something else?
// TODO 11c: make the list here, and fill it in keyDown (and in keyUp, if you need it).
// TODO 11d: work out the change between the newest value and the one before it, and log it.
//           Remember the first value has nothing before it.
// TODO 11e (optional): make the change audible.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  // TODO 11c: do you want held keys to repeat here, or not? You decide.
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
