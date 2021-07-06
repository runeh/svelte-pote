<script lang="ts">
  import BlockChild from './BlockChild.svelte';
  import type { NormalizedTextBlock } from 'pote-parse';

  export let block: NormalizedTextBlock;
</script>

{#each block.spans as child}
  <BlockChild {child} />
{/each}
