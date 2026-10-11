
let beat = 1;
let bar = 1;
let isLively = true;

function playBass(time) {
  bass.triggerAttackRelease("C2", "8n", time);
}

function playCmaj(octave, duration, time) {
  synth.triggerAttackRelease("C" + octave, duration, time);
  synth.triggerAttackRelease("E" + octave, duration, time);
  synth.triggerAttackRelease("G" + octave, duration, time);
}
 function playChord(time){
   playCmaj(4, "8n", time);
 }

function playMelody(time) {
  if (bar <= 4) {
    synth.triggerAttackRelease("G4", "8n", time);
  }
  else if (bar <= 6) {
    synth.triggerAttackRelease("A4", "8n", time);
  }
  else {
    synth.triggerAttackRelease("E4", "8n", time);
  }
}


function playStep(time) {
  console.log("bar " + bar + ", beat " + beat);
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
  if (bar > 8){
    Tone.Transport.stop(time);
  }
}


new Tone.Loop(playStep, "4n").start(0); // "4n": once every beat


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
