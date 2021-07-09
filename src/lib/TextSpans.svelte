<script lang="ts">
  import BlockChild from './TextSpan.svelte';
  import type { NormalizedTextBlock } from 'pote-parse';
  import type { StandardComponentOverrides } from './common';

  export let components: StandardComponentOverrides = undefined;
  export let block: NormalizedTextBlock;
</script>

{#each block.spans as child}
  <BlockChild {child} {components} />
{/each}
