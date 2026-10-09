// Exercise 8: make the decision visible
// This code chooses a pattern from the tempo. It runs without an error, but one block never runs.
// Logging which block ran is how you find out which one, and why.

function exercise8(start) {
  let bpm = 150; // a fast tempo: you should hear the high, fast pattern

  // TODO 8a: as the first line of each block, log which block ran and why, for example:
  //            console.log("Exercise 8: playing the slow pattern because bpm is " + bpm);
  // TODO 8b: press the button. Which block ran? Is it the one you expected for 150?
  // TODO 8c: fix the order of the questions, so 150 plays the fast pattern and 90 still plays
  //          the middle one. Then test 50, 90 and 150.
  if (bpm > 60) {
    // middle: two notes
    synth.triggerAttackRelease("C4", "8n", start);
    synth.triggerAttackRelease("E4", "8n", start + 0.25);
  } else if (bpm > 120) {
    // fast: four high notes
    synth.triggerAttackRelease("C5", "16n", start);
    synth.triggerAttackRelease("E5", "16n", start + 0.125);
    synth.triggerAttackRelease("G5", "16n", start + 0.25);
    synth.triggerAttackRelease("C6", "16n", start + 0.375);
  } else {
    // slow: one long low note
    synth.triggerAttackRelease("C3", "2n", start);
  }
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-8", exercise8);
