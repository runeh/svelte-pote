<script lang="ts">
  import { isStandardBlock } from './common';
  import type { StructuredText } from './common';
  import StandardBlock from './StandardBlock.svelte';
  import CustomBlock from './CustomBlock.svelte';
  export let blocks: StructuredText;
</script>

{#each blocks as block}
  {#if isStandardBlock(block)}
    <StandardBlock {block} />
  {:else}
    <CustomBlock {block} />
  {/if}
{/each}
