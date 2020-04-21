<script>
  import { getContext } from 'svelte'
  import Slider from '@smui/slider/bare.js'
  import '@smui/slider/bare.css'
  import '@material/layout-grid/dist/mdc.layout-grid.css'
  import { recipe } from '../store.js'

  export let from
  export let to
  export let property

  export let updateRecipe = getContext('updateRecipe')

  function update() {
    updateRecipe(property)
  }
</script>

<style>
  .grid {
    align-items: center
  }

  .first-column {
    text-align: right
  }
</style>

<div class="mdc-layout-grid">
  <div class="grid mdc-layout-grid__inner">
    <div class="first-column mdc-layout-grid__cell mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
      <span>{from}</span>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-8-desktop">
      <Slider bind:value={$recipe.properties[property]} min={0} max={100} step={10} on:click={update} />
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
      <span>{to}</span>
    </div>
  </div>
</div>
