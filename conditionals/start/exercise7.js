// Exercise 7: and, or, not
// &&  and: true only if both sides are true
// ||  or:  true if at least one side is true
// !   not: turns true into false, and false into true

function exercise7(start) {
  let isMuted = false;
  let bpm = 100;
  let duration = "8n";

  // TODO 7a: play the note only if the sound is not muted AND the tempo is more than 90:
  //            if (!isMuted && bpm > 90) { … }
  synth.triggerAttackRelease("E4", duration, start);

  // TODO 7b: short notes get a high G on top, half a second later. Add a second if:
  //            if (duration === "8n" || duration === "16n") {
  //              synth.triggerAttackRelease("G5", "16n", start + 0.5);
  //            }
  // TODO 7c: log both conditions, like in exercise 2, so you can see each answer:
  //            console.log("Exercise 7: not muted and fast enough? " + (!isMuted && bpm > 90));
  // TODO 7d: change one value at a time, predict, then press:
  //            isMuted = true      bpm = 80      duration = "4n"      duration = "16n"
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-7", exercise7);
