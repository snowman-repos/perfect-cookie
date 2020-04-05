<svelte:head>
  <title>The Perfect Cookie</title>
</svelte:head>

<section class="hero">
  <h1 class="title mdc-typography--headline1 u-centered">The Perfect Cookie</h1>
</section>

<section class="controls">
  <Slider from="Smooth" to="Craggy" property="cragginess" />
  <Slider from="Soft" to="Crispy" property="crispiness" />
  <Slider from="Light" to="Dark" property="darkness" />
  <Slider from="Fluffy" to="Dense" property="density" />
  <Slider from="Thin" to="Thick" property="thickness" />
  <Slider from="Crisp Edges" to="Uniform Texture" property="uniformity" />
</section>

<section>
  <h2 class="mdc-typography--headline1 u-centered">Ingredients</h2>
</section>

<section>
  <h2 class="mdc-typography--headline1 u-centered">Method</h2>
</section>

<footer />

<script>
  import Slider from '../components/Slider.svelte'
  import '../theme/_smui-theme.scss'
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
</style>
