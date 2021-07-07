<script lang="ts">
  import { isCustomBlock, isTextBlock } from './common';
  import type { NormalizedPortableText } from 'pote-parse';
  import CustomBlock from './CustomBlock.svelte';
  import ListBlock from './ListBlock.svelte';
  import TextBlock from './TextBlock.svelte';
  export let blocks: NormalizedPortableText;
</script>

{#each blocks as block}
  {#if isTextBlock(block)}
    <TextBlock {block} />
  {:else if isCustomBlock(block)}
    <CustomBlock {block} />
  {:else}
    <ListBlock {block} />
  {/if}
{/each}
