<script>
  import { properties } from '../store.js'
  import Slider from '../components/Slider.svelte'
  import '../theme/_smui-theme.scss'

  let property_values

  properties.subscribe((properties) => {
    property_values = properties
  })
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<section class="hero">
  <h1 class="title mdc-typography--headline1">The Perfect Cookie</h1>
</section>

<!-- <Button>button</Button> -->

<div class="controls">
  <Slider from="Smooth" to="Craggy" property="cragginess" />
  <Slider from="Soft" to="Crispy" property="crispiness" />
  <Slider from="Light" to="Dark" property="darkness" />
  <Slider from="Fluffy" to="Dense" property="density" />
  <Slider from="Thin" to="Thick" property="thickness" />
  <Slider from="Crisp Edges" to="Uniform Texture" property="uniformity" />
</div>

<p>cragginess: {property_values.cragginess}</p>
<p>crispiness: {property_values.crispiness}</p>
<p>darkness: {property_values.darkness}</p>
<p>density: {property_values.density}</p>
<p>thickness: {property_values.thickness}</p>
<p>uniformity: {property_values.uniformity}</p>

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
</style>
