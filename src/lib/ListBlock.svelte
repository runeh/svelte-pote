<script lang="ts">
  import type { NormalizedListBlock } from 'pote-parse';
  import { isTextBlock } from './common';

  // function nextIsChild()

  export let block: NormalizedListBlock;

  // Nesting is wrong
</script>

<ol>
  {#each block.children as child, i}
    {#if isTextBlock(child)}
      <li>
        text block

        {#if block.children[i + 1] && block.children[i + 1].kind === 'list'}
          <svelte:self block={block.children[i + 1]} />
        {/if}
      </li>
    {/if}
  {/each}
</ol>
