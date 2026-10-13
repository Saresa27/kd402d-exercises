// User input · Purple track: play along with the song (finished version)
// P1 to P4, done. Click the page (not the console) before you press keys.
//   space             start / stop the song
//   1 2 3 4           bass, chord, melody, high note: on / off
//   ArrowUp / Down    tempo up / down by 5, between 60 and 180
//   a s d f g h j k   play along on top, landing on the next eighth note

// The instruments: Friday's two, plus one for you to play on top.
const bass = new Tone.Synth().toDestination(); // plays one note at a time
const synth = new Tone.PolySynth().toDestination(); // can play several notes at once
const lead = new Tone.Synth().toDestination(); // P4: the one you play

// Where we are in the song. Both change while it plays, so they're let.
let beat = 1; // 1, 2, 3, 4, then back to 1
let bar = 1; // goes up by one every time the beat goes back to 1
let isLively = true; // a high note on beat 4?
// P2a: the person decides live which parts play.
let bassOn = true;
let chordOn = true;
let melodyOn = true;
let tempo = 120; // P3: beats per minute, Tone's starting tempo

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
  // P2c: each part plays only if its switch is on AND it's the right beat.
  if (bassOn && beat === 1) {
    playBass(time);
  }
  if (chordOn && (beat === 1 || beat === 3)) {
    playChord(time);
  }
  if (isLively && beat === 4) {
    synth.triggerAttackRelease("C5", "16n", time);
  }
  if (melodyOn && bar > 2 && beat !== 1) {
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
  if (event.repeat) {
    return; // a held key only counts once
  }

  if (event.key === " ") {
    // P1: one key, two jobs. The state of the song decides which.
    if (Tone.Transport.state === "started") {
      Tone.Transport.stop();
      console.log("stopped");
    } else {
      beat = 1;
      bar = 1;
      Tone.Transport.start();
      console.log("started");
    }
  } else if (event.key === "1") {
    // P2b: flip a switch. playStep reads it on the next beat.
    bassOn = !bassOn;
    console.log("bassOn is " + bassOn);
  } else if (event.key === "2") {
    chordOn = !chordOn;
    console.log("chordOn is " + chordOn);
  } else if (event.key === "3") {
    melodyOn = !melodyOn;
    console.log("melodyOn is " + melodyOn);
  } else if (event.key === "4") {
    isLively = !isLively;
    console.log("isLively is " + isLively);
  } else if (event.key === "ArrowUp") {
    // P3: the tempo lives in a variable, kept between 60 and 180, and Tone follows it.
    if (tempo < 180) {
      tempo = tempo + 5;
    }
    Tone.Transport.bpm.value = tempo;
    console.log("tempo is " + tempo);
  } else if (event.key === "ArrowDown") {
    if (tempo > 60) {
      tempo = tempo - 5;
    }
    Tone.Transport.bpm.value = tempo;
    console.log("tempo is " + tempo);
  } else {
    // P4: anything else might be a note to play on top.
    const note = noteForKey(event.key, 4);
    if (note !== "") {
      // "@8n": wait for the next eighth note, so it lands in time with the song.
      lead.triggerAttackRelease(note, "8n", "@8n");
    }
  }
}

document.addEventListener("keydown", handleKeyDown);
