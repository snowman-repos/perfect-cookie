<script>
  import { recipe } from '../store.js'
  import Slider from "@smui/slider/bare.js"
  import "@smui/slider/bare.css"
  import "@material/layout-grid/dist/mdc.layout-grid.css"

  let propertyValues
  export let from
  export let to
  export let property = 0

  recipe.subscribe(({ properties }) => {
    propertyValues = properties
  })

  function update() {
    recipe.set(Object.assign(recipe), {
      properties: propertyValues
    })
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
      <Slider bind:value={propertyValues[property]} min={0} max={100} step={10} on:click={update} />
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
      <span>{to}</span>
    </div>
  </div>
</div>
