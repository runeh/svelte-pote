<script context="module">
  // disable SSR so we don't try to invoke browser DOM code on the server
  export const ssr = false;
</script>

<script lang="ts">
  import marked from 'marked';
  import { htmlToBlocks } from '@sanity/block-tools';
  import { schema } from './_sanity-stuff';
  import PortableText from '$lib/PortableText.svelte';
  import { parse, normalize } from 'pote-parse';

  const blockContentType = schema
    .get('blogPost')
    .fields.find((field: any) => field.name === 'body').type;

  let mode: 'html' | 'markdown' = 'html';

  let value = '';

  $: html = mode === 'html' ? value : marked(value);
  $: blocks = htmlToBlocks(html, blockContentType);
  $: parsed = parse(blocks);
  $: normalized = normalize(parsed);
</script>

<label>
  <input type="radio" bind:group={mode} name="mode" value="html" />
  HTML
</label>

<label>
  <input type="radio" bind:group={mode} name="mode" value="markdown" />
  Markdown
</label>

mode: {mode}

<textarea bind:value />
<textarea>{normalized} </textarea>

<hr />

<PortableText blocks={normalized} />
