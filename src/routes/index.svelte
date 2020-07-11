<svelte:head>
  <title>The Cookie Website</title>
</svelte:head>

<section class="hero">
  <h1 class="title u-centered mdc-typography--headline2">The Cookie Website</h1>
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


<footer />

<script>
  import { setContext } from 'svelte'
  import { properties } from '../store.js'
  import Feedback from '../components/Feedback.svelte'
  import Ingredients from '../components/Ingredients.svelte'
  import Method from '../components/Method.svelte'
  import Slider from '../components/Slider.svelte'
  import YieldController from '../components/YieldController.svelte'
  import '../theme/_smui-theme.scss'
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
    background-color: white;
    background-image: url("/cookies.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--mdc-theme-surface);
    position: relative;
    padding: 2rem;
    position: relative;
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
