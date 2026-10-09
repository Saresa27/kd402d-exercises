// Conditionals: the demos from the lecture
// Each demo is a function. Its button plays it. Change the values at the top of a demo,
// save, and press the button again: the condition decides what you hear.

// ---------- Demo 1: if / else picks one of two sounds ----------
// A boolean is a yes/no fact: true or false, no quotation marks.
let isHappy = true; // try false

function demo1(start) {
  if (isHappy) {
    // a major chord: sounds bright
    synth.triggerAttackRelease("C4", "2n", start);
    synth.triggerAttackRelease("E4", "2n", start);
    synth.triggerAttackRelease("G4", "2n", start);
  } else {
    // a minor chord: sounds sad
    synth.triggerAttackRelease("A3", "2n", start);
    synth.triggerAttackRelease("C4", "2n", start);
    synth.triggerAttackRelease("E4", "2n", start);
  }
  console.log("Demo 1: isHappy is " + isHappy);
}

// ---------- Demo 2: a comparison makes the boolean ----------
// duration === "8n" is a question. Its answer is true or false.
let duration = "8n"; // try "2n"

function demo2(start) {
  console.log("Demo 2: duration === \"8n\" is " + (duration === "8n"));
  if (duration === "8n") {
    synth.triggerAttackRelease("G4", duration, start);
  } else {
    synth.triggerAttackRelease("G3", duration, start);
  }
}

// ---------- Demo 3: else if adds a middle case ----------
// JavaScript asks the questions from the top, and runs the first block whose answer is true.
let energy = 5; // from 1 to 10. Try 2, 5 and 9.

function demo3(start) {
  if (energy < 4) {
    console.log("Demo 3: low");
    bass.triggerAttackRelease("C3", "4n", start);
  } else if (energy < 8) {
    console.log("Demo 3: middle");
    bass.triggerAttackRelease("C4", "4n", start);
  } else {
    console.log("Demo 3: high");
    bass.triggerAttackRelease("C5", "4n", start);
  }
}

// ---------- Demo 4: and, or, not ----------
// &&  and: true only if both sides are true
// ||  or:  true if at least one side is true
// !   not: turns true into false, and false into true
let isMuted = false; // try true
let note = "C4"; // try "D4" and "G4"

function demo4(start) {
  // play only if the sound is not muted AND the energy is high enough
  if (!isMuted && energy > 3) {
    bass.triggerAttackRelease(note, "4n", start);
  }
  // add a high G on top if the note is C4 OR G4
  if (note === "C4" || note === "G4") {
    synth.triggerAttackRelease("G5", "8n", start + 0.5);
  }
  console.log("Demo 4: !isMuted && energy > 3 is " + (!isMuted && energy > 3));
  console.log("Demo 4: note === \"C4\" || note === \"G4\" is " + (note === "C4" || note === "G4"));
}

// ---------- You don't need to change anything below this line ----------

playOnClick("demo-1", demo1);
playOnClick("demo-2", demo2);
playOnClick("demo-3", demo3);
playOnClick("demo-4", demo4);
