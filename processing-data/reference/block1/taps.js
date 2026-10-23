// Processing data · Block 1: tapping one key (finished version)
// Exercises 1 to 4, done. Click the page (not the console), then press the space bar.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Every tap is a moment in time. This list remembers when each one happened.
let taps = [];

// 1a: tapping quickly puts the numbers closer together. They're moments in time,
//     and quick taps are close together in time.
// 1b: Date.now() counts milliseconds since 1 January 1970, so it's huge. Only the last few
//     digits change while you tap. The big number means nothing on its own; the differences do.

// 2a: holding the key down for two seconds adds dozens of taps, not one.
// 2b: the browser repeats a held key, like holding a letter down while typing. Every repeat
//     is another keydown, so the list says "rapid tapping" when nobody tapped.
// 2c: event.repeat is true for those repeats, so only the first keydown is counted.
//     If you wanted held keys to count, you'd leave the check out: it's a choice.

// 3b: quick tapping gives small gaps, slow tapping gives big ones. That's the pattern.
// 3c: with one tap, taps[i - 1] is taps[-1], which is undefined, so the gap is NaN
//     (not a number). The first tap has nothing before it, so it has no gap.

// 3d: inside keyDown, every tap makes a new empty list, so it only ever holds one moment.
//     taps has to remember every tap, so it lives at the top of the file. gap is only about
//     this one tap: it's made inside keyDown, fresh each time, and gone when the function ends.

// 4b: 1000 / 250 is 4 taps per second. 1000 / 1000 is 1.
// 4c: the rate. One number stands in for "how fast were they going".

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    // 2c: only the first keydown of a held key
    if (event.key === " ") {
      taps.push(Date.now());
      console.log(taps);
      synth.triggerAttackRelease("C4", "16n");
      if (taps.length > 1) {
        // 3c: only when there's a tap before this one
        let i = taps.length - 1;
        let gap = taps[i] - taps[i - 1]; // 3a
        console.log("gap: " + gap + " ms");
        let rate = 1000 / gap; // 4a
        console.log(rate + " taps per second");
      }
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
