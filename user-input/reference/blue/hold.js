// User input · Blue track: hold, repeat, remember (finished version)
// B1 to B3, done. Click the page (not the console) before you press keys.
//   a s d f g h j k   the home row, C to the next C (Shift: an octave up)
//   z / x             octave down / up, between 2 and 6
//   m                 mute on / off

// B1a: a PolySynth plays several notes at once, so chords work.
const synth = new Tone.PolySynth().toDestination();

// What the instrument remembers between key presses.
let octave = 4;
let isMuted = false; // B3b

// Which note does this key play? "" means: not a note.
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

function handleKeyDown(event) {
  Tone.start(); // sound can only start after a key press or a click

  // B2: held keys send keydown again and again. Only the first one counts.
  if (event.repeat) {
    return;
  }

  const key = event.key.toLowerCase();

  // B3: keys that change what the instrument remembers. Each one returns,
  // so it never reaches the note lookup below.
  if (key === "z") {
    if (octave > 2) {
      synth.releaseAll(); // stop held notes before their octave changes
      octave = octave - 1;
    }
    console.log("octave is " + octave);
    return;
  } else if (key === "x") {
    if (octave < 6) {
      synth.releaseAll();
      octave = octave + 1;
    }
    console.log("octave is " + octave);
    return;
  } else if (key === "m") {
    isMuted = !isMuted;
    console.log("isMuted is " + isMuted);
    return;
  }

  let playOctave = octave;
  if (event.shiftKey) {
    playOctave = octave + 1;
  }

  const note = noteForKey(key, playOctave);
  if (note === "") {
    console.log("Key " + event.key + " plays nothing");
  } else if (isMuted) {
    console.log("Key " + event.key + " would play " + note + ", but isMuted is true");
  } else {
    synth.triggerAttack(note); // B1b: starts the note; keyup stops it
    console.log("Key " + event.key + " started " + note);
  }
}

// B1c: when the key comes up, stop its note. Released in both octaves, because Shift
// may have come up before the letter did. Releasing a note that isn't playing does nothing.
function handleKeyUp(event) {
  const key = event.key.toLowerCase();
  const note = noteForKey(key, octave);
  if (note !== "") {
    synth.triggerRelease(note);
    synth.triggerRelease(noteForKey(key, octave + 1));
  }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
