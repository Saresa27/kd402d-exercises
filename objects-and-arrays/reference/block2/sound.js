// Objects and arrays · Block 2: one sound, described (finished version)
// Exercises 5 to 8, done. Click the page (not the console), then press t, e, d, h or s.

// The instrument: a plain Synth, like this morning's. It plays one note at a time.
const synth = new Tone.Synth().toDestination();

// ---------- Exercise 5: build a tone ----------
let tone = { note: "C4", duration: "8n" };
console.log(tone); // {note: 'C4', duration: '8n'}
console.log(tone.note); // C4
console.log(tone.duration); // 8n
console.log(tone.pitch); // undefined
// 5c: tone has no part labelled pitch, so asking for it gives undefined. Asking for a label that
// isn't there is allowed; it's only an error if you then reach into it: tone.pitch.name.

// ---------- Exercise 7: the same reach, with brackets ----------
console.log(tone.note); // C4
console.log(tone["note"]); // C4: the same reach, written another way
tone.velocity = 0.8; // 7b: tone had no velocity, so this adds one
console.log(tone["velocity"]); // 0.8
// 7b: the line looks the same whether it adds or changes. It adds here because tone had no
// velocity before; console.log(tone) now shows three parts.

// 7d: the label in a variable
let label = "duration";
console.log(tone[label]); // 8n: brackets use the value of label, "duration"
console.log(tone.label); // undefined: the dot looks for a part literally called "label"
// The dot only takes a name you type. When the label is only known while the program runs (in a
// variable, or the key someone pressed), brackets are the only way.

// ---------- Exercise 8: describe something real ----------
// A drum hit. Labelled parts: which note, how long, how hard.
let kick = { note: "C2", duration: "16n", velocity: 1 };
console.log(kick);

// A synth sound. Labelled parts: which wave shape, how long it rings on after the note ends.
let sound = { wave: "square", release: 1.5 };
console.log(sound);

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    console.log("key: " + event.key);
    if (event.key === "t") {
      // 5b and 7c: every part read by its label
      synth.triggerAttackRelease(
        tone.note,
        tone.duration,
        Tone.now(),
        tone.velocity,
      );
    } else if (event.key === "e") {
      // 6a: change a part: the same object, a different note
      tone.note = "E4";
      console.log(tone);
    } else if (event.key === "d") {
      // 6b
      tone.duration = "2n";
      console.log(tone);
    } else if (event.key === "h") {
      // 8: the drum hit
      synth.triggerAttackRelease(
        kick.note,
        kick.duration,
        Tone.now(),
        kick.velocity,
      );
    } else if (event.key === "s") {
      // 8: put the synth sound's parts onto the synth. Press t afterwards to hear it.
      synth.oscillator.type = sound.wave;
      synth.envelope.release = sound.release;
      console.log(
        "the synth is now " + sound.wave + ", release " + sound.release,
      );
    }
  }
}
// 6a: no new object: tone.note = "E4" changes one part of the same tone, and t reads it again.
// 6c: after a save the page reloads, and the first line makes tone again with note "C4". Changes
// made by pressing keys only last until the page reloads.

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
