// User input · Block 2: the key as data
// Exercises 5 to 8. This file starts where block 1 ended: a, s and d play three notes.
// After each exercise: save, click the page, press keys, check the console, and commit.

// The instrument: plays one note at a time.
const synth = new Tone.Synth().toDestination();

// The octave every note is played in. Exercise 7 plays one higher with Shift.
let octave = 4;

function handleKeyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  console.log(event.key);
  let playOctave = octave
    if (event.shiftKey) {
      playOctave = octave + 1;
  }
const note = noteForKey(event.key.toLowerCase(), playOctave);
   if (note !== "") {
    synth.triggerAttackRelease(note, "8n");
    console.log("Key " + event.key + " played " + note);
  } else {
    console.log("Key " + event.key + " plays poop")
  }
   }


function letterNote(key, oct) {
  if (key.length === 1 && key >= "a" && key <= "g") {
    return key.toUpperCase() + oct;
  }

}

function noteForKey (key, octave) {
  if (key === "a") {
    return "C" + octave;
  } else if (key === "s") {
    return "D" + octave;
  } else if (key === "d") {
    return "E" + octave;
  } else if (key === "f") {
    return "F" + octave;
  } else if (key === "g") {
    return "G" + octave;
  } else if (key === "h") {
    return "A" + octave;
  } else if (key === "j") {
    return "B" + octave;
  } else if (key === "k") {
    return "C" + (octave + 1);
  }
  return "";
}

document.addEventListener("keydown", handleKeyDown);

// ---------- Exercise 5: keys are note names ----------
// The letter IS the note: press c, hear C.
// 5a Predict first, in a comment: what do these give? Strings compare in alphabetical order.
//      "c" >= "a"      "h" <= "g"      "Enter" >= "a"
//    Log them to check:  console.log("c" >= "a");
// console.log("c" >= "a"); // true
// console.log("h" <= "g"); // false
// console.log("Enter" >= "a"); // false

// TODO 5b: replace the whole if / else if chain in handleKeyDown with:
//            if (event.key.length === 1 && event.key >= "a" && event.key <= "g") {
//              const note = event.key.toUpperCase() + octave;
//              synth.triggerAttackRelease(note, "8n");
//            }
//          Press a to g. Then press h, Enter and Shift: nothing should play.
// TODO 5c: in a comment, say what event.key.length === 1 checks, and why it's there.
//

// ---------- Exercise 6: keys are piano keys ----------
// Now the position on the keyboard decides the note: the home row is a piano's white keys.
//      a  s  d  f  g  h  j  k
//      C  D  E  F  G  A  B  C (one octave up)
// TODO 6a: move exercise 5's mapping into its own function, which gives back a note or "":
//            function letterNote(key, oct) {
//              if (key.length === 1 && key >= "a" && key <= "g") {
//                return key.toUpperCase() + oct;
//              }
//              return "";
//            }
// TODO 6b: write noteForKey(key, oct) next to it. Use if / else if: "a" gives back "C" + oct,
//          "s" gives back "D" + oct … and "k" gives back "C" + (oct + 1). Any other key: "".
// TODO 6c: in handleKeyDown, ask noteForKey, and play only if the answer isn't "":
//            const note = noteForKey(event.key, octave);
//            if (note !== "") {
//              synth.triggerAttackRelease(note, "8n");
//            }
// TODO 6d: change noteForKey to letterNote in that line, and back. Which mapping is easier to play
//          a melody on? Which was easier to write? Answer in a comment.

// ---------- Exercise 7: Shift for an octave ----------
// event.shiftKey is a boolean: true while Shift is held down.
// 7a Predict, then check in the console: what is event.key when you hold Shift and press a?
// TODO 7b: play one octave higher while Shift is held:
//            let playOctave = octave;
//            if (event.shiftKey) {
//              playOctave = octave + 1;
//            }
//          and ask noteForKey for the note in playOctave.
// TODO 7c: with Shift held, nothing plays. Why? Fix it: look up event.key.toLowerCase() instead.

// ---------- Exercise 8: make the input visible ----------
// TODO 8: replace console.log(event.key) with one line that says what came in and what played:
//            console.log("Key " + event.key + " played " + note);
//          and, for keys that aren't notes, log "Key Enter plays nothing" (with the real key).
