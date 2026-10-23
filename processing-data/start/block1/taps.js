// Processing data · Block 1: tapping one key
// Exercises 1 to 4. Click the page (not the console), then press the space bar. Predict first, every time.
// After each exercise: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Every tap is a moment in time. This list remembers when each one happened.
let taps = [];

// ---------- Exercise 1: a tap is a moment ----------
// Date.now() gives the time right now, in milliseconds. It's a big number.
// 1a Predict, in a comment: tap slowly, then quickly. Are the numbers in the list
//    further apart or closer together when you tap quickly? Then try it.
// 1b In a comment: why are the numbers so big? Which part of them actually changes?

// ---------- Exercise 2: hold the key down ----------
// 2a Predict: hold the space bar down for two seconds. How many taps end up in the list?
//    Try it, and count.
// 2b In a comment: what happened? Why doesn't the data match what your finger did?
// TODO 2c: fix it yourself, so that holding the key down counts as one tap.
//          Sometimes you want a held key to repeat, and sometimes you don't. Here, you don't.

// ---------- Exercise 3: the pattern is in the gaps ----------
// TODO 3a: in keyDown, after the push, work out the gap between the newest tap and the one before:
//            let i = taps.length - 1;
//            let gap = taps[i] - taps[i - 1];
//            console.log("gap: " + gap + " ms");
// 3b Predict: which gives the smaller gaps, slow tapping or quick tapping? Check.
// 3c Save, click, and tap once. The very first gap logs something odd. What, and why?
//    Fix it, so the first tap logs no gap.
// 3d Where does taps live? Predict, in a comment: if you move  let taps = [];  into keyDown,
//    what does the list look like after three taps? Try it, then move it back.
//    In a comment: why does taps live at the top of the file, and gap inside keyDown?

// ---------- Exercise 4: taps per second ----------
// TODO 4a: turn the gap into a rate, 1000 / gap, and log it.
// 4b Predict, in a comment: a gap of 250 ms is how many taps per second? A gap of 1000 ms?
// 4c In a comment: which one number now stands for "how fast were they going"?

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.key === " ") {
    taps.push(Date.now());
    console.log(taps);
    synth.triggerAttackRelease("C4", "16n");
    // TODO 3a, 3c and 4a go here
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
