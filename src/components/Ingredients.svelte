<div class="mdc-data-table">
  <table class="mdc-data-table__table " aria-label="Ingredients">
    <tbody class="mdc-data-table__content ">
      {#each ingredientsList as ingredient}
        {#if ingredient.amount !== 0}
          <tr class=" mdc-data-table__row" aria-selected="false">
            {#if ingredient.unit !== 'tsp'}
              <td class="mdc-data-table__cell">{Math.round(ingredient.amount * number)} {ingredient.unit}</td>
            {:else}
              <td class="mdc-data-table__cell">{parseFloat(ingredient.amount * number).toPrecision(2)} {ingredient.unit}</td>
            {/if}
            <td class="mdc-data-table__cell">{ingredient.name}</td>
            <td class="mdc-data-table__cell">
              <Checkbox bind:checked={ingredient.checked} on:change={updateRecipe} />
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>

<script>
  import '@smui/data-table/bare.css'
  import Checkbox from '@smui/checkbox'
  import { recipe } from '../store.js'

  let number
  let ingredientsList = []
  let currentRecipe

  recipe.subscribe((actualRecipe) => {
    currentRecipe = actualRecipe
    ingredientsList = actualRecipe.ingredients
    number = actualRecipe.numberOfCookies
  })

  const updateRecipe = () => {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('recipe', JSON.stringify(currentRecipe))
      } catch (e) {
        //
      }
    }
  }
</script>
