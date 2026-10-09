// Exercise 2: a comparison gives back a boolean (finished version)

function exercise2(start) {
  let duration = "8n";
  let bpm = 90;

  synth.triggerAttackRelease("E4", duration, start);

  console.log("Exercise 2: is duration 8n? " + (duration === "8n")); // true
  console.log("Exercise 2: is duration not 4n? " + (duration !== "4n")); // true
  console.log("Exercise 2: is bpm more than 100? " + (bpm > 100)); // false: 90 is not more than 100

  // Console:
  //   Exercise 2: is duration 8n? true
  //   Exercise 2: is duration not 4n? true
  //   Exercise 2: is bpm more than 100? false
  //
  // 2b: with duration = "4n" and bpm = 120 all three flip: false, false, true.
  //
  // Why the brackets? Without them, + runs before ===:
  //   "Exercise 2: is duration 8n? " + duration === "8n"
  // glues the text and duration together first, then asks whether that long text is "8n".
  // It isn't, so the console shows only: false
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-2", exercise2);
