# User input: a finished version

The instrument from the lecture with every step done, plus the black keys. Comments in `instrument.js` explain each part. This is also the version played at the start of the lecture.

Yours can look different and still be right: other notes, other keys, other names. What matters is that you can point at each `addEventListener` and say which function the browser calls and when, and at `noteFor` and say which note a key gives back.

Run it the same way as `user-input/start`: open `index.html` with Live Preview, open the console, click **Switch the sound on**, then click the page and play.

| Keys        | What they do                                     |
| ----------- | ------------------------------------------------ |
| `a` … `k`   | white keys, from C to the next C                 |
| `w e t y u` | black keys                                       |
| `z` / `x`   | one octave down / up                             |
| space       | switch between the clean sound and the buzzy one |

Don't change these files. Read them, copy from them, run them, but make your own changes in `user-input/start`.

## How it fits together

- **Three listeners, three jobs.** `changeSettings` and `startNote` both listen for `keydown`; `stopNote` listens for `keyup`. When a key goes down, the browser calls every function listening for `keydown`, in the order they were added.
- **One question, asked in one place.** `noteFor` is the only place that knows which key plays which note. To change the layout, you change `noteFor` and nothing else.
- **Remembering between presses.** `octave` and `isBuzzy` live outside the functions, so they keep their values from one key press to the next. Each press is a new call; the variables are what carry over.
- **Early `return`.** `startNote` stops straight away for repeated keydowns and for keys that aren't notes. Everything below the `return` only runs for a real, new note.

## This afternoon: finished versions

`block1/`, `block2/`, `blue/` and `purple/` each hold one way to finish that part. Run them the same way as in `user-input/start`: open the folder's `index.html` with Live Preview, open the console, click the page, and press keys. Yours can look different and still be right.

### Block 1 (`block1/listening.js`)

- **Exercise 1.** `event.key` is always a string: `a`, `7`, `" "` (a space, so the console line looks empty), `Shift`, `ArrowUp`.
- **Exercises 2 and 3.** `a`, `s` and `d` play C4, D4 and E4; every other key is logged and plays nothing.
- **Exercise 4b.** After a reload, the console stays empty until you press a key; then it shows `handleKeyDown was called` once per key.
- **Exercise 4c.** No line in the file calls `handleKeyDown()`. The browser calls it, every time a key goes down, and hands it the event; `addEventListener` only handed the function over. (If you ever see `TypeError: Cannot read properties of undefined (reading 'key')` as the page loads, there are brackets after the name in `addEventListener`.)

### Block 2 (`block2/key-as-data.js`)

- **Exercise 5a.** `"c" >= "a"` is `true`, `"h" <= "g"` is `false`, and `"Enter" >= "a"` is `false`: every capital letter sorts before every small letter.
- **Exercise 5c.** `event.key.length === 1` keeps only keys that type one character. Names like `Enter` happen to fail the comparison anyway, but the check says what we mean.
- **Exercise 6.** `letterNote` and `noteForKey` both give back a note or `""`. Swap one for the other in `handleKeyDown` to compare: the piano layout is easier to play, the letters were easier to write.
- **Exercise 7.** With Shift held, `event.key` is `"A"`, so the lookup uses `event.key.toLowerCase()`, and `playOctave` is one higher.
- **Exercise 8.** Pressing `a`, `c`, `Enter`, `h`, `k`, then Shift + `a` logs:

  ```
  Key a played C4
  Key c plays nothing
  Key Enter plays nothing
  Key h played A4
  Key k played C5
  Key Shift plays nothing
  Key A played C5
  ```

### Blue (`blue/hold.js`)

- **B1.** `triggerAttack` on keydown, `triggerRelease` on keyup. The release happens in both octaves, in case Shift came up first.
- **B2.** Holding `a` logs `Key a started C4` once, not over and over.
- **B3.** `z` stops at octave 2 and `x` at 6. While muted, a key logs `Key s would play D3, but isMuted is true`. `z`, `x` and `m` return before the note lookup, so they never log "plays nothing". Changing the octave releases held notes first, so none get stuck.

### Purple (`purple/perform.js`)

- **P1.** One key, two jobs: `Tone.Transport.state` decides whether space starts or stops the song. Starting resets `beat` and `bar` to 1.
- **P2.** Each condition in `playStep` checks its switch with `&&`: `if (bassOn && beat === 1)`. The change is heard on the next beat.
- **P3.** The tempo lives in `let tempo`, kept between 60 and 180, then handed to Tone. (Changing `Tone.Transport.bpm.value` directly works too, but Tone reports it back as `125.00000000000001`.)
- **P4.** `lead.triggerAttackRelease(note, "8n", "@8n")` waits for the next eighth note, so what you play lands in time with the song.
