<script lang="ts">
  import TextSpan from './TextSpan.svelte';
  import type { NormalizedTextBlock } from 'pote-parse';
  import type {
    CustomSpanComponents,
    StandardComponentOverrides,
  } from './common';

  export let components: StandardComponentOverrides = {};
  export let customSpanComponents: CustomSpanComponents = {};
  export let block: NormalizedTextBlock;
</script>

{#each block.spans as child}
  <TextSpan {child} {components} {customSpanComponents} />
{/each}
