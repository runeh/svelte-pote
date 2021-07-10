<script lang="ts">
  import type {
    CustomBlockComponents,
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
  import Ol from './_ol.svelte';
  import Ul from './_ul.svelte';
  import SignupForm from './_signup-form.svelte';

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
    ol: Ol,
    ul: Ul,
  };

  const customSpanComponents: CustomSpanComponents = {
    rainbow: Rainbow,
    blink: Blink,
  };

  const customBlockComponents: CustomBlockComponents = {
    signup: SignupForm,
  };
</script>

<h2>Custom rendering example</h2>

<p>Example of customizing all the components for rendering.</p>

<hr />

<PortableText
  blocks={stuff}
  {components}
  {customSpanComponents}
  {customBlockComponents}
/>
