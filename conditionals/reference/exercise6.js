// Exercise 6: else if adds a middle case (finished version)

function exercise6(start) {
  let bpm = 90; // try 60, 100 and 140

  if (bpm < 80) {
    synth.triggerAttackRelease("C3", "4n", start); // low
  } else if (bpm < 120) {
    synth.triggerAttackRelease("C4", "4n", start); // middle
  } else {
    synth.triggerAttackRelease("C5", "4n", start); // high
  }

  // 6b: 60 → C3, 100 → C4, 140 → C5.
  // The edges: 80 is not less than 80, so the first question is false and 80 plays C4.
  // 120 is not less than 120 either, so both questions are false and the else plays C5.
  // The else if doesn't need bpm >= 80 && bpm < 120: if JavaScript reaches it, the first answer
  // was already false.
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-6", exercise6);
