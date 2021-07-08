<script lang="ts">
  import type { NormalizedListBlock } from 'pote-parse';
  import BlockChildren from './TextSpans.svelte';
  import { isTextBlock } from './common';
  import { OrderedList, UnOrderedList, ListItem } from './serializers';

  export let block: NormalizedListBlock;

  const listType = block.type === 'number' ? OrderedList : UnOrderedList;
</script>

<svelte:component this={listType} {block}>
  {#each block.children as child, i}
    {#if isTextBlock(child)}
      <ListItem list={block}>
        <BlockChildren block={child} />

        {#if block.children[i + 1] && block.children[i + 1].kind === 'list'}
          <svelte:self block={block.children[i + 1]} />
        {/if}
      </ListItem>
    {/if}
  {/each}
</svelte:component>
