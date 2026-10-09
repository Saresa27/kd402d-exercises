// Conditionals: setup
// The instruments, and the code that connects the buttons.
// You don't need to change anything in this file.

// Make the instruments and plug them into the speakers.
const bass = new Tone.Synth().toDestination(); // plays one note at a time
const synth = new Tone.PolySynth().toDestination(); // can play several notes at once

// Each demo button switches the sound on, then plays its demo from now.
function playOnClick(buttonId, demo) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", async () => {
    await Tone.start();
    demo(Tone.now());
  });
}

// Stop ends the song wherever it is.
document.getElementById("song-stop").addEventListener("click", () => {
  Tone.Transport.stop();
});
