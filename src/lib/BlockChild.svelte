<script lang="ts">
  import type { NormalizedTextSpan } from 'pote-parse';

  export let child: NormalizedTextSpan;
</script>

<span
  >{child.text}
  <code>({JSON.stringify(child.marks)})</code></span
>
