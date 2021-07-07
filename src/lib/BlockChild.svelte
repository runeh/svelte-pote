<script lang="ts">
  import type { NormalizedTextSpan } from 'pote-parse';
  import { guessSpanType } from '$lib/util';
  import { markComponents } from './serializers';

  export let child: NormalizedTextSpan;

  const spanType = guessSpanType(child);
  const component = spanType ? markComponents[spanType] : undefined;
</script>

{#if component}
  <svelte:component this={component} span={child} />
{:else}
  {child.text}
{/if}
