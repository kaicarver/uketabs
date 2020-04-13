# Implementation Notes

- [Implementation Notes](#implementation-notes)
  - [Just a little bit of React?](#just-a-little-bit-of-react)
  - [static version?](#static-version)
  - [JSON or js?](#json-or-js)
  - [className instead of class](#classname-instead-of-class)

## Just a little bit of React?

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

## static version?

But this _going full React_ for such a teeny project led me to some serious questions...

By adding full-blown React, I no longer had a static pure-front-end solution that I could just deploy to Github and view from anwyhere with rawgit or githack or whatever it's called (very handy by the way).

So, I traded a super-simple front-end solution for something that requires tooling and that I knpow how to deploy using a third-party service like zeit.co's now... It kinda feels the opposite of "serverless"... If I'm going to need all that framework machinery, why not just use some kind of LAMP PHP/MySQL super classic server solution? At least for simple cases...

Well it appears the solution is... Moar framework!!! The [create-react page](https://reactjs.org/docs/create-a-new-react-app.html#nextjs) helpfully suggests using Next.js or Gatsby.

OK! Embrace it! I'll look at those soon. Let a hundred tools bloom!

## JSON or js?

For clarity, my data needs to be in a Javascript array of objects (or hashes? what's the JS equivalent? Maps?) in a separate file.

JSON is a nice standard format. But it's a pain to copy from JS to JSON, since JSON is much more constraining.* I don't want to do the busywork of turning JS to JSON, though I suppose there are tools for that, but if I'm going to need to use a tool to transform my data, then maybe I should use a friendlier format like TOML or YAML or Markdown or what have you.

*And I've been increasingly convinced standard formats are not the panacea we ever-naive geeks might hope it to be. I should have learned my lesson with XML. One data format to rule them all? Um, no. That's a recipe for a lot of sad ugliness. But we look at this format (SGML, XML, YAML, JSON, TOML, ...)! It's so nice it will solve all your problems! No... Enjoy the format for what it can do, but don't expect it to be useful everywhere. Never forget the story of the Tower of Babel...

For now I'll try to just put my structure in a `.js` file. As a module!

## className instead of class

What a pita, I have to change all my `class` to `className`... Why is that again?

Long story short: [because `class` is a JavaScript keyword](https://stackoverflow.com/questions/46989454/class-vs-classname-in-react-16)

Ugh. This makes my HTML less portable...

[Dan Abramov](https://github.com/facebook/react/issues/13525#issuecomment-417818906) is pretty interseting on this topic.
