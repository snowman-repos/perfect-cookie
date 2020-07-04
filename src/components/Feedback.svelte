<form data-netlify="true" name="feedback" netlify netlify-honeypot="bot-field" on:submit|preventDefault="{submitForm}">
  <input type="hidden" name="form-name" value="feedback" />
  <!-- hidden fields containing feedback and the last stored recipe -->
  <input bind:value={feedback} name="feedback" type="hidden">
  <input bind:value={positiveFeedback} name="positive" type="hidden">
  <input bind:value={negativeFeedback} name="negative" type="hidden">
  <input bind:value={whatWentWrong} name="what-went-wrong" type="hidden">
  <input bind:value={recipe} name="recipe" type="hidden">
  <!-- only show if local storage isn't empty -->
  {#if recipe}
    <div class="mdc-layout-grid u-padding-top--zero" data-testid="feedback">
      <div class="grid mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 u-centered">
          <Card padded>

            {#if feedbackSent}

              <h3 class="mdc-typography--headline5 u-centered" data-testid="thanks">Thanks!</h3>
              <p>Try baking another batch!</p>

            {:else}

              <h3 class="mdc-typography--headline5 u-centered">Did you try making these? Did they turn out perfect?</h3>

                <div class="u-margin--bottom">
                  <IconButton bind:pressed={positiveFeedback} data-testid="positive-button" on:click={() => { negativeFeedback = false; }} toggle>
                    <Icon class="material-icons u-pointer-events-none" style="color: var(--mdc-theme-text-secondary-on-background);">thumb_up</Icon>
                    <Icon class="material-icons u-pointer-events-none" on style="color: var(--mdc-theme-secondary);">thumb_up</Icon>
                  </IconButton>
                  <IconButton bind:pressed={negativeFeedback} data-testid="negative-button" on:click={(e) => { e.preventDefault(); positiveFeedback = false; }} toggle>
                    <Icon class="material-icons u-pointer-events-none" style="color: var(--mdc-theme-text-secondary-on-background);">thumb_down</Icon>
                    <Icon class="material-icons u-pointer-events-none" on style="color: var(--mdc-theme-error);">thumb_down</Icon>
                  </IconButton>
                </div>

                {#if negativeFeedback}
                  <div class="u-margin--bottom">
                    <Textfield bind:value={whatWentWrong} data-testid="what-went-wrong" fullwidth label="What was wrong with them?" lineRipple={false}  input$aria-controls="helper-text-fullwidth" input$aria-describedby="helper-text-fullwidth" textarea />
                    <HelperText id="helper-text-fullwidth">Please describe the color, mouthfeel, surface quality, texture, and thickness of the cookies that you made and why they weren't as you expected.</HelperText>
                  </div>
                  <div class="u-margin--bottom">
                    <Button data-testid="submit-button" type="submit" variant="unelevated">
                      <Label>Send Feedback</Label>
                    </Button>
                  </div>
                {/if}

            {/if}

          </Card>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
      </div>
    </div>
  {/if}
</form>

<script>
  import Button, { Label } from '@smui/button/bare.js';
  import '@smui/button/bare.css'
  import Card from '@smui/card/bare.js'
  import '@smui/card/bare.css'
  import HelperText from '@smui/textfield/helper-text/bare.js'
  import '@smui/textfield/helper-text/bare.css'
  import IconButton, { Icon } from '@smui/icon-button'
  import Textfield from '@smui/textfield/bare.js'
  import '@smui/textfield/bare.css'

  let recipe
  let feedback
  let negativeFeedback = false
  let positiveFeedback = false
  let whatWentWrong = ""
  let feedbackSent = false

  if (typeof localStorage !== 'undefined') {
    try {
      recipe = localStorage.getItem('recipe')
    } catch (e) {
      //
    }
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const submitForm = (e) => {
    e.preventDefault()

    feedback = positiveFeedback ? 'positive' : 'negative'

    // fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: encode({
    //       "form-name": "feedback",
    //       feedback,
    //       recipe
    //     })
    //   })
    //     .then(() => console.info('Feedback sent!'))
    //     .catch(error => console.error(error));

    negativeFeedback = false
    positiveFeedback = false
    feedbackSent = true
  }
</script>
