<script lang="ts">
  import type { NormalizedTextBlock } from 'pote-parse';
  import { getTagNameForBlock } from './common';
  import type { BlockHtmlTag } from './common';
  import BlockChildren from './BlockChildren.svelte';

  export let block: NormalizedTextBlock;

  const tagName: BlockHtmlTag = getTagNameForBlock(block);
</script>

{#if tagName === 'div'}
  <div><BlockChildren {block} /></div>
{:else if tagName === 'p'}
  <p><BlockChildren {block} /></p>
{:else if tagName === 'ol'}
  <ol><li><BlockChildren {block} /></li></ol>
{:else if tagName === 'ul'}
  <ul><li><BlockChildren {block} /></li></ul>
{:else if tagName === 'blockquote'}
  <blockquote><BlockChildren {block} /></blockquote>
{:else if tagName === 'h1'}
  <h1><BlockChildren {block} /></h1>
{:else if tagName === 'h2'}
  <h2><BlockChildren {block} /></h2>
{:else if tagName === 'h3'}
  <h3><BlockChildren {block} /></h3>
{:else if tagName === 'h4'}
  <h4><BlockChildren {block} /></h4>
{:else if tagName === 'h5'}
  <h5><BlockChildren {block} /></h5>
{:else if tagName === 'h6'}
  <h6><BlockChildren {block} /></h6>
{:else}
  <div><BlockChildren {block} /></div>
{/if}
