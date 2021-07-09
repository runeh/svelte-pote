<script lang="ts">
  import type { StandardComponentOverrides } from '$lib/common';
  import { stuff } from '$lib/index';
  import PortableText from '$lib/PortableText.svelte';
  import Heading from './_heading.svelte';
  import Code from './_code.svelte';

  const components: StandardComponentOverrides = {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    h6: Heading,
    code: Code,
  };
</script>

<h1>Standard rendering example</h1>

<p>
  This page renders example data that includes all the standard components and
  some custom ones. The custom ones do not get any formatting in this example
  since they are not supported by standard components.
</p>

<p>
  Note that this example app uses <code>water.css</code> to get some default tag
  styling. <code>parse-pote</code> does not apply styles at all by default.
</p>

<hr />

<PortableText blocks={stuff} {components} />
