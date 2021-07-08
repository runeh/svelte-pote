<script lang="ts">
  import { isCustomBlock, isTextBlock } from './common';
  import type { ComponentOverrides } from './common';
  import type { NormalizedPortableText } from 'pote-parse';
  import CustomBlock from './CustomBlock.svelte';
  import ListBlock from './ListBlock.svelte';
  import TextBlock from './TextBlock.svelte';

  export let components: ComponentOverrides = undefined;

  export let blocks: NormalizedPortableText;
</script>

<div>top level {components}</div>

{#each blocks as block}
  {#if isTextBlock(block)}
    <TextBlock {block} {components} />
  {:else if isCustomBlock(block)}
    <CustomBlock {block} />
  {:else}
    <ListBlock {block} />
  {/if}
{/each}
