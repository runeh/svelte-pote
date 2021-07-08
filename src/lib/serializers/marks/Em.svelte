<script lang="ts">
  import type { NormalizedTextSpan } from 'pote-parse';
  export let span: NormalizedTextSpan;
</script>

<em>{span.text}</em>
