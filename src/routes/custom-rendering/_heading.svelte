<script lang="ts">
  import type { NormalizedTextBlock } from 'pote-parse';
  export let block: NormalizedTextBlock;

  const type = block.style;
</script>

{#if type === 'h1'}
  <h1><slot /></h1>
{:else if type === 'h2'}
  <h2><slot /></h2>
{:else if type === 'h3'}
  <h3><slot /></h3>
{:else if type === 'h4'}
  <h4><slot /></h4>
{:else if type === 'h5'}
  <h5><slot /></h5>
{:else if type === 'h6'}
  <h6><slot /></h6>
{:else}
  <h1>Unknown header! {block.style}</h1>
{/if}

<style>
  h1 {
    color: red;
  }
  h2 {
    color: blue;
  }
  h3 {
    color: green;
  }
  h4 {
    color: brown;
  }
  h5 {
    color: chartreuse;
  }
  h6 {
    color: gold;
  }
</style>
