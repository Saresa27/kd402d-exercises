// Exercise 8: make the decision visible (finished version)

function exercise8(start) {
  let bpm = 150; // try 50, 90 and 150

  // The bug: bpm > 60 came first. 150 is more than 60, so that block ran and the rest were skipped.
  // The fast block could never run: anything more than 120 is also more than 60.
  // The fix: ask the narrowest question first.
  if (bpm > 120) {
    console.log("Exercise 8: playing the fast pattern because bpm is " + bpm);
    synth.triggerAttackRelease("C5", "16n", start);
    synth.triggerAttackRelease("E5", "16n", start + 0.125);
    synth.triggerAttackRelease("G5", "16n", start + 0.25);
    synth.triggerAttackRelease("C6", "16n", start + 0.375);
  } else if (bpm > 60) {
    console.log("Exercise 8: playing the middle pattern because bpm is " + bpm);
    synth.triggerAttackRelease("C4", "8n", start);
    synth.triggerAttackRelease("E4", "8n", start + 0.25);
  } else {
    console.log("Exercise 8: playing the slow pattern because bpm is " + bpm);
    synth.triggerAttackRelease("C3", "2n", start);
  }

  // Console with the bug, bpm = 150:  Exercise 8: playing the middle pattern because bpm is 150
  // Console after the fix:
  //   bpm = 150 → playing the fast pattern because bpm is 150
  //   bpm = 90  → playing the middle pattern because bpm is 90
  //   bpm = 50  → playing the slow pattern because bpm is 50
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-8", exercise8);
