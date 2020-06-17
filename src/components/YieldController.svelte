<div class="mdc-layout-grid u-layout--centered">

  <IconButton data-testid="decrement-button" on:click={decrement}>
    <Icon class="material-icons">remove</Icon>
  </IconButton>

  <div class="wrapper">
    <Textfield bind:value={number} data-testid="yield" label="Number of cookies" on:change={handleChange} type="text" pattern="[0-9]{1,2}" />
  </div>

  <IconButton data-testid="increment-button" on:click={increment}>
    <Icon class="material-icons">add</Icon>
  </IconButton>

</div>

<script>
  import IconButton, { Icon } from '@smui/icon-button'
  import Textfield from '@smui/textfield/bare.js'
  import '@smui/textfield/bare.css'
  import { recipe } from '../store.js'

  let number
  let currentRecipe
  let newRecipe

  recipe.subscribe((actualRecipe) => {
    currentRecipe = actualRecipe
    number = actualRecipe.numberOfCookies
  })

  function handleChange() {
    if(number < 1 && !isNaN(number)) number = 1
    if(number > 1000 && !isNaN(number)) number = 1000
    if(isNaN(number)) number = 25
    updateNumber()
  }
  function decrement() {
    if(number > 1 && !isNaN(number)) number -= 1
    updateNumber()
  }
  function increment() {
    if(number < 1000 && !isNaN(number)) number = Number(number) + 1
    updateNumber()
  }
  function updateNumber() {
    newRecipe = Object.assign(currentRecipe, {
      numberOfCookies: number
    })
    recipe.set(newRecipe)
    localStorage.setItem('recipe', JSON.stringify(newRecipe))
  }
</script>

<style>
  .wrapper {
    margin: 0 1em;
  }
</style>
