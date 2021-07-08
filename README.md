# create-svelte

## todo

- snapshot testing from the routes?
- probably buggy if there are a list that immediately has a nested list. Is that
  even allowed?
- Probably buggy if two nested lists after each other. Is that allowed? Don't
  think it is, can't be represented by pote afaict.
- Figure out how to do multiple marks. Will it work for default formatters?
- Don't use "serializer" as the name?
- Skip mixed case names in files
- Map components to PoTe types, not html.

## Developing

Once you've created a project and installed dependencies with `npm install` (or
`pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
