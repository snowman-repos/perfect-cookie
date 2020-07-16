<svelte:head>
  <title>The Cookie Website</title>
</svelte:head>

<section class="hero">
  <h1 class="title u-centered mdc-typography--headline2">The Cookie Website</h1>
  <Button class="about-button" data-testid="navigation" on:click={() => { goto('about'); }} variant="outlined">
    <Label>About</Label>
  </Button>
</section>

<section class="controls mdc-layout-grid">
  <h2 class="mdc-typography--headline4 u-centered">How do you like your cookies?</h2>
  {#each $properties as { from, name, to }}
    <Slider from="{from}" to="{to}" property="{name}" />
  {/each}
</section>

<section class="mdc-layout-grid u-padding-bottom--zero">
  <h2 class="mdc-typography--headline3 u-centered">Ingredients</h2>
  <YieldController />
  <div class="ingredients">
    <Ingredients />
  </div>
</section>

<section class="mdc-layout-grid u-padding-bottom--zero">
  <h2 class="mdc-typography--headline3 u-centered">Method</h2>
  <Method />
</section>

<section class="mdc-layout-grid u-padding-bottom--zero">
  <Feedback />
</section>

<section class="mdc-layout-grid u-padding-bottom--zero">
  <Donate />
</section>


<footer />

<script>
  import { setContext } from 'svelte'
  import { properties } from '../store.js'
  import Button, { Label } from '@smui/button/bare.js'
  import '@smui/button/bare.css'
  import Donate from '../components/Donate.svelte'
  import Feedback from '../components/Feedback.svelte'
  import { goto } from '@sapper/app'
  import Ingredients from '../components/Ingredients.svelte'
  import Method from '../components/Method.svelte'
  import Slider from '../components/Slider.svelte'
  import YieldController from '../components/YieldController.svelte'
  import { addRichData, getUpdateRecipeFunction, setRecipe } from '../utilities.js'

  const updateRecipe = getUpdateRecipeFunction()

  // ensure the update recipe function can be shared throughout the app
  setContext('updateRecipe', updateRecipe)

  // use the same recipe as last time if it exists in local storage
  if (typeof localStorage !== 'undefined') {
    try {
      if (localStorage.getItem('recipe') === null) {
        updateRecipe()
      } else {
        setRecipe()
      }
    } catch (e) {
      //
    }
  } else updateRecipe()

  // add rich data to the page
  if(process.browser === true)
    addRichData()

</script>

<style>
  .hero {
    align-items: center;
    background-color: white;
    background-image: url("/cookies.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--mdc-theme-surface);
    display: flex;
    justify-content: center;
    min-height: 25vh;
    position: relative;
    padding: calc(2rem + 48px) 2rem 2rem 2rem;
    position: relative;
  }

  * :global(.about-button:not(:disabled)) {
    background-color: rgba(0,0,0,0.25);
    border-radius: 999px;
    position: absolute;
    right: 1em;
    top: calc(1rem + 48px);
  }

  @media (min-width: 960px) {

    .hero {
      padding: 2rem;
    }

    * :global(.about-button:not(:disabled)) {
      top: 1rem;
    }

  }

  .hero::before {
    background: rgba(0,0,0,.4);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .title {
    margin-bottom: 0;
    position: relative;
  }

  .controls {
    background: var(--darryl-theme-background);
  }

  .ingredients {
    display: flex;
    justify-content: center;
  }
</style>
