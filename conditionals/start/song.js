// Conditionals: the song
// Tuesday's functions, yesterday's variables and today's conditionals, in one piece.
// Do the steps in order. After each one: save, press Play, listen, check the console, commit.
// bass and synth, the instruments, are made in setup.js.
let beat = 1;
// ---------- Step 1: the instruments, as functions ----------
// Each one plays at time: the exact moment Tone hands us.
function playBass(time) {
  bass.triggerAttackRelease("C2", "8n", time);
}

function playChord(time) {
  synth.triggerAttackRelease(["C4", "E4", "G4"], "4n", time);
}

function playMelody(time) {
  synth.triggerAttackRelease("G4", "8n", time);
}

// TODO 1a: write playChord(time): play "C4", "E4" and "G4" on synth, all three at time, all "4n" long.
// TODO 1b: write playMelody(time): play "G4" on synth, "8n" long, at time.

// ---------- Step 2: hand the beat to Tone ----------
// Tone calls playStep for us, once every beat, and hands it the time to play at.
function playStep(time) {
  playBass(time);
}

new Tone.Loop(playStep, "4n").start(0); // "4n": once every beat

// Press Play: you should hear the bass on every beat. Press Stop to end it.

// ---------- Step 3: count the beats ----------
// TODO 3a: at the top of this file, make a variable for the beat: let beat = 1;
// TODO 3b: at the end of playStep, make it one bigger: beat = beat + 1;
// TODO 3c: below that, start again after beat 4:
//          if (beat > 4) {
//            beat = 1;
//          }
// TODO 3d: at the start of playStep, log it: console.log("beat " + beat);
//          The console should count 1, 2, 3, 4, 1, 2, 3, 4 …
// TODO 3e: in startSong (at the bottom), add beat = 1; as its first line, so Play starts from 1 again.

// ---------- Step 4: decide what plays on which beat ----------
// TODO 4a: in playStep, put playBass(time); inside if (beat === 1) { … }. Now the bass plays on beat 1 only.
// TODO 4b: play the chord on beats 1 and 3: if (beat === 1 || beat === 3) { playChord(time); }
// TODO 4c: guard a sound with a yes/no fact AND a beat. At the top of the file: let isLively = true;
//          Then in playStep: if (isLively && beat === 4) { synth.triggerAttackRelease("C5", "16n", time); }
//          Play it with isLively true, then false. Both sides have to be true for the high note.

// ---------- Step 5: give the song sections ----------
// TODO 5a: make a second variable at the top: let bar = 1;
// TODO 5b: when the beat goes back to 1, the bar goes up by one. Add bar = bar + 1; inside if (beat > 4).
//          Log the bar too: console.log("bar " + bar + ", beat " + beat);  And reset it in startSong.
// TODO 5c: bring the melody in after the intro, and never on beat 1:
//          if (bar > 2 && beat !== 1) { playMelody(time); }

// ---------- Step 6: change the melody as the song moves on ----------
// TODO 6a: in playMelody, use if / else if / else on bar:
//          bars 1 to 4 play "G4", bars 5 and 6 play "A4", after that "E4".
// TODO 6b: end the piece: at the end of playStep, if (bar > 8) { Tone.Transport.stop(time); }

// Runs when you press Play: start counting from the top, then start Tone's clock.
function startSong() {
  Tone.Transport.stop();
  Tone.Transport.start();
}

// ---------- You don't need to change anything below this line ----------

document.getElementById("song-play").addEventListener("click", async () => {
  await Tone.start();
  startSong();
});
