// User input · Block 2: the key as data (finished version)
// Exercises 5 to 8, done. Click the page (not the console) before you press keys.

// The instrument: plays one note at a time.
const synth = new Tone.Synth().toDestination();

// The octave every note is played in.
let octave = 4;

// Exercise 5a: strings compare in alphabetical order.
//   "c" >= "a"      true:  c comes after a
//   "h" <= "g"      false: h comes after g
//   "Enter" >= "a"  false: every capital letter comes before every small letter
// Exercise 5c: event.key.length === 1 keeps only keys that type one character.
// Key names like "Enter" or "ArrowUp" happen to fail the comparison anyway, because they start
// with a capital, but the length check says what we mean instead of relying on that.

// ---------- Exercise 6a: keys are note names ----------
// The letter is the note: c plays C, d plays D … b plays B.
function letterNote(key, oct) {
  if (key.length === 1 && key >= "a" && key <= "g") {
    return key.toUpperCase() + oct;
  }
  return "";
}

// ---------- Exercise 6b: keys are piano keys ----------
// The position decides the note: the home row is a piano's white keys, from C to the next C.
function noteForKey(key, oct) {
  if (key === "a") {
    return "C" + oct;
  } else if (key === "s") {
    return "D" + oct;
  } else if (key === "d") {
    return "E" + oct;
  } else if (key === "f") {
    return "F" + oct;
  } else if (key === "g") {
    return "G" + oct;
  } else if (key === "h") {
    return "A" + oct;
  } else if (key === "j") {
    return "B" + oct;
  } else if (key === "k") {
    return "C" + (oct + 1); // the top C belongs to the next octave
  }
  return "";
}

// Exercise 6d: noteForKey is easier to play a melody on (the notes sit side by side, like a
// piano). letterNote was easier to write (one comparison instead of eight). Swap the name in
// handleKeyDown to try the other one.

function handleKeyDown(event) {
  Tone.start(); // sound can only start after a key press or a click

  // Exercise 7: with Shift held, event.key is a capital ("A"), so look up the small letter.
  const key = event.key.toLowerCase();
  let playOctave = octave;
  if (event.shiftKey) {
    playOctave = octave + 1;
  }

  const note = noteForKey(key, playOctave);

  // Exercise 8: say what came in, and what it turned into.
  if (note !== "") {
    synth.triggerAttackRelease(note, "8n");
    console.log("Key " + event.key + " played " + note);
  } else {
    console.log("Key " + event.key + " plays nothing");
  }
}

document.addEventListener("keydown", handleKeyDown);
