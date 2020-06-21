<main class="mdc-typography">
  <slot />

  <div class="mdc-layout-grid u-padding-top--zero">
    <div class="grid mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 u-centered">
        <Card padded>
          ⚠️
          <br>
          Room temperature, humidity, ingredients, equipment all have an impact - if your cookies don't come out perfect, try again.
        </Card>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
    </div>
  </div>
</main>

<footer>
  <div class="mdc-layout-grid u-centered">
   Made with 🍪by&nbsp;
   <a class="footer-link" href="https://darrylsnow.com">Darryl Snow</a>
  </div>
</footer>

<script>
  import Card from '@smui/card/bare.js'
  import '@smui/card/bare.css'
  import '@material/layout-grid/dist/mdc.layout-grid.min.css'
  import '@material/typography/dist/mdc.typography.min.css'
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
