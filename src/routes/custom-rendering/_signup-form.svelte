<script lang="ts">
  import type { NormalizedCustomBlock } from 'pote-parse';
  import { invariant } from 'ts-invariant';

  export let block: NormalizedCustomBlock;

  const href = block.fields.href ?? '#';
  const title = block.fields.title ?? 'default title';
  invariant(typeof href === 'string');
</script>

<div class="container">
  {title}
  <form action={href} method="POST">
    <input id="email" name="email" type="text" />
    <button>submit</button>
  </form>
</div>

<style>
  #email {
    display: inline-block;
  }

  .container {
    padding: 2em;
    border: solid thin gray;
  }
</style>
