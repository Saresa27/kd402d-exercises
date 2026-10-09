// Exercise 3: six ways to compare
// ===  is the same as        !==  is not the same as
// <    is less than          >    is more than
// <=   is at most            >=   is at least

function exercise3(start) {
  let bpm = 90;
  let octave = 4;

  synth.triggerAttackRelease("C" + octave, "8n", start);

  // TODO 3a: before you press the button, write your prediction (true or false) after each "I predict:".
  //          Then press it and check.
  console.log("Exercise 3: bpm === 90 is " + (bpm === 90)); // I predict:
  console.log("Exercise 3: bpm !== 120 is " + (bpm !== 120)); // I predict:
  console.log("Exercise 3: bpm < 90 is " + (bpm < 90)); // I predict:
  console.log("Exercise 3: octave > 3 is " + (octave > 3)); // I predict:
  console.log("Exercise 3: bpm <= 90 is " + (bpm <= 90)); // I predict:
  console.log("Exercise 3: octave >= 5 is " + (octave >= 5)); // I predict:

  // TODO 3b: change octave to 5 and bpm to 120. Predict all six again, then press.
  // TODO 3c: write two comparisons of your own about bpm and octave, and log them the same way.
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-3", exercise3);
