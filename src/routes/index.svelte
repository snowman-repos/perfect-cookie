<svelte:head>
  <title>My Perfect Cookie</title>
</svelte:head>

<section class="hero">
  <h1 class="title u-centered mdc-typography--headline2">My Perfect Cookie</h1>

  <div class="mdc-layout-grid u-padding-bottom--zero">
    <div class="grid mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <p class="u-centered">Tired of online recipes not quite turning out right?</p>
        <ul>
          <li>Adjust the sliders to design your cookies just how you like them. You might find that changing one slider affects another - just keep tweeking them until it feels right.</li>
          <li>Scroll down to choose how many cookies you want to make. You'll get a customized list of ingredients and steps needed to make <strong>your perfect cookies</strong>.</li>
          <li>There are checkboxes alongside the ingredients for you to check them off as you go along.</li>
          <li>The numbers may seem quite precise - try to stick as close as you can to the recipe and <a href="mailto:darryl@darrylsnow.com" title="Email the creator">let me know how they turn out!</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="controls mdc-layout-grid">
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
    background: white;
    margin-top: 2rem;
    position: relative;
    padding: 2rem;
  }
  .title {
    margin-bottom: 0;
  }
  .controls {
    background: var(--darryl-theme-background);
  }
  .ingredients {
    display: flex;
    justify-content: center;
  }
</style>
