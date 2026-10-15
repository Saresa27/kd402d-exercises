// Arrays and iteration · Block 2: writing the loop by hand
// Exercises 5 to 8. Click the page (not the console), then press any key: it calls playMelody().
// Predict before every run. After each exercise: save, click the page, press a key, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// This morning's melody.
let melody = ["C4", "E4", "G4", "B4"];
// TODO 8b: push a fifth note here, under the list (exercise 8).

// Plays every note in melody. Exercise 5 writes the loop inside it.
function playMelody() {
  // ---------- Exercise 5: the loop, from its shape ----------
  // Write it yourself from the four parts, don't copy it from the slides:
  //   start:  let i = 0
  //   test:   i < melody.length
  //   step:   i++
  //   body:   log the pass, then play the note at position i
  // TODO 5a: before you write it, predict in a comment: how many passes, which notes?
  // TODO 5b: write the loop. The body has two lines:
  //            console.log("pass " + i + ": " + melody[i]);
  //            synth.triggerAttackRelease(melody[i], "8n");
  // 5c Press a key. The notes all start at the same moment: you hear a chord, not a tune.
  //    The loop doesn't wait between passes. Block 4 spreads the notes out.
  //
  // ---------- Exercise 6: break it on purpose, at the end ----------
  // TODO 6a: change  i < melody.length  to  i <= melody.length.
  //          Predict first: how many passes now? What does the last one log?
  // TODO 6b: run it. In a comment: what is melody[4], and why? Is there an error?
  //          Then put it back to <.
  //
  // ---------- Exercise 7: break it at the start ----------
  // TODO 7: start at  let i = 1  instead of 0, with the test back to <.
  //         Predict which note goes missing, then check the console. Put it back to 0.
}

// ---------- Exercise 8: fix it, then make the melody longer ----------
// TODO 8a: check your loop is back to  let i = 0  and  i < melody.length.
// TODO 8b: push a fifth note onto melody, under the list at the top:  melody.push("C5");
//          Don't touch the loop. Predict how many passes, then run it.
// 8c In one sentence, in a comment: why did the same loop work for five notes?

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    console.log("---- playMelody ----");
    playMelody();
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
