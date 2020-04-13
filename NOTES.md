# Implementation Notes

So I tried to just add in React...

Wasn't so easy for what I wanted.

Which is basically a single page web app that reuses the same layout for every page.

Basically a song is a score, a title, an author, and a few other things.

But it seems I need full-blown React to do what I want...

So I did:

```bash
npx create-react-app uke
cd uke
npm start # jsut to check it works
cp -pr package* public src .gitignore ../uketabs
mv node_modules/ ../uketabs/
cd ../uketabs
npm start # it still works
```

## JSON or js?

My data needs to be in a Javascript array of objects (or hashes? what's the JS equivalent? Maps?).

JSON is a nice standard format. But it's a pain to copy from JS to JSON, since JSON is much more constraining. I don't want to do the busywork of turning JS to JSON, though I suppose there are tools for that, but if I'm going to need to use a tool to transform my data, then maybe I should use a friendlier format like TOML or YAML or Markdown or what have you.

For now I'll try to just put my structure in a `.js` file. As a module!

## className instead of class

What a pita, I have to change all my `class` to `className`... Why is that again?
