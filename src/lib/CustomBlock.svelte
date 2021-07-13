<script lang="ts">
  import type { NormalizedCustomBlock } from 'pote-parse';
  import type { CustomBlockComponents } from './common';

  export let block: NormalizedCustomBlock;
  export let customBlockComponents: CustomBlockComponents = {};

  $: CustomBlock = customBlockComponents[block.type];
</script>

{#if CustomBlock}
  <svelte:component this={CustomBlock} {block} />
{:else}
  <div>Unknown custom block: <code>{block.type}</code></div>
{/if}
