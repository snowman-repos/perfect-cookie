<main class="mdc-typography">
  <slot />
</main>

<script>
  export let segment
</script>

<style>
  main {
    position: relative;
    background-color: var(--mdc-theme-background);
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
