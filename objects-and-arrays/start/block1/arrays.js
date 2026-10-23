// Objects and arrays · Block 1: the melody, extended
// Exercises 1 to 4. Click the page (not the console), then press keys. Predict first, every time.
// After each exercise: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// This morning's melody: three notes, kept in order.
let notes = ["C4", "E4", "G4"];
// TODO 2a and 2b: grow the list here, under it (exercise 2).

// Plays every note in a list, one every 0.4 seconds. Yesterday's loop. p calls it.
function playNotes(list) {
  for (let i = 0; i < list.length; i++) {
    synth.triggerAttackRelease(list[i], "8n", Tone.now() + i * 0.4);
  }
}

// ---------- Exercise 1: read by position ----------
// 1a Predict, in a comment: which note does each of these play?
//      notes[0]        notes[2]        notes[notes.length - 1]
// TODO 1b: in keyDown, make f play the first note, m play notes[2] and l play the last one:
//            } else if (event.key === "l") {
//              synth.triggerAttackRelease(notes[notes.length - 1], "8n");
//            }
// 1c In a comment: why notes.length - 1, and not notes.length? Try notes[notes.length] in l.
//    What plays? What does console.log(notes[notes.length]) say? Put it back.

// ---------- Exercise 2: grow the melody ----------
// TODO 2a: under the list at the top, add a note at the end:  notes.push("B4");
//          Predict: what does l play now? You didn't change keyDown. Check.
// TODO 2b: under that, add one at the front:  notes.unshift("A3");
//          Before you log anything: at which index is "C4" now? What does f play? Comment.
// TODO 2c: under those two lines, log the list and its length:
//            console.log(notes);
//            console.log(notes.length);
//          Which notes changed their index?

// ---------- Exercise 3: shrink it ----------
// pop takes the last element off and gives it back. shift takes the first one off and gives it back:
//   let gone = notes.pop();    gone is the note that was removed
// TODO 3a: in keyDown, x takes the last note off with pop and plays it. Log what was removed,
//          then the list:
//            let gone = notes.pop();
//            console.log("pop took " + gone);
//            console.log(notes);
//            synth.triggerAttackRelease(gone, "8n");
// TODO 3b: z does the same from the front, with shift.
// 3c Press x and z until the list is empty, predicting each note and each length first.
//    What do pop and shift give back when there's nothing left? Is there an error?
//    Save to get the full list back: the page reloads and the code at the top runs again.

// ---------- Exercise 4: who has to move? ----------
// 4a In a comment, for each of push, pop, unshift and shift:
//      does any other note change its index?
// 4b Imagine a list of 1000 notes. Which two make the computer move 1000 notes,
//    and which two move none? Why?

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    if (event.key === "p") {
      console.log("---- p plays " + notes.length + " notes ----");
      playNotes(notes);
    }
    // TODO 1b, 3a and 3b: more keys go here, as else if
  }
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
