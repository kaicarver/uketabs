# uketabs

Printable uke tabs for me to play with...

## Examples

https://raw.githack.com/kaicarver/uketabs/master/one.html

https://raw.githack.com/kaicarver/uketabs/master/hot_n_cold.html

https://raw.githack.com/kaicarver/uketabs/master/dragostea_din_tei.html

https://raw.githack.com/kaicarver/uketabs/master/mad_world.html

https://raw.githack.com/kaicarver/uketabs/master/titanium.html

https://raw.githack.com/kaicarver/uketabs/master/heaven_on_their_minds.html

https://raw.githack.com/kaicarver/uketabs/master/celebration.html

https://raw.githack.com/kaicarver/uketabs/master/mother_of_pearl.html

## Notes

### Why: for printing

There are lots of ukulele scores out there,
but I find I have problems printing them.

Even when they do print nicely,
they end up too small for me to read easily.

The idea here is to develop a template that makes
any of these common monospace scores easily printable.

The chord charts are also easy to display
in a nice format on the side, ideally with fingering.

### chord notation

the linked score has nice text chord notation:

```text
       g-C-E-A
Fadd9  0-0-1-0  1
Cmaj7  0-0-0-2  1
Bm7    2-2-2-2
       4-2-2-0  4 1 2
E7sus4 2-2-0-2  1 2 3
       4-2-0-0  4 1 2
Cadd9  0-2-0-3  1 2
```

but it lacked the fingering info, so I added it.

### transpose quick and dirty

```text
initial chords  : D,A,E,B,
transposable to : F,C,G,D,
```

identify

```bash
grep -E '(E|D|A|B)([ ]|$)' mother_of_pearl.html
```

replace

```bash
perl -i -pe 's/D([ ]|$)/F$1/g; s/A([ ]|$)/C$1/g; s/E([ ]|$)/G$1/g; s/B([ ]|$)/D$1/g; ' mother_of_pearl.html
```

## TODOs

### Chord charts

Just by scanning the score, the list of chord charts
to display could be automatically generated.

### Info links

add Wikipedia and Youtube links for each song

### Play button

The score could be playable, with a choice of strumming patterns

### Use a template

It's getting silly copying files for what is the same template and 5 or 6 variables... Let's think about an easy solution. 

Use React?...

https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute

Turns out the one-minute React is not good for shared information.

And if you want the magic of multiple buttons, one shared state, they kind of need a common ancestor...

So React kind of wants to take everything over.

So either you have to go "full React" ("never go full React"?)
or maybe look at React + Redux for sharing state between components that don't share an ancestor?
