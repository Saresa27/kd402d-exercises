// Arrays and iteration · Blue track: decide inside the loop (finished version)
// B1 to B3, done. Click the page (not the console), then press keys:
//   a   play the melody, with longer and shorter notes
//   f   find A4      g   find G4      n   look for B4, which isn't there
//   d   describe the melody: a count and a list, in one walk

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

let melody = ["C4", "E4", "G4", "C4", "A4", "G4", "E4", "C4"];

// B1: the loop decides, for every note, how long it plays.
function playNotes(notes) {
  for (let i = 0; i < notes.length; i++) {
    let length = "8n";
    if (notes[i] === "C4") {
      length = "4n"; // C4 rings longer
    } else if (notes[i] === "E4") {
      length = "16n"; // E4 is short
    }
    console.log("pass " + i + ": " + notes[i] + " for " + length);
    synth.triggerAttackRelease(notes[i], length, Tone.now() + i * 0.4);
  }
}

// B2: walk the melody until target turns up, then stop.
function findNote(target) {
  let foundAt = -1; // -1: not found (yet). No real index is -1.
  for (let i = 0; i < melody.length; i++) {
    console.log("checking index " + i);
    if (melody[i] === target) {
      foundAt = i;
      break; // leaves the loop straight away: the indexes after this one are never checked
    }
  }
  if (foundAt === -1) {
    console.log(target + " is not in the melody");
  } else {
    console.log("found " + target + " at index " + foundAt);
  }
}
// B2b: findNote("A4") checks indexes 0 to 4, and stops at 4.
// B2c: findNote("B4") checks all eight indexes, then logs "B4 is not in the melody".
// B2d: findNote("G4") gives back 2, the first G4: the loop walks from the front and stops at the
// first match, so it never reaches the second one at index 5.

// B3: one walk, two running values.
function describe() {
  let count = 0;
  let played = "";
  for (let i = 0; i < melody.length; i++) {
    if (melody[i] === "C4") {
      count++;
    }
    played = played + melody[i] + " ";
  }
  console.log("C4 comes " + count + " times"); // 3
  console.log("The melody is: " + played); // C4 E4 G4 C4 A4 G4 E4 C4
}

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "a") {
      playNotes(melody);
    } else if (event.key === "f") {
      findNote("A4");
    } else if (event.key === "g") {
      findNote("G4");
    } else if (event.key === "n") {
      findNote("B4");
    } else if (event.key === "d") {
      describe();
    }
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
