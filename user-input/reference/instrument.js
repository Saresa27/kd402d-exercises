// User input: the instrument (finished version)
// Every step from the lecture, done. synth and buzzy, the instruments, are made in setup.js.
// On the page: click "Switch the sound on", then click the page and press keys.
//
//   a s d f g h j k   white keys, from C to the next C
//    w e   t y u      black keys
//   z / x             one octave down / up
//   space             switch between the clean sound and the buzzy one

// ---------- What the instrument remembers between key presses ----------
// Both change while it plays, so they're let.
let octave = 4;
let isBuzzy = false;

// ---------- Step 3: which note does this key play? ----------
// Gives back a note like "E4", or "" if the key isn't a note.
// The keys are laid out like a piano: the middle row is the white keys, the row above the black keys.
function noteFor(key) {
  if (key === "a") {
    return "C" + octave;
  } else if (key === "w") {
    return "C#" + octave;
  } else if (key === "s") {
    return "D" + octave;
  } else if (key === "e") {
    return "D#" + octave;
  } else if (key === "d") {
    return "E" + octave;
  } else if (key === "f") {
    return "F" + octave;
  } else if (key === "t") {
    return "F#" + octave;
  } else if (key === "g") {
    return "G" + octave;
  } else if (key === "y") {
    return "G#" + octave;
  } else if (key === "h") {
    return "A" + octave;
  } else if (key === "u") {
    return "A#" + octave;
  } else if (key === "j") {
    return "B" + octave;
  } else if (key === "k") {
    return "C" + (octave + 1); // the C at the top belongs to the next octave
  }
  return "";
}

// ---------- Step 5: keys that change the settings ----------
function changeSettings(event) {
  if (event.key === "z") {
    octave = octave - 1;
    console.log("octave is now " + octave);
  } else if (event.key === "x") {
    octave = octave + 1;
    console.log("octave is now " + octave);
  } else if (event.key === " ") {
    // stop anything still sounding, then flip the yes/no fact
    synth.releaseAll();
    buzzy.releaseAll();
    isBuzzy = !isBuzzy;
    console.log("isBuzzy is now " + isBuzzy);
  }
}

// ---------- Steps 3 and 4: a key goes down, a note starts ----------
function startNote(event) {
  // Held keys send keydown again and again. Only the first one counts.
  if (event.repeat) {
    return;
  }
  const note = noteFor(event.key);
  if (note === "") {
    return;
  }
  console.log("play " + note);
  if (isBuzzy) {
    buzzy.triggerAttack(note);
  } else {
    synth.triggerAttack(note);
  }
}

// ---------- Step 4: the key comes up, the note stops ----------
// Released on both instruments, in case isBuzzy changed while the key was down.
function stopNote(event) {
  const note = noteFor(event.key);
  if (note !== "") {
    synth.triggerRelease(note);
    buzzy.triggerRelease(note);
  }
}

// ---------- Hand the functions to the page ----------
// No brackets: the browser calls them, every time a key goes down or comes up.
document.addEventListener("keydown", changeSettings);
document.addEventListener("keydown", startNote);
document.addEventListener("keyup", stopNote);
