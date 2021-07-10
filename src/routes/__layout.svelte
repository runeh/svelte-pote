<!-- src/routes/__layout.svelte -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
  <h1>svelte-pote examples</h1>
</header>

<hr />

<main>
  <slot />
</main>

<style>
  header > h1 {
    margin: 0;
    font-size: large;
  }
</style>
