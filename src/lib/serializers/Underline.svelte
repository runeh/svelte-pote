<script lang="ts">
  import type { NormalizedTextSpan } from 'pote-parse';
  export let span: NormalizedTextSpan;
</script>

<underline>{span.text}</underline>
