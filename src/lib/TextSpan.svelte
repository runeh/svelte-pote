<script lang="ts">
  import type { NormalizedTextSpan } from 'pote-parse';
  import { getFirstMark } from '$lib/util';
  import { isMarkType, markComponents } from './serializers';
  import type { StandardComponentOverrides } from './common';

  export let child: NormalizedTextSpan;
  export let components: StandardComponentOverrides = undefined;

  const mark = getFirstMark(child);

  const component = isMarkType(mark)
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
