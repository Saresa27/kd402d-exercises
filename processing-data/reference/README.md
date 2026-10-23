# Processing data: finished versions

`block1/` to `block4/`, `blue/` and `purple/` each hold one way to finish that part. Comments in each file explain the answers. Run them the same way as in `processing-data/start`: open the folder's `index.html` with Live Preview, open the console, click the page and press keys.

Yours can look different and still be right: other notes, other thresholds, another action entirely in block 4. What matters is that you can say what the real action was, what you stored to stand for it, and what change between values you looked at.

Don't change these files. Read them, copy from them, run them, but make your own changes in `processing-data/start`.

## Block 1 (`block1/taps.js`)

Tapping the space bar three times, about half a second apart:

```
[1792350222104]
[1792350222104, 1792350222611]
gap: 507 ms
1.9723865877712032 taps per second
[1792350222104, 1792350222611, 1792350223098]
gap: 487 ms
2.053388090349076 taps per second
```

- **Exercise 1.** The numbers are milliseconds since 1 January 1970, so they're huge, and only the last digits change. Quick taps are closer together.
- **Exercise 2.** Holding the key fills the list: the browser repeats a held key, and every repeat is a keydown. `event.repeat` is `true` for those, so checking `event.repeat === false` counts a hold as one tap. Sometimes you'd want the repeats; here you don't.
- **Exercise 3.** Quick tapping, small gaps. The first tap has nothing before it: `taps[-1]` is `undefined`, so the gap would be `NaN`. Move `let taps = [];` into `keyDown` and the list only ever holds one moment: it's made new on every tap. `taps` has to remember, so it lives at the top; `gap` is about one tap, so it lives inside.
- **Exercise 4.** `1000 / gap`: 250 ms is 4 taps per second, 1000 ms is 1.

## Block 2 (`block2/sound.js`)

- **Exercise 5.** Short gaps make short, choppy notes. Without the cap, waiting five seconds gives a five-second note.
- **Exercise 6.** Where "fast" begins is a design choice. 4 taps per second is one; there are others.

## Block 3 (`block3/swipe.js`)

Swiping from q to p, quickly:

```
q is at 0
[0]
w is at 1
[0, 1]
r is at 3
[0, 1, 3]
...
left to right
```

- **Exercise 7.** `q` is at 0 and `p` at 9; a key that isn't in the row gives -1. With `const { key, repeat } = event;` the rest of `keyDown` reads `key` and `repeat`.
- **Exercise 8.** `swipe` and `held` collect across many key presses, so they live at the top of the file; `position` belongs to one key press, so it lives inside `keyDown`.
- **Exercise 9.** The swipe is over when `held` is back to 0, not at the first keyup: in a drag, the first key comes up while the finger is already on the next one. A swipe of one key is neither direction, so it's skipped.
- **Exercise 10.** Fast swipes double or skip keys, but the first and last positions still give the direction. A slow swipe, with the finger lifted between keys, is a string of one-key swipes.

## Block 4 (`block4/own.js`)

One example: how long each key is held down. The stored list is hold times, and the change is whether this hold was longer or shorter than the last one.

## Blue (`blue/patterns.js`)

- **B1.** `shift` takes the oldest tap off the front. The gap still works, because it only uses the last two.
- **B2.** Nobody hears a 1 ms change, so only a change of more than 30 ms counts.
- **B3.** The first key decides the row. Keys from the other row are ignored; calling it a diagonal swipe would be fine too.

## Purple (`purple/swipes.js`)

- **P1.** Positions and times are pushed side by side, so `swipe[i]` and `times[i]` always describe the same key. The phrase's spacing comes from how long the swipe took.
- **P2.** A turn is a swipe that comes back more than one position from its furthest point. One step back is usually just a careless swipe.
