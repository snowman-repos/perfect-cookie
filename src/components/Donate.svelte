<div class="mdc-layout-grid u-padding-top--zero" data-testid="feedback">
  <div class="grid mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 u-centered">
      {#if donated}
        <p data-testid="thank-you-message">Thanks for the donation!</p>
      {:else if donating}
        <LinearProgress data-testid="loader" indeterminate closed={false} />
      {:else}
        <Button data-testid="donate-button" on:click={donate} variant="unelevated">
          <Label>Donate $5 for a coffee to go with my cookies</Label>
        </Button>
      {/if}
    </div>
  </div>
</div>

<script>
  import Button, { Label } from '@smui/button/bare.js'
  import '@smui/button/bare.css'
  import LinearProgress from '@smui/linear-progress/bare.js'
  import '@smui/linear-progress/bare.css'
  import { loadStripe } from '@stripe/stripe-js'

  let donating = false
  let donated = false
  if (typeof window !== 'undefined') {
    donated = document.referrer.indexOf("checkout.stripe.com") !== -1
  }

  async function donate() {
    donating = true

    // pk_live_51H3yG1G5CVuXPf5nDFHMS2xXZTKH8dF0gRTcYNSwnsvWQUgs6qgbuWF4WELehvmFNfJBAkZJPaKsuwy6dggbaPUS00ETkYcySr
    // pk_test_51H3yG1G5CVuXPf5nTr7292dZTK3XPcdLpwgjmAEm7ojIoHbNCAKZgO6jVGf67zqbctuosTloWW06ecNue4OhIBj500uMuGm7nV
    const stripe = await loadStripe('pk_live_51H3yG1G5CVuXPf5nDFHMS2xXZTKH8dF0gRTcYNSwnsvWQUgs6qgbuWF4WELehvmFNfJBAkZJPaKsuwy6dggbaPUS00ETkYcySr')

    // price_1H45W3G5CVuXPf5nx5yfRpcV
    // price_1H45vfG5CVuXPf5nWQJLbsCO
    stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1H45W3G5CVuXPf5nx5yfRpcV', quantity: 1 }],
      mode: 'payment',
      successUrl: `${window.location.origin}/?donated=true`,
      cancelUrl: window.location.origin,
    }).then(function (result) {
      if (result.error) {
        console.error(result.error.message);
        donating = false
      }
    });

  }
</script>
