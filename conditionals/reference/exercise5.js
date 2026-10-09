// Exercise 5: if / else picks what happens (finished version)

function exercise5(start) {
  let isMuted = false; // try true
  const note = "C4";
  const duration = "4n";

  if (isMuted) {
    console.log("Exercise 5: muted, so nothing plays");
  } else {
    synth.triggerAttackRelease(note, duration, start);
  }

  // if (isMuted) is enough. isMuted is already true or false, so isMuted === true asks the same thing.
  //
  // 5c: with let isMuted = "false"; the note does not play, and the console says "muted".
  // In an if, any text with something in it counts as a yes, even the text "false".
  // That's why a boolean has no quotation marks: true and false are values, not words.
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-5", exercise5);
