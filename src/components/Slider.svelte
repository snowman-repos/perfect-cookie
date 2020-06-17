<div class="mdc-layout-grid">
  <div class="grid mdc-layout-grid__inner">
    <div class="first-column mdc-layout-grid__cell mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
      <span>{from}</span>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-8-desktop">
      <Slider bind:value={$recipe.properties[property]} min={0} max={100} step={10} on:MDCSlider:change={update} />
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
      <span>{to}</span>
    </div>
  </div>
</div>

<style>
  .grid {
    align-items: center
  }

  .first-column {
    text-align: right
  }
</style>

<script>
  import { getContext } from 'svelte'
  import Slider from '@smui/slider/bare.js'
  import '@smui/slider/bare.css'
  import { recipe } from '../store.js'
  import { debounce } from '../utilities.js'

  export let from
  export let to
  export let property

  export let updateRecipe = getContext('updateRecipe')

  function update() {
    debounce(updateRecipe(property), 1000)
  }
</script>
