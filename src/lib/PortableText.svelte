<script lang="ts">
  import type { StructuredText } from './common';
  import Block from './Block.svelte';
  export let blocks: StructuredText;
</script>

<div>blocks! {blocks.length}</div>

{#each blocks as block}
  <Block {block} />
{/each}
