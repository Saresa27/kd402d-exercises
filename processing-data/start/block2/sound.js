// Processing data · Block 2: make it audible
// Exercises 5 and 6. Click the page (not the console), then press the space bar. Predict first, every time.
// After each exercise: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Block 1, finished: every tap is stored, and we work out the gap and the rate.
let taps = [];

// ---------- Exercise 5: short gap, short note ----------
// Right now every tap plays the same short note, "16n".
// TODO 5a: in keyDown, use the gap as the note's length, in seconds:
//            let length = gap / 1000;
//            synth.triggerAttackRelease("C4", length);
// 5b Predict: tap quickly, then slowly. Which sounds choppier? Check.
// 5c Wait five seconds, then tap. What happens? Add an if, so a note is never longer than 1 second.

// ---------- Exercise 6: fast taps, higher note ----------
// TODO 6a: if the rate is more than 4 taps per second, play "G4" instead of "C4".
// 6b In a comment: you chose 4. What would 2 feel like? 8? Try one.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === " ") {
      taps.push(Date.now());
      if (taps.length < 2) {
        synth.triggerAttackRelease("C4", "16n"); // the first tap has no gap
      } else {
        let i = taps.length - 1;
        let gap = taps[i] - taps[i - 1];
        let rate = 1000 / gap;
        console.log("gap: " + gap + " ms, " + rate + " taps per second");
        synth.triggerAttackRelease("C4", "16n");
        // TODO 5a, 5c and 6a: change the line above
      }
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
