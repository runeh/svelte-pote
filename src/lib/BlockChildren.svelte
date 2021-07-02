<script lang="ts">
  import BlockChild from './BlockChild.svelte';
  import type { StandardBlockT } from './common';

  export let block: StandardBlockT;
</script>

{#each block.children as child}
  <BlockChild {child} />
{/each}
