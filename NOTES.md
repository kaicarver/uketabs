# Implementation Notes

- [Implementation Notes](#implementation-notes)
  - [React](#react)
    - [Just a little bit of React?](#just-a-little-bit-of-react)
    - [static version?](#static-version)
    - [JSON or js?](#json-or-js)
      - [one field too big](#one-field-too-big)
    - [className instead of class](#classname-instead-of-class)
    - [remembering state on Back](#remembering-state-on-back)
    - [routing](#routing)
  - [Other](#other)
    - [transpose quick and dirty](#transpose-quick-and-dirty)
    - [chord notation](#chord-notation)
  - [TODOs](#todos)
    - [Chord charts](#chord-charts)
    - [Displaying chord charts without relying on images](#displaying-chord-charts-without-relying-on-images)
    - [Info links](#info-links)
    - [Play button](#play-button)
    - [Use a template](#use-a-template)
  - [Song ideas](#song-ideas)

## React

### Just a little bit of React?

So I tried to just add in a little bit of React to what is just a project with a bunch of static pages all on the same model...

... Wasn't so easy for what I wanted.

Which is basically a single page web app that reuses the same layout for every page.

Basically a song is a score, a title, an author, and a few other things.

But it seems I need full-blown React to do what I want... Or I'm doing it wrong, god forbid :D

So to add full-blown React to my existing repo, I did:

```bash
npx create-react-app uke
cd uke
npm start # jsut to check it works
cp -pr package* public src .gitignore ../uketabs
mv node_modules/ ../uketabs/
cd ../uketabs
npm start # it still works
```

And I was able to integrate React that way, the way I'm already used to. No tiny bit of React for me, alas.

### static version?

But this _going full React_ for such a teeny project led me to some serious questions...

By adding full-blown React, I no longer had a static pure-front-end solution that I could just deploy to Github and view from anwyhere with rawgit or githack or whatever it's called (very handy by the way).

So, I traded a super-simple front-end solution for something that requires tooling and that I knpow how to deploy using a third-party service like zeit.co's now... It kinda feels the opposite of "serverless"... If I'm going to need all that framework machinery, why not just use some kind of LAMP PHP/MySQL super classic server solution? At least for simple cases...

Well it appears the solution is... Moar framework!!! The [create-react page](https://reactjs.org/docs/create-a-new-react-app.html#nextjs) helpfully suggests using Next.js or Gatsby.

OK! Embrace it! I'll look at those soon. Let a hundred tools bloom!

### JSON or js?

For clarity, my data needs to be in a Javascript array of objects (or hashes? what's the JS equivalent? Maps?) in a separate file.

JSON is a nice standard format. But it's a pain to copy from JS to JSON, since JSON is much more constraining.* I don't want to do the busywork of turning JS to JSON, though I suppose there are tools for that, but if I'm going to need to use a tool to transform my data, then maybe I should use a friendlier format like TOML or YAML or Markdown or what have you.

*And I've been increasingly convinced standard formats are not the panacea we ever-naive geeks might hope it to be. I should have learned my lesson with XML. One data format to rule them all? Um, no. That's a recipe for a lot of sad ugliness. But we look at this format (SGML, XML, YAML, JSON, TOML, ...)! It's so nice it will solve all your problems! No... Enjoy the format for what it can do, but don't expect it to be useful everywhere. Never forget the story of the Tower of Babel...

For now I'll try to just put my structure in a `.js` file. As a module!

#### one field too big

for convenience, I may want to split the data structure into two: all the song fields except for the score in one, and the looong score in another. But I'll need some easy way of referencing, and integrity checking or at least error handling.

### className instead of class

What a pita, I have to change all my `class` to `className`... Why is that again?

Long story short: [because `class` is a JavaScript keyword](https://stackoverflow.com/questions/46989454/class-vs-classname-in-react-16)

Ugh. This makes my HTML less portable...

[Dan Abramov](https://github.com/facebook/react/issues/13525#issuecomment-417818906) is pretty interseting on this topic.

### remembering state on Back

TODO: if I click a link that changes the page, then do Back, the state of the page is not preserved. How do I preserve it?

### routing

tried out some basic routing using this guide

Learn React Router in 5 Minutes

https://www.freecodecamp.org/news/react-router-in-5-minutes/

## Other

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

### chord notation

a linked score has nice text chord notation:

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

but it lacked the fingering info, so I added it above.

## TODOs

### Chord charts

Just by scanning the score, the list of chord charts
to display could be automatically generated.

### Displaying chord charts without relying on images

https://www.google.com/search?hl=en&q=ukulele+chord+diagrams+svg

This looks promising, but in Python:

https://github.com/gkvoelkl/python-ukulele-chord-to-svg

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

## Song ideas

Don't judge me...

- Sounds of Silence
- Hotel California
- Daniel
- Vigilante Man
- California Dreaming
- ...
