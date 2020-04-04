<script>
  export let segment;
</script>

<main class="mdc-typography">
  <slot />
</main>

<style>
  main {
    position: relative;
    background-color: var(--mdc-theme-background);
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
