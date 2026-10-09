// Conditionals: the song (finished version)
// Tuesday's functions, yesterday's variables and today's conditionals, in one piece.
// bass and synth, the instruments, are made in setup.js.

// Where we are in the song. Both change while it plays, so they're let.
let beat = 1; // 1, 2, 3, 4, then back to 1
let bar = 1; // goes up by one every time the beat goes back to 1
let isLively = true; // a yes/no fact: add a high note on beat 4? Try false

// ---------- Step 1: the instruments, as functions ----------
// Each one plays at time: the exact moment Tone hands us.
function playBass(time) {
  bass.triggerAttackRelease("C2", "8n", time);
}

function playChord(time) {
  synth.triggerAttackRelease("C4", "4n", time);
  synth.triggerAttackRelease("E4", "4n", time);
  synth.triggerAttackRelease("G4", "4n", time);
}

// ---------- Step 6: the melody changes as the song moves on ----------
function playMelody(time) {
  if (bar <= 4) {
    synth.triggerAttackRelease("G4", "8n", time);
  } else if (bar <= 6) {
    synth.triggerAttackRelease("A4", "8n", time);
  } else {
    synth.triggerAttackRelease("E4", "8n", time);
  }
}

// ---------- Steps 2 to 5: what plays on each beat ----------
// Tone calls this function for us, once every beat.
function playStep(time) {
  console.log("bar " + bar + ", beat " + beat);

  // Step 4: the conditions decide what plays on which beat
  if (beat === 1) {
    playBass(time);
  }
  if (beat === 1 || beat === 3) {
    playChord(time);
  }
  // Step 4c: a high note on beat 4, but only while isLively is true. Both sides must be true.
  if (isLively && beat === 4) {
    synth.triggerAttackRelease("C5", "16n", time);
  }
  // Step 5: the melody comes in after the first two bars, and never on beat 1
  if (bar > 2 && beat !== 1) {
    playMelody(time);
  }

  // Step 3: count the beats, and start a new bar after beat 4
  beat = beat + 1;
  if (beat > 4) {
    beat = 1;
    bar = bar + 1;
  }

  // Step 6: end the piece after bar 8
  if (bar > 8) {
    Tone.Transport.stop(time); // time, like every other sound in here
  }
}

// Step 2: hand the beat to Tone. "4n" means once every beat.
new Tone.Loop(playStep, "4n").start(0);

// Runs when you press Play: start counting from the top, then start Tone's clock.
function startSong() {
  beat = 1;
  bar = 1;
  Tone.Transport.stop();
  Tone.Transport.start();
}

// ---------- You don't need to change anything below this line ----------

document.getElementById("song-play").addEventListener("click", async () => {
  await Tone.start();
  startSong();
});
