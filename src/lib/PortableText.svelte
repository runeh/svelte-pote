<script lang="ts">
  import { isCustomBlock, isTextBlock } from './common';
  import type { NormalizedParsedPortableText } from 'pote-parse';
  import StandardBlock from './StandardBlock.svelte';
  import CustomBlock from './CustomBlock.svelte';
  export let blocks: NormalizedParsedPortableText;
</script>

{#each blocks as block}
  {#if isTextBlock(block)}
    <StandardBlock {block} />
  {:else if isCustomBlock(block)}
    <CustomBlock {block} />
  {:else}
    <div>no list tag yet</div>
  {/if}
{/each}
