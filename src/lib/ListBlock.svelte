<script lang="ts">
  import type { NormalizedListBlock } from 'pote-parse';
  import BlockChildren from './TextSpans.svelte';
  import type {
    CustomSpanComponents,
    StandardComponentOverrides,
  } from './common';
  import { isTextBlock } from './common';
  import { OrderedList, UnOrderedList, ListItem } from './components';

  export let components: StandardComponentOverrides = {};
  export let customSpanComponents: CustomSpanComponents = {};
  export let block: NormalizedListBlock;

  $: UsedListItemComponent = components['li'] ?? ListItem;
  $: listType = block.type === 'number' ? 'ol' : 'ul';
  $: ListComponent =
    components[listType] ?? (listType === 'ol' ? OrderedList : UnOrderedList);
</script>

<svelte:component this={ListComponent} {block}>
  {#each block.children as child, i}
    {#if isTextBlock(child)}
      <svelte:component
        this={UsedListItemComponent}
        list={block}
        block={child}
        {customSpanComponents}
      >
        <BlockChildren block={child} {customSpanComponents} />

        {#if block.children[i + 1] && block.children[i + 1].kind === 'list'}
          <svelte:self
            block={block.children[i + 1]}
            {components}
            {customSpanComponents}
          />
        {/if}
      </svelte:component>
    {/if}
  {/each}
</svelte:component>
