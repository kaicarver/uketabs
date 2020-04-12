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
