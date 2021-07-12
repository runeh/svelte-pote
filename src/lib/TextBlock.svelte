<script lang="ts">
  import type { NormalizedTextBlock } from 'pote-parse';
  import TextSpans from './TextSpans.svelte';
  import { isTextBlockType, textBlockComponents } from './components';
  import type {
    CustomSpanComponents,
    StandardComponentOverrides,
  } from './common';

  export let components: StandardComponentOverrides = {};
  export let customSpanComponents: CustomSpanComponents = {};
  export let block: NormalizedTextBlock;

  $: blockType = isTextBlockType(block.style) ? block.style : 'normal';
  $: component = components?.[blockType] ?? textBlockComponents[blockType];
</script>

<svelte:component this={component} {block}>
  <TextSpans {block} {components} {customSpanComponents} />
</svelte:component>
