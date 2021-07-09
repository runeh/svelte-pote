<script lang="ts">
  import type { NormalizedListBlock } from 'pote-parse';
  import BlockChildren from './TextSpans.svelte';
  import type {
    CustomSpanComponents,
    StandardComponentOverrides,
  } from './common';
  import { isTextBlock } from './common';
  import {
    OrderedList,
    UnOrderedList,
    ListItem,
    ListItemComponent,
  } from './serializers';

  export let components: StandardComponentOverrides = {};
  export let customSpanComponents: CustomSpanComponents = {};
  export let block: NormalizedListBlock;

  const UsedListItemComponent: typeof ListItemComponent =
    components['li'] ?? ListItem;

  const listType = block.type === 'number' ? 'ol' : 'ul';
  const ListComponent =
    components[listType] ?? (listType === 'ol' ? OrderedList : UnOrderedList);
</script>

<svelte:component this={ListComponent} {block}>
  {#each block.children as child, i}
    {#if isTextBlock(child)}
      <UsedListItemComponent list={block}>
        <BlockChildren block={child} {customSpanComponents} />

        {#if block.children[i + 1] && block.children[i + 1].kind === 'list'}
          <svelte:self
            block={block.children[i + 1]}
            {components}
            {customSpanComponents}
          />
        {/if}
      </UsedListItemComponent>
    {/if}
  {/each}
</svelte:component>
