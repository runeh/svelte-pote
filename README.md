# svelte-pote

Components for rendering [Portable Text](https://www.portabletext.org) rendering
for Svelte. Portable Text is the serialization spec used primarily by the
[Sanity CMS](https://www.sanity.io).

## Quick start guide

Install with:

```shell
npm install svelte-pote

# or

yarn add svelte-pote
```

Use it by passing an array of blocks to the components:

```svelte
<script>
  import { PortableText } from 'svelte-pote';
  import somePortableText from './example-prose';
</script>

<PortableText blocks={somePortableText} />
```

This will render the portable text using default formatting.

It's possible to override the components used for rendering:

in `h1.svelte`

```svelte
<h1><slot /></h1>

<style>
  h1 {
    color: papayawhip;
    font-size: 32px;
  }
</style>
```

In the code using PortableText:

```svelte
<script>
  import Heading1 from './h1.svelte';
  import { PortableText } from 'svelte-pote';
  import somePortableText from './example-prose';
</script>

<PortableText blocks={somePortableText} components={{ h1: Heading1 }} />
```

This renders the portable text using the h1 svelte component instead of the
default component. It's possible to override the following standard components:
`blockquote`, `code`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `li`, `link`, `ol`,
`ul`.

In addition it's possible to add components for non-standard blocks and spans.
This is done by using the `customSpanComponents` and `customBlockComponents`
props.

The custom components can use a `<slot/>` to render children. Otherwise, it can
render whatever it likes. It gets it's block/parent passed in as props.

See the code in
[custom-rendering/index.svelte](./src/routes/custom-rendering/index.svelte) for
examples.

## Developing

To develop and experiment, run `yarn dev`. This starts a web server locally that
hosts some pages using the component. Feel free to add more routes for testing
and examples.

To type check the code, run `yarn run check`. Optionally with the `--watch`
flag.

To package the library, run `yarn run package`. This emits the library to the
`package` folder.

## Caveats

- There is not handling yet of custom blocks that is used by sanity. In
  particular, there is no built in `Image` block handler yet.
- Still in beta. Prone to change before publishing 1.0.

## todo

Stuff that needs to be done / figured out.

- Maybe add some snapshot testing from the routes?
- Probably buggy if there are a list that immediately has a nested list. Is that
  even allowed?
- Probably buggy if two nested lists after each other. Is that allowed? Don't
  think it is, can't be represented by pote afaict.
- Figure out how to do spans with multiple marks. Will it work for default
  formatters?
- Don't use "serializer" as the name?
- Example of consuming images from sanity
- Support passing normalized blocks directly?
- Add some kind of error handling / options
