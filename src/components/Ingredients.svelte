<div class="mdc-data-table">
  <table class="mdc-data-table__table " aria-label="Ingredients">
    <tbody class="mdc-data-table__content ">
      {#each ingredientsList as ingredient}
        {#if ingredient.amount !== 0}
          <tr class=" mdc-data-table__row" aria-selected="false">
            <td class="mdc-data-table__cell">{Math.round(ingredient.amount * number)} {ingredient.unit}</td>
            <td class="mdc-data-table__cell">{ingredient.name}</td>
            <td class="mdc-data-table__cell">
              <Checkbox checked={ingredient.checked} />
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

  recipe.subscribe(({ingredients, numberOfCookies}) => {
    ingredientsList = ingredients
    number = numberOfCookies
  })
</script>
