// Exercise 1: store a yes/no fact (finished version)
// One way to do it. Yours can look different and still be right.
// Compare, copy from it, run it, but make your own changes in conditionals/start.

function exercise1(start) {
  const note = "C4";
  const duration = "8n";
  let isMuted = false; // a boolean: no quotation marks. "false" in quotes would be a string.
  console.log("Exercise 1: isMuted is " + isMuted);
  // Console: Exercise 1: isMuted is false

  // 1c: with isMuted set to true, we decided by hand and turned this line off with //.
  // The computer can store the fact, but nothing in this code reads it yet. That's exercise 5.
  synth.triggerAttackRelease(note, duration, start);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-1", exercise1);
