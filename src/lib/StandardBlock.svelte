<script lang="ts">
  import { getTagNameForBlock } from './common';
  import type { StandardBlock } from './common';
  export let block: StandardBlock;

  // let blockComponent: 'p' | 'div' | 'ul' | 'ol';

  const tagName: BlockHtmlTag = getTagNameForBlock(block);
</script>

{#if tagName === 'div'}
  <div>childs</div>
{:else if tagName === 'p'}
  <p />
{:else if tagName === 'ol'}
  <ol><li>asdf</li></ol>
{:else if tagName === 'ul'}
  <ul><li>asdf</li></ul>
{:else if tagName === 'ul'}
  <ul><li>asdf</li></ul>
{:else if tagName === 'blockquote'}
  <blockquote>asdf</blockquote>
{:else}
  <div>defaukt</div>
{/if}
