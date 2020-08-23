<svelte:head>
  <title>The Cookie Website</title>
</svelte:head>

<div class={recipeIsInitialized ? '' : 'overlay'}></div>

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

<section class="c-advertisement u-margin--top">
  <iframe title="advertisement" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=42&l=ur1&category=kitchen&banner=09RE3AASKRA6TA2H9K82&f=ifr&linkID=50347e3d3b44c35880a9e374d58ae15a&t=darrylsnow-20&tracking_id=darrylsnow-20" width="234" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
</section>

<section class="mdc-layout-grid u-padding-bottom--zero">
  <h2 class="mdc-typography--headline3 u-centered">Ingredients</h2>
  <YieldController />
  <UnitsSwitcher />
  <div class="ingredients">
    <Ingredients />
  </div>
</section>

<section class="c-advertisement">
  <iframe title="advertisement" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=kitchen&banner=1WAHFT779AHXYCKEXAG2&f=ifr&linkID=87541d7174cb07d08395feb5218dc04a&t=darrylsnow-20&tracking_id=darrylsnow-20" width="125" height="125" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
  <iframe title="advertisement" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=darrylsnow-20&marketplace=amazon&region=US&placement=B0885Q6S45&asins=B0885Q6S45&linkId=dacb96cf42f491ec2976514206ed22ca&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=028f8d&bg_color=ffffff"></iframe>
  <iframe title="advertisement" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=kitchen&banner=04AP3HD9S2FXVPKW4182&f=ifr&linkID=633d9eb593e3bbcfb5f82f3f61b072a8&t=darrylsnow-20&tracking_id=darrylsnow-20" width="125" height="125" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
</section>

<section class="mdc-layout-grid u-padding-bottom--zero">
  <h2 class="mdc-typography--headline3 u-centered">Method</h2>
  <Method />
</section>

<section class="mdc-layout-grid u-padding-bottom--zero">
  <Feedback />
</section>

<section class="mdc-layout-grid">
  <Donate />
</section>

<section class="c-advertisement u-margin--bottom">
  <div id="amzn-assoc-ad-991972e5-57a3-4c53-9844-b0ce0c1c29d8"></div>
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
  import UnitsSwitcher from '../components/UnitsSwitcher.svelte'
  import YieldController from '../components/YieldController.svelte'
  import {
    addRichData,
    getPropertiesFromCode,
    getUpdateRecipeFunction,
    propertiesAreValid,
    setRecipe
  } from '../utilities.js'
  import { stores } from '@sapper/app';
  const { page } = stores();

  const updateRecipe = getUpdateRecipeFunction()
  let recipeIsInitialized = false

  const initializeRecipe = async () => {
    let code = $page.query.c
    let localStorageRecipe
    if (typeof localStorage !== 'undefined') {
      localStorageRecipe = localStorage.getItem('recipe')
    }

    if (code != null) {
      let properties = await getPropertiesFromCode(code)
      if (propertiesAreValid(properties)) {
        setRecipe({ properties })
        return true
      }
    }

    if (localStorageRecipe) {
      setRecipe(localStorageRecipe)
      return true
    }

    updateRecipe()
    return true
  }

  recipeIsInitialized = initializeRecipe()

  // ensure the update recipe function can be shared throughout the app
  setContext('updateRecipe', updateRecipe)

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
    background-color: rgba(0,0,0,.25);
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

  .overlay {
    background-color: var(--mdc-theme-background);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
</style>
