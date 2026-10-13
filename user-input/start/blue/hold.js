// User input · Blue track: hold, repeat, remember
// B1 to B3. This file starts where block 2 ended: the home row plays, Shift plays an octave up.
// After each step: save, click the page, press keys, check the console, and commit.

// The instrument. B1 changes it.
const synth = new Tone.Synth().toDestination();

// What the instrument remembers between key presses.
let octave = 4;

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

  const key = event.key.toLowerCase();
  let playOctave = octave;
  if (event.shiftKey) {
    playOctave = octave + 1;
  }

  const note = noteForKey(key, playOctave);
  if (note !== "") {
    synth.triggerAttackRelease(note, "8n");
    console.log("Key " + event.key + " played " + note);
  } else {
    console.log("Key " + event.key + " plays nothing");
  }
}

document.addEventListener("keydown", handleKeyDown);

// ---------- B1: hold to sustain ----------
// TODO B1a: change Tone.Synth to Tone.PolySynth in the first line. A PolySynth plays several
//           notes at once, so chords work.
// TODO B1b: in handleKeyDown, start the note instead of playing a fixed length:
//             synth.triggerAttack(note);
// TODO B1c: write handleKeyUp(event). It asks noteForKey for the same note and stops it:
//             synth.triggerRelease(note);
//           Listen for "keyup" with it. Now a note lasts as long as you hold the key.
//           Tip: release the note in both octaves (octave and octave + 1), in case Shift came up
//           before the letter did.

// ---------- B2: stop the auto-repeat ----------
// B2a Hold a down for two seconds and watch the console. How many times did keydown fire?
// TODO B2b: event.repeat is true for those extra keydowns. At the top of handleKeyDown, after
//           Tone.start(), skip them:
//             if (event.repeat) {
//               return;
//             }

// ---------- B3: remember something between presses ----------
// TODO B3a: z moves octave down by one, x moves it up by one. Keep it between 2 and 6:
//           only change it if it's still inside those bounds. Log the new octave.
// TODO B3b: add  let isMuted = false;  under octave. m flips it:  isMuted = !isMuted;
//           While isMuted is true, no note starts. Log the state each time it changes.
// TODO B3c: z, x and m aren't notes, so they shouldn't log "plays nothing". Handle them first,
//           and return before the note lookup.
