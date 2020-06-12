<svelte:head>
  <title>My Perfect Cookie</title>
</svelte:head>

<section class="hero">
  <h1 class="title mdc-typography--headline1 u-centered">My Perfect Cookie</h1>
</section>

<section class="controls mdc-layout-grid">
  {#each $properties as { from, name, to }}
    <Slider from="{from}" to="{to}" property="{name}" />
  {/each}
</section>

<section class="mdc-layout-grid">
  <h2 class="mdc-typography--headline1 u-centered">Ingredients</h2>
  <YieldController />
  <div class="ingredients">
    <Ingredients />
  </div>
</section>

<section class="mdc-layout-grid u-padding-bottom--zero">
  <h2 class="mdc-typography--headline1 u-centered">Method</h2>
  <Method />
</section>

<footer />

<script>
  import { setContext } from 'svelte'
  import { properties } from '../store.js'
  import Ingredients from '../components/Ingredients.svelte'
  import Method from '../components/Method.svelte'
  import Slider from '../components/Slider.svelte'
  import YieldController from '../components/YieldController.svelte'
  import '../theme/_smui-theme.scss'
  import { getUpdateRecipeFunction } from '../utilities.js'

  const updateRecipe = getUpdateRecipeFunction()
  setContext('updateRecipe', updateRecipe)
  updateRecipe()

</script>

<style>
  .hero {
    background: white;
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
