<script lang="ts">
  import type { NormalizedTextBlock } from 'pote-parse';
  import BlockChildren from './TextSpans.svelte';
  import { isTextBlockType, textBlockComponents } from './serializers';
  import type { TextBlockType } from './serializers';

  export let block: NormalizedTextBlock;

  const blockType: TextBlockType = isTextBlockType(block.style)
    ? block.style
    : 'div';

  const component = textBlockComponents[blockType];
</script>

<svelte:component this={component} {block}>
  <BlockChildren {block} />
</svelte:component>
