<script lang="ts">
  import type { StructuredTextBlock } from './common';
  import { isStandardBlock } from './common';
  import CustomBlock from './CustomBlock.svelte';
  import StandardBlock from './StandardBlock.svelte';
  export let block: StructuredTextBlock;
</script>

{#if isStandardBlock(block)}
  <StandardBlock {block} />
{:else}
  <CustomBlock />
{/if}
