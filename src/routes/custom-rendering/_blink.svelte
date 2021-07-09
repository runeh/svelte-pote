<span><slot /></span>

<style>
  span {
    animation: blink 1s;
    animation-iteration-count: infinite;
    -webkit-animation: blink 1s;
    -webkit-animation-iteration-count: infinite;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    50.01% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
</style>
