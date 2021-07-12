# svelte-pote

Portable Text rendering for Svelte

## Developing

To develop and experiment, run `yarn dev`. This starts a web server locally that
hosts some pages using the component. Feel free to add more routes for testing
and examples.

## todo

- Maybe add some snapshot testing from the routes?
- Probably buggy if there are a list that immediately has a nested list. Is that
  even allowed?
- Probably buggy if two nested lists after each other. Is that allowed? Don't
  think it is, can't be represented by pote afaict.
- Figure out how to do spans with multiple marks. Will it work for default
  formatters?
- Don't use "serializer" as the name?
- Example of consuming images from sanity
