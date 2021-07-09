<script lang="ts">
  import type { NormalizedTextBlock } from 'pote-parse';
  import TextSpans from './TextSpans.svelte';
  import { isTextBlockType, textBlockComponents } from './serializers';
  import type { TextBlockType } from './serializers';
  import type {
    CustomSpanComponents,
    StandardComponentOverrides,
  } from './common';

  export let components: StandardComponentOverrides = undefined;
  export let customSpanComponents: CustomSpanComponents = {};
  export let block: NormalizedTextBlock;

  const blockType: TextBlockType = isTextBlockType(block.style)
    ? block.style
    : 'normal';

  const component = components?.[blockType] ?? textBlockComponents[blockType];
</script>

<svelte:component this={component} {block}>
  <TextSpans {block} {components} {customSpanComponents} />
</svelte:component>
