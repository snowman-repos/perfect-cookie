<main class="mdc-typography">
  <slot />
</main>
<footer>
  <div class="mdc-layout-grid u-centered">
   Made with 🍪by&nbsp;
   <a class="footer-link" href="https://www.linkedin.com/in/darrylsnow/">Darryl Snow</a>
  </div>
</footer>

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

  footer {
    background: var(--darryl-theme-background--dark);
    color: var(--mdc-theme-text-secondary-on-dark);
    font-size: 0.8rem;
  }

  .footer-link {
    border-bottom: 1px solid transparent;
    text-decoration: none;
    transition: 0.3s border-bottom ease-in-out, 0.3s color ease-in-out;
  }

  .footer-link:active,
  .footer-link:focus,
  .footer-link:hover {
    border-bottom: 1px solid var(--mdc-theme-text-primary-on-dark);
    color: var(--mdc-theme-text-primary-on-dark);
  }
</style>
