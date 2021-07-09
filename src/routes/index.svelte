<script lang="ts">
  import { stuff } from '$lib/index';
  import PortableText from '$lib/PortableText.svelte';
  import MyH2 from './_customH2.svelte';

  const components = {
    h2: MyH2,
  };
</script>

<h1>Welcome to SvelteKit</h1>
<div>
  <PortableText blocks={stuff} {components} />
</div>
