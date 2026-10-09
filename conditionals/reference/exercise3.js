// Exercise 3: six ways to compare (finished version)

function exercise3(start) {
  let bpm = 90;
  let octave = 4;

  synth.triggerAttackRelease("C" + octave, "8n", start);

  // With bpm = 90 and octave = 4:
  console.log("Exercise 3: bpm === 90 is " + (bpm === 90)); // true
  console.log("Exercise 3: bpm !== 120 is " + (bpm !== 120)); // true
  console.log("Exercise 3: bpm < 90 is " + (bpm < 90)); // false: 90 is not less than 90
  console.log("Exercise 3: octave > 3 is " + (octave > 3)); // true
  console.log("Exercise 3: bpm <= 90 is " + (bpm <= 90)); // true: the = lets 90 itself count
  console.log("Exercise 3: octave >= 5 is " + (octave >= 5)); // false

  // 3b: with bpm = 120 and octave = 5 the answers are
  //   false, false, false, true, false, true

  // 3c: two of our own
  console.log("Exercise 3: bpm >= 60 is " + (bpm >= 60)); // true: at least 60
  console.log("Exercise 3: octave < 4 is " + (octave < 4)); // false: 4 is not less than 4
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-3", exercise3);
