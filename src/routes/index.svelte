<script lang="ts">
  import { stuff } from '$lib/index';
  import PortableText from '$lib/PortableText.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<div>
  <PortableText blocks={stuff} />
</div>
