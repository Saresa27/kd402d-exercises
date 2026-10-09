// Exercise 1: store a yes/no fact
// Each exercise has its own file and its own button on the page. Do them in order:
// exercise1.js, exercise2.js, and so on. After each one: save, press its button, check the console, commit.
// bass and synth, the instruments, are made in setup.js.
//
// Today every exercise keeps its variables inside its own function. That way they don't clash
// with the variables in demos.js and song.js, which use some of the same names.

function exercise1(start) {
  const note = "C4";
  const duration = "8n";
  let isMuted = false;

  console.log("Exercise 1: isMuted is " + isMuted);

  // TODO 1a: under duration, store a yes/no fact about the sound: let isMuted = false;
  //          No quotation marks: false is not text, it's a boolean.
  // TODO 1b: log it: console.log("Exercise 1: isMuted is " + isMuted);

  synth.triggerAttackRelease(note, duration, start);

  // TODO 1c: for now, you make the decision. Change isMuted to true, then put // in front of the
  //          line that plays, so it doesn't run. Press the button: silence. In exercise 5 the code
  //          decides for you.
  // TODO 1d: take the // away again, and set isMuted back to false.
}

// ---------- You don't need to change anything below this line ----------

 playOnClick("play-1", exercise1);
