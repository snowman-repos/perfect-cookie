<script>
  import { properties } from '../store.js';
  import Slider from "@smui/slider/bare.js";
  import "@smui/slider/bare.css";
  import "@material/layout-grid/dist/mdc.layout-grid.css";

  let property_values;
  export let from;
  export let to;
  export let property;

  properties.subscribe((properties) => {
    property_values = properties
  })

  function update() {
    properties.set({...property_values});
  }
</script>

<style>
  .grid {
    align-items: center;
  }
  .first-column {
    text-align: right;
  }
</style>

<div class="mdc-layout-grid">
  <div class="grid mdc-layout-grid__inner">
    <div class="first-column mdc-layout-grid__cell mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
      <span>{from}</span>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-8-desktop">
      <Slider bind:value={property_values[property]} min={0} max={100} step={20} on:click={update} />
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-1-tablet mdc-layout-grid__cell--span-2-desktop">
      <span>{to}</span>
    </div>
  </div>
</div>
