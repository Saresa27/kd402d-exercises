// User input · Block 1: listening for keys (finished version)
// Exercises 1 to 4, done. Click the page (not the console) before you press keys.

// The instrument: plays one note at a time.
const synth = new Tone.Synth().toDestination();

// Exercises 1 to 4: one named function, handed to the page.
// The browser calls it every time a key goes down, and hands it the event.
function handleKeyDown(event) {
  console.log("handleKeyDown was called"); // exercise 4b: once per key press, never on its own
  Tone.start(); // sound can only start after a key press or a click
  console.log(event.key); // exercise 1: a, 7, " ", Shift, ArrowUp

  // Exercises 2 and 3: the key decides which note plays. Any other key: nothing.
  if (event.key === "a") {
    synth.triggerAttackRelease("C4", "8n");
  } else if (event.key === "s") {
    synth.triggerAttackRelease("D4", "8n");
  } else if (event.key === "d") {
    synth.triggerAttackRelease("E4", "8n");
  }
}

// Exercise 4: handleKeyDown without brackets. The page keeps it and calls it later.
document.addEventListener("keydown", handleKeyDown);

// Exercise 4c: no line in this file calls handleKeyDown(). The browser calls it, every time a
// key goes down, and hands it the event. addEventListener only handed the function over.
//
// If you ever see  TypeError: Cannot read properties of undefined (reading 'key')  as soon as
// the page loads, look for brackets after the name:  addEventListener("keydown", handleKeyDown())
// With brackets, handleKeyDown runs straight away, before any key is pressed, so there is no event.
