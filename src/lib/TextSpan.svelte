<script lang="ts">
  import type { NormalizedTextSpan } from 'pote-parse';
  import { getFirstMark } from '$lib/util';
  import { isMarkType, markComponents } from './serializers';
  import type {
    CustomSpanComponents,
    StandardComponentOverrides,
  } from './common';

  export let child: NormalizedTextSpan;
  export let components: StandardComponentOverrides = undefined;
  export let customSpanComponents: CustomSpanComponents = {};

  const mark = getFirstMark(child);

  let component = isMarkType(mark)
    ? components[mark] ?? markComponents[mark]
    : undefined;

  if (customSpanComponents[mark]) {
    component = customSpanComponents[mark];
  }

  // fixme: deal with non standard marks here
</script>

{#if component}
  <svelte:component this={component} span={child}>{child.text}</svelte:component
  >
{:else}
  {child.text}
{/if}
