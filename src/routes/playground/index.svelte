<script context="module">
  // disable SSR so we don't try to invoke browser DOM code on the server
  export const ssr = false;
</script>

<script lang="ts">
  import marked from 'marked';
  import { htmlToBlocks } from '@sanity/block-tools';
  import { schema } from './_sanity-stuff';
  import { PortableText } from '$lib/index';
  import dedent from 'ts-dedent';

  const exampleMarkdown = dedent`
    # Playground!

    You can write stuff here as HTML or markdown, and see how it renders
    underneath.

    Choose between HTML and markdown with the radio boxes above.

    Markdown lets you use the following:

    - Ordered and numbered lists
    - **Emphasis** and _italics_
    - [Links](http://example.org)
    - Block quotes and paragraphs
    - Headings
    `;

  const blockContentType = schema
    .get('blogPost')
    .fields.find((field: any) => field.name === 'body').type;

  let mode: 'html' | 'markdown' = 'markdown';
  let value = exampleMarkdown;

  $: html = mode === 'html' ? value : marked(value);
  $: blocks = htmlToBlocks(html, blockContentType);
</script>

Input as:

<label>
  <input type="radio" bind:group={mode} name="mode" value="markdown" />
  Markdown
</label>

<label>
  <input type="radio" bind:group={mode} name="mode" value="html" />
  HTML
</label>

<textarea bind:value />

<hr />

<PortableText {blocks} />
