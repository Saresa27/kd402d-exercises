// Processing data · Block 3: swiping across the keys
// Exercises 7 to 10. Click the page (not the console), then drag a finger along q to p. Predict first, every time.
// After each exercise: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// A key has no position until we give it one: its index in this list.
const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

// The positions of the keys in one swipe, in the order they arrived.
let swipe = [];

// How many keys are down right now. The swipe is over when the last one comes up.
let held = 0;

// ---------- Exercise 7: give each key a position ----------
// row.indexOf("e") gives back 2: where "e" is in the list.
// 7a Predict, in a comment: what does row.indexOf give back for "q"? For "p"?
//    For "a", which isn't in the row?
// TODO 7b: in keyDown, log the position of every key you press:
//            console.log(event.key + " is at " + row.indexOf(event.key));
// TODO 7c: this morning's shortcut. As the first line of keyDown, take the two parts you need
//          out of the event:   const { key, repeat } = event;
//          Then use key and repeat instead of event.key and event.repeat.

// ---------- Exercise 8: capture a swipe ----------
// TODO 8a: in keyDown, push each key's position into swipe, but only if the key is in the row.
//          Log swipe after each push.
// 8b Predict: drag a finger from q towards p. Do the numbers go up or down? Check.
// 8c In a comment: swipe and held live at the top of the file, but position lives inside keyDown. Why?

// ---------- Exercise 9: which way? ----------
// keyUp runs every time a key is let go. In a swipe, the first key comes up while your finger is
// already on the next one, so one keyup doesn't mean the swipe is over. held counts the keys that
// are down, and keyUp only gets past its  return  when the last one comes up.
// TODO 9a: in keyUp, compare the first and the last position in swipe. Bigger at the end means
//          left to right; smaller means right to left. Log which.
// TODO 9b: then empty the list, so the next swipe starts fresh:  swipe = [];
// 9c What happens with a "swipe" of one key? Make sure nothing is logged for it.

// ---------- Exercise 10: hear the direction ----------
// TODO 10a: play a rising phrase for left to right and a falling one for right to left:
//             let now = Tone.now();
//             synth.triggerAttackRelease("C4", "16n", now);
//             synth.triggerAttackRelease("E4", "16n", now + 0.12);
//             synth.triggerAttackRelease("G4", "16n", now + 0.24);
// 10b Swipe quickly and carelessly, and look at the logged list. Are any keys doubled or missing?
//     In a comment: why does comparing only the first and last position still work?
// 10c Swipe slowly, lifting your finger between keys. What happens, and why? (What is held then?)

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    held = held + 1;
    // TODO 7b, 7c and 8a go here
  }
}

function keyUp(event) {
  held = held - 1;
  if (held > 0) {
    return; // a finger is still on a key: the swipe isn't over yet
  }
  held = 0; // in case a key was already down when the page loaded
  // TODO 9a, 9b and 10a go here: the swipe is over
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
