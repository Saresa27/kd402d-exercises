// Exercise 2: a comparison gives back a boolean
// A comparison is a question. Its answer is true or false.

function exercise2(start) {
  let duration = "8n";
  let bpm = 90;

  synth.triggerAttackRelease("E4", duration, start);

  console.log("Exercise 2: is duration 8n? " + (duration === "8n"));
  // Keep the round brackets around the comparison. Without them, JavaScript glues the text
  // and duration together first, and compares that.

  // TODO 2a: log two more questions the same way. Say each one out loud, and predict its answer:
  //            duration !== "4n"   is duration not 4n?
  //            bpm > 100           is the tempo more than 100?
  // TODO 2b: change duration to "4n" and bpm to 120. Predict which answers flip, then press again.
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-2", exercise2);
