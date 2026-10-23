# Pointers: finished versions

`block1/` to `block5/`, `blue/` and `purple/` each hold one way to finish that part. Comments in each file explain the answers. Run them the same way as in `pointers/start`: open the folder's `index.html` with Live Preview, open the console, and click the page once.

Yours can look different and still be right: other notes, other ranges, other multipliers. What matters is that you can say what the raw value was, what you turned it into, and why you chose the numbers you did.

Don't change these files. Read them, copy from them, run them, but make your own changes in `pointers/start`.

## Block 1 (`block1/script.js`)

- **Exercise 1.** `setPosition` takes the same 0 to 1 numbers as this morning, of the window's width and height. It places the shape's top-left corner, so `(1, 1)` puts the shape off the page.
- **Exercise 2.** Moving onto the shape before anyone has clicked runs the function but makes no sound: browsers only allow sound after a click or a key press.
- **Exercise 3.** `triggerAttack` on `pointerenter`, `triggerRelease` on `pointerleave`. Without the leave listener the note never stops, and there is no error to read.
- **Exercise 4.** Press on the shape, drag off and let go outside: `pointerup` happens somewhere else, so the note keeps playing. Stopping on `pointerleave` too fixes it. The finished file has press-to-play switched on and hover-to-play commented out.

## Block 2 (`block2/normalise.js`)

Moving from the left edge to the right, in a window 1440 pixels wide, logs `normX` and `normY`:

```
0.0006944444444444445 0.4475
0.25 0.45125
0.5013888888888889 0.4525
0.9993055555555556 0.45375
```

- **Exercise 5.** The right edge reads the width in pixels (minus one), which is different on every screen. Divided by `window.innerWidth` it's (nearly) 1 on any screen. `normY` is 0 at the top and 1 at the bottom.
- **Exercise 6.** `normX * 100` squeezes the whole screen into one key; `normX * 2400` stretches it over two octaves. `-1200 + normX * 2400` puts the note itself in the middle.

## Block 3 (`block3/speed.js`)

- **Exercise 7.** Edge to edge in half a second is 2 screens per second. The first speed after a reload is tiny, because "last time" was the top-left corner in 1970. Without updating `lastX`, `lastY` and `lastTime`, speed is always nearly 0. Two moves in the same millisecond give `Infinity` or `NaN`: skip them when `seconds === 0`.
- **Exercise 8.** `speed * 300` bends a quick flick about an octave with a mouse; trackpads often need more. It warbles, because every event's speed is a little different.

## Block 4 (`block4/average.js`)

- **Exercise 9.** Without `shift` the list grows by about 60 a second. With it, it never holds more than 10, and the average is smoother than any single speed.
- **Exercise 10.** Flick, then stop dead: with "keep 10" the note stays bent. Nothing runs while the pointer is still, so the last ten fast speeds stay in the list.
- **Exercise 11.** `setTimeout(forgetOldest, 500)` after each push: every speed leaves half a second later, moving or not, and the note settles. `useAverage` runs from both `pointerMove` and `forgetOldest`, and gives 0 for an empty list instead of `NaN`. The finished file uses the timer instead of exercise 9's `if`.

## Block 5 (`block5/script.js`)

- **Exercise 12.** Speed only while `inside` is true. On `pointerenter`, "last time" is set to now and here, so the first speed isn't measured from somewhere far away. The first `pointermove` often arrives in the same millisecond as `pointerenter`; the `seconds === 0` check skips it.
- **Exercise 13.** Volume from -30 (nearly silent) when still to 0 (full) when fast, from the average over the last half second. Stop dead and it fades within half a second.

## Blue (`blue/two.js`)

- **B1.** `normX * 1200` sets the pitch; the averaged speed sets the volume. Two raw values, two jobs.
- **B2.** 100 ms twitches, 2000 ms swells. `const memory = 500;` at the top makes it easy to try.
- **B3.** The gap between two `pointerdown`s, like Monday's taps; under 300 ms plays a chord.

## Purple (`purple/script.js`)

- **P1.** Three shapes, three synths: a `Tone.Synth` plays one note at a time. The three `pointerEnter` functions differ only in synth, note and shape.
- **P2.** `range = 100 + average * 400` cents, and `detune = (normX - 0.5) * 2 * range`: moving slowly bends a little, moving fast bends a lot. Position sets the pitch; speed sets how far it can go.
