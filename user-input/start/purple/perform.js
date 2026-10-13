// User input · Purple track: play along with the song
// P1 to P4. Friday's song is below, without its ending: it plays until you stop it.
// Today you make it something you can perform with: the keyboard starts it, switches parts on
// and off, changes the tempo, and plays a melody on top.
// Nothing plays until P1 is done. After each step: save, click the page, press keys, and commit.

// The instruments: Friday's two, plus one for you to play on top.
const bass = new Tone.Synth().toDestination(); // plays one note at a time
const synth = new Tone.PolySynth().toDestination(); // can play several notes at once
const lead = new Tone.Synth().toDestination(); // P4: the one you play

// Where we are in the song. Both change while it plays, so they're let.
let beat = 1; // 1, 2, 3, 4, then back to 1
let bar = 1; // goes up by one every time the beat goes back to 1
let isLively = true; // a high note on beat 4?
// TODO P2a: add three more yes/no facts under isLively, all true to start with:
//           bassOn, chordOn, melodyOn

// ---------- Friday's song ----------
function playBass(time) {
  bass.triggerAttackRelease("C2", "8n", time);
}

function playChord(time) {
  synth.triggerAttackRelease("C4", "4n", time);
  synth.triggerAttackRelease("E4", "4n", time);
  synth.triggerAttackRelease("G4", "4n", time);
}

function playMelody(time) {
  if (bar <= 4) {
    synth.triggerAttackRelease("G4", "8n", time);
  } else if (bar <= 6) {
    synth.triggerAttackRelease("A4", "8n", time);
  } else {
    synth.triggerAttackRelease("E4", "8n", time);
  }
}

// Tone calls this function for us, once every beat.
function playStep(time) {
  console.log("bar " + bar + ", beat " + beat);

  // TODO P2c: each condition also checks its switch with &&, e.g.  if (bassOn && beat === 1)
  if (beat === 1) {
    playBass(time);
  }
  if (beat === 1 || beat === 3) {
    playChord(time);
  }
  if (isLively && beat === 4) {
    synth.triggerAttackRelease("C5", "16n", time);
  }
  if (bar > 2 && beat !== 1) {
    playMelody(time);
  }

  beat = beat + 1;
  if (beat > 4) {
    beat = 1;
    bar = bar + 1;
  }
}

new Tone.Loop(playStep, "4n").start(0);

// P4: the home row plays notes, like this morning.
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
    return "C" + (oct + 1);
  }
  return "";
}

// ---------- The keyboard ----------
function handleKeyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  console.log("key: " + event.key);

  // TODO P1: the space bar (event.key is " ") starts the song, or stops it if it's playing.
  //          Tone.Transport.state is "started" while it plays. Ask that question:
  //            if (Tone.Transport.state === "started") {
  //              Tone.Transport.stop();
  //            } else {
  //              beat = 1;
  //              bar = 1;
  //              Tone.Transport.start();
  //            }

  // TODO P2b: keys 1 to 4 flip a switch each: 1 bassOn, 2 chordOn, 3 melodyOn, 4 isLively.
  //           bassOn = !bassOn;   Log the switch after each change.

  // TODO P3: ArrowUp and ArrowDown change the tempo by 5 beats per minute. Keep the tempo in a
  //          variable,  let tempo = 120;  (Tone's starting tempo), change that, keep it between
  //          60 and 180, then hand it to Tone and log it:
  //            Tone.Transport.bpm.value = tempo;

  // TODO P4a: the home row plays on lead:
  //             const note = noteForKey(event.key, 4);
  //             if (note !== "") { lead.triggerAttackRelease(note, "8n"); }
  //           Play along. Do your notes land on the beat?
  // TODO P4b: give triggerAttackRelease a third argument, "@8n". Tone waits for the next
  //           eighth note before playing it. Hear the difference?
}

document.addEventListener("keydown", handleKeyDown);
