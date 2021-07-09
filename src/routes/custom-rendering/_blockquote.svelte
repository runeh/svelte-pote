<div class="pa4">
  <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
    <p class="f5 f4-m f3-l lh-copy measure mt0">
      <slot />
    </p>
  </blockquote>
</div>

<style>
  /*  Styling from tachyons:
      https://tachyons.io/components/quotes/left-border/index.html
  */

  .bl {
    border-left-style: solid;
    border-left-width: 1px;
  }

  .b--blue {
    border-color: #408bc9;
  }

  .bw2 {
    border-width: 0.25rem;
  }

  .athelas {
    font-family: athelas, georgia, serif;
  }

  .lh-copy {
    line-height: 1.5;
  }

  .black-90 {
    color: rgba(0, 0, 0, 0.9);
  }

  .pa4 {
    padding: 2rem;
  }

  .pl4 {
    padding-left: 2rem;
  }

  .ml0 {
    margin-left: 0;
  }

  .mt0 {
    margin-top: 0;
  }

  .f5 {
    font-size: 1rem;
  }

  .measure {
    max-width: 30em;
  }
</style>
