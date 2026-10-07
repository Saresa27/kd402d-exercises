// Tools of the Trade
// Functions from Tuesday, now in VS Code.
// Work through the TODOs in order. After each one: save, check it works, commit.

// ---------- Part 1: the console ----------

// The Greeter from Tuesday morning: takes in a name, gives back a greeting.
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Sam"));
console.log(greet("Ana"));

// TODO 1: call greet with your own name and log what it gives back.

// ---------- Part 2: sound ----------

// Make an instrument and plug it into the speakers.
const synth = new Tone.Synth().toDestination();

// Plays three notes, timed from start.
// TODO 2: change the notes to ones you like. A note is A to G, then a number: "D4", "A3".
function playRiff(start) {
  // TODO 3: add a fourth note at start + 1.5
  synth.triggerAttackRelease("A3", "8n", start + 0);
  synth.triggerAttackRelease("C4", "8n", start + 0.25);
  synth.triggerAttackRelease("C4", "8n", start + 0.5);
  synth.triggerAttackRelease("D4", "8n", start + 0.75);
  synth.triggerAttackRelease("A3", "3n", start + 1);
  synth.triggerAttackRelease("G3", "8n", start + 1.7);
  synth.triggerAttackRelease("G3", "3n", start + 1.95);
  synth.triggerAttackRelease("F3", "8n", start + 2.65);
  synth.triggerAttackRelease("A3", "3n", start + 2.9);
  synth.triggerAttackRelease("G3", "8n", start + 3.6);
  synth.triggerAttackRelease("G3", "3n", start + 3.85);
  synth.triggerAttackRelease("F3", "8n", start + 4.55);
  synth.triggerAttackRelease("C4", "3n", start + 4.8);
  synth.triggerAttackRelease("G3", "8n", start + 5.5);
  synth.triggerAttackRelease("G3", "4n", start + 5.75);
  synth.triggerAttackRelease("C4", "16n", start + 6.35);
  synth.triggerAttackRelease("C4", "8n", start + 6.48);
  synth.triggerAttackRelease("A3", "4n", start + 6.79);
  synth.triggerAttackRelease("F4", "16n", start + 7.39);
  synth.triggerAttackRelease("F4", "8n", start + 7.52);
  synth.triggerAttackRelease("C4", "4n", start + 7.83);
  synth.triggerAttackRelease("A4", "4n", start + 8.29);
  synth.triggerAttackRelease("G4", "4n", start + 8.75);
  synth.triggerAttackRelease("A4", "4n", start + 9.21);
  synth.triggerAttackRelease("G4", "4n", start + 9.67);
  synth.triggerAttackRelease("A4", "4n", start + 10.13);
  synth.triggerAttackRelease("G4", "1.5n", start + 10.59);
}

// The whole song, timed from start.
function song(start) {
  playRiff(start);
  // TODO 4: call playRiff again, two seconds after the first one
  playRiff(start + 11);
}

// ---------- You don't need to change anything below this line ----------

// When Play is clicked: switch the sound on, then play the song from now.
const button = document.getElementById("play");
button.addEventListener("click", async () => {
  await Tone.start();
  song(Tone.now());
});
