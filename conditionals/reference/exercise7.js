// Exercise 7: and, or, not (finished version)

function exercise7(start) {
  let isMuted = false;
  let bpm = 100;
  let duration = "8n";

  console.log(
    "Exercise 7: not muted and fast enough? " + (!isMuted && bpm > 90),
  );
  console.log(
    "Exercise 7: a short note? " + (duration === "8n" || duration === "16n"),
  );

  // Play only if the sound is not muted AND the tempo is more than 90.
  if (!isMuted && bpm > 90) {
    synth.triggerAttackRelease("E4", duration, start);
  }

  // Short notes get a high G on top: the duration is "8n" OR "16n".
  if (duration === "8n" || duration === "16n") {
    synth.triggerAttackRelease("G5", "16n", start + 0.5);
  }

  // 7d, one change at a time from the values above:
  //   isMuted = true    → !isMuted is false, so && is false: no E4. The high G still plays.
  //   bpm = 80          → bpm > 90 is false, so && is false: no E4. The high G still plays.
  //   duration = "4n"   → E4 plays (longer), but neither side of || is true: no high G.
  //   duration = "16n"  → E4 plays (shorter), and the second side of || is true: high G.
  // Each side of || is a whole comparison. duration === "8n" || "16n" does not ask what you mean.
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-7", exercise7);
