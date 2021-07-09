<script lang="ts">
  import type {
    CustomSpanComponents,
    StandardComponentOverrides,
  } from '$lib/common';
  import { stuff } from '$lib/index';
  import PortableText from '$lib/PortableText.svelte';
  import Heading from './_heading.svelte';
  import Code from './_code.svelte';
  import Link from './_link.svelte';
  import Blockquote from './_blockquote.svelte';
  import Blink from './_blink.svelte';
  import Rainbow from './_rainbow.svelte';

  const components: StandardComponentOverrides = {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    h6: Heading,
    code: Code,
    link: Link,
    blockquote: Blockquote,
  };

  const customSpanComponents: CustomSpanComponents = {
    rainbow: Rainbow,
    blink: Blink,
  };
</script>

<h1>Custom rendering example</h1>

<p>blala</p>

<p>
  Note that this example app uses <code>water.css</code> to get some default tag
  styling. <code>parse-pote</code> does not apply styles at all by default.
</p>

<hr />

<PortableText blocks={stuff} {components} {customSpanComponents} />
