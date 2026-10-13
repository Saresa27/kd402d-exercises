// User input: the instrument
// We build this together in the lecture, one step at a time. The steps match the slides.
// synth and buzzy, the instruments, are made in setup.js.
// On the page: click "Switch the sound on", then click the page and press keys.
// After each step: save, press keys, check the console, and commit.

// ---------- Step 1: listen, then log the key ----------
// TODO 1a: write a function showKey(event). Inside, log "You pressed " + event.key
// TODO 1b: hand it to the page:
//            document.addEventListener("keydown", showKey);
//          No brackets after showKey. You hand the function over; the browser calls it.
// TODO 1c: change "keydown" to "keyup", save, and hold a key down. When does the message come?
//          Change it back afterwards.

// ---------- Step 2: one key, one note ----------
// TODO 2a: write a function playNote(event). If event.key is "a", play "C4" for "8n":
//            synth.triggerAttackRelease("C4", "8n");
// TODO 2b: listen for "keydown" with playNote. Press a.
// TODO 2c: add an else if, so s plays "D4".

// ---------- Step 3: let the key choose the note ----------
// TODO 3a: under this line, store the octave: let octave = 4;
// TODO 3b: write a function noteFor(key) that gives back the note for a key:
//            a gives back "C" + octave, s gives back "D" + octave, d gives back "E" + octave …
//            up to j, which gives back "B" + octave. Any other key gives back "".
//          Use if / else if, and return.
// TODO 3c: write a function startNote(event). Ask noteFor which note event.key plays.
//          If the answer isn't "", start it: synth.triggerAttack(note);
// TODO 3d: listen for "keydown" with startNote. Delete the playNote listener from step 2:
//          startNote does its job now.

// ---------- Step 4: press starts it, release ends it ----------
// TODO 4a: write a function stopNote(event). Ask noteFor for the note again.
//          If it isn't "", stop it: synth.triggerRelease(note);
// TODO 4b: listen for "keyup" with stopNote.
// TODO 4c: hold a down. It stutters: held keys send keydown again and again.
//          At the top of startNote, add:
//            if (event.repeat) {
//              return;
//            }

// ---------- Step 5: the instrument remembers ----------
// TODO 5a: under octave, store a yes/no fact: let isBuzzy = false;
// TODO 5b: write a function changeSettings(event):
//            z takes one away from octave, x adds one,
//            and the space bar (event.key is " ") flips isBuzzy: isBuzzy = !isBuzzy;
//          Listen for "keydown" with it.
// TODO 5c: in startNote, play on buzzy if isBuzzy is true, otherwise on synth.
//          In stopNote, release the note on both.

// ---------- Step 6: make it your own ----------
// Some ideas:
// - add the black keys: w e t y u play C# D# F# G# A#
// - map the keys by letter instead: c plays C, d plays D … b plays B
// - change the notes to a scale you like
// - a key that changes something else: the length of every note, or the sound
