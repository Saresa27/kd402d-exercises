// Processing data · Block 2: make it audible (finished version)
// Exercises 5 and 6, done. Click the page (not the console), then press the space bar.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Block 1, finished: every tap is stored, and we work out the gap and the rate.
let taps = [];

// 5b: quick tapping gives short gaps, so short notes: choppier. Slow tapping gives long, smooth notes.
// 5c: after five seconds the gap is 5000 ms, so a five-second note. The if caps it at 1 second.
// 6b: with 2, almost any steady tapping counts as fast. With 8, hardly anyone gets there.
//     The number is a design choice: where does "fast" start for the person playing?

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

        let length = gap / 1000; // 5a: the gap, in seconds
        if (length > 1) {
          length = 1; // 5c: never longer than 1 second
        }
        let note = "C4";
        if (rate > 4) {
          note = "G4"; // 6a: fast taps, higher note
        }
        synth.triggerAttackRelease(note, length);
      }
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
