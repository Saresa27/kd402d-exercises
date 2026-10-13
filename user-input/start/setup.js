// User input: setup
// The instruments, and the button that switches the sound on.
// You don't need to change anything in this file.

// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth().toDestination(); // can play several notes at once
const distortion = new Tone.Distortion(0.8).toDestination();
const buzzy = new Tone.PolySynth().connect(distortion); // the same, through a distortion effect

// Browsers only play sound after you click something on the page.
// This is the same addEventListener as today's, listening for a click instead of a key.
async function switchSoundOn() {
  await Tone.start();
  document.getElementById("sound-on").textContent = "Sound is on. Now press keys.";
}

document.getElementById("sound-on").addEventListener("click", switchSoundOn);
