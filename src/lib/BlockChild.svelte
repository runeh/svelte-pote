<script lang="ts">
  import type { BlockChildT } from './common';

  export let child: BlockChildT;
</script>

<span>{child.text} ({child.marks})</span>
