<script lang="ts">
  import { PortableText } from '$lib/index';
  import exampleBlocks from '../_example.json';
</script>

<h2>Standard rendering example</h2>

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

<PortableText blocks={exampleBlocks} />
