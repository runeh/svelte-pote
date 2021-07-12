<script lang="ts">
  import type { NormalizedTextSpan } from 'pote-parse';
  import { getFirstMark } from '$lib/util';
  import { isMarkType, markComponents } from './serializers';
  import type {
    CustomSpanComponents,
    StandardComponentOverrides,
  } from './common';

  export let child: NormalizedTextSpan;
  export let components: StandardComponentOverrides = {};
  export let customSpanComponents: CustomSpanComponents = {};

  $: mark = getFirstMark(child);

  $: component = customSpanComponents[mark]
    ? customSpanComponents[mark]
    : isMarkType(mark)
    ? components[mark] ?? markComponents[mark]
    : undefined;

  // fixme: deal with non standard marks here
</script>

{#if component}
  <svelte:component this={component} span={child}>{child.text}</svelte:component
  >
{:else}
  {child.text}
{/if}
