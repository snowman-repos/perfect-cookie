<div class="mdc-layout-grid u-layout--centered o-ingredients-container">

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
              <td class="mdc-data-table__cell o-checkbox-column">
                <FormField>
                  <Checkbox bind:checked={ingredient.checked} on:change={updateRecipe} />
                  <span class="u-visually-hidden" slot="label">Do I have: {ingredient.name}?</span>
                </FormField>
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>

</div>

<style>
  .o-checkbox-column {
    display: none;
  }
  .o-ingredients-container {
    max-width: 100%;
  }
  .mdc-data-table__cell {
    padding-right: 8px;
    padding-left: 8px;
  }
  @media (min-width: 600px) {
    .o-checkbox-column {
      display: table-cell;
    }
  }
  @media (min-width: 960px) {
    .mdc-data-table__cell {
      padding-right: 16px;
      padding-left: 16px;
    }
  }
</style>

<script>
  import '@smui/data-table/bare.css'
  import Checkbox from '@smui/checkbox'
  import FormField from '@smui/form-field/bare.js'
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
