<script lang="ts">
  import { isCustomBlock, isTextBlock } from './common';
  import type {
    CustomSpanComponents,
    CustomBlockComponents,
    StandardComponentOverrides,
  } from './common';
  import { parse, normalize } from 'pote-parse';
  import CustomBlock from './CustomBlock.svelte';
  import ListBlock from './ListBlock.svelte';
  import TextBlock from './TextBlock.svelte';

  export let components: StandardComponentOverrides = {};
  export let customSpanComponents: CustomSpanComponents = {};
  export let customBlockComponents: CustomBlockComponents = {};
  export let blocks: unknown[];

  $: normalizedBlocks = normalize(parse(blocks));
</script>

{#each normalizedBlocks as block}
  {#if isTextBlock(block)}
    <TextBlock {block} {components} {customSpanComponents} />
  {:else if isCustomBlock(block)}
    <CustomBlock {block} {customBlockComponents} />
  {:else}
    <ListBlock {block} {components} {customSpanComponents} />
  {/if}
{/each}
