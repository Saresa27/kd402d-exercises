// Exercise 5: if / else picks what happens
// The question goes in round brackets ( ). Each block of work goes in curly brackets { }.
// JavaScript runs one block: never both, never neither.

function exercise5(start) {
  let isMuted = false; // try true
  const note = "C4";
  const duration = "4n";

  // TODO 5a: put the line below inside an if / else, so the boolean decides:
  //            if (isMuted) {
  //              console.log("Exercise 5: muted, so nothing plays");
  //            } else {
  //              ...the line that plays...
  //            }
  synth.triggerAttackRelease(note, duration, start);

  // TODO 5b: flip isMuted to true and press. Then back to false. Which block ran each time?
  // TODO 5c: bug hunt. Put quotation marks around it: let isMuted = "false";
  //          Predict, then press. Do you hear the note? Take the quotation marks away again.
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-5", exercise5);
