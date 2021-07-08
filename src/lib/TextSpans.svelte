<script lang="ts">
  import BlockChild from './TextSpan.svelte';
  import type { NormalizedTextBlock } from 'pote-parse';

  export let block: NormalizedTextBlock;
</script>

{#each block.spans as child}
  <BlockChild {child} />
{/each}
