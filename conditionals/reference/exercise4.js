// Exercise 4: two equals signs or three? (finished version)

function exercise4(start) {
  const typedOctave = "4"; // text, in quotation marks
  const octave = 4; // a number

  console.log(
    "Exercise 4: typedOctave == octave is " + (typedOctave == octave),
  ); // true
  console.log(
    "Exercise 4: typedOctave === octave is " + (typedOctave === octave),
  ); // false

  // 4b: == says they're the same. It quietly turns "4" into 4 before it compares (type coercion,
  // like yesterday). That hides the fact that typedOctave is text, and text is what gave us "C41".
  // === compares the value and the kind of value, so it tells the truth: text is not a number.

  console.log(
    "Exercise 4: Number(typedOctave) === octave is " +
      (Number(typedOctave) === octave),
  ); // true
  // 4c: Number() made a number from the text first, so now both sides really are 4.

  synth.triggerAttackRelease("C" + octave, "8n", start);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
