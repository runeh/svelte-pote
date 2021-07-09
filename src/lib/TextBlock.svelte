<script lang="ts">
  import type { NormalizedTextBlock } from 'pote-parse';
  import BlockChildren from './TextSpans.svelte';
  import { isTextBlockType, textBlockComponents } from './serializers';
  import type { TextBlockType } from './serializers';
  import type { StandardComponentOverrides } from './common';

  export let components: StandardComponentOverrides = undefined;
  export let block: NormalizedTextBlock;

  const blockType: TextBlockType = isTextBlockType(block.style)
    ? block.style
    : 'normal';

  const component = components?.[blockType] ?? textBlockComponents[blockType];
</script>

<svelte:component this={component} {block}>
  <div>heisan {blockType} {components}</div>

  <BlockChildren {block} />
</svelte:component>
