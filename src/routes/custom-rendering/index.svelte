<script lang="ts">
  import type {
    CustomBlockComponents,
    CustomSpanComponents,
    StandardComponentOverrides,
  } from '$lib/index';
  import Blink from './_blink.svelte';
  import Blockquote from './_blockquote.svelte';
  import Code from './_code.svelte';
  import Heading from './_heading.svelte';
  import Li from './_li.svelte';
  import Link from './_link.svelte';
  import Ol from './_ol.svelte';
  import { PortableText } from '$lib/index';
  import Rainbow from './_rainbow.svelte';
  import SignupForm from './_signup-form.svelte';
  import Ul from './_ul.svelte';
  import exampleBlocks from '../_example.json';

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
    li: Li,
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
  blocks={exampleBlocks}
  {components}
  {customSpanComponents}
  {customBlockComponents}
/>
