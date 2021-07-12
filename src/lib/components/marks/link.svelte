<script lang="ts">
  import type { NormalizedTextSpan } from 'pote-parse';
  export let span: NormalizedTextSpan;

  const linkMark = span.marks.find((e) => e.type === 'link');
  const rawHref = linkMark?.options.href;
  const href = typeof rawHref === 'string' ? rawHref : '#';
</script>

<a {href}>{span.text}</a>
