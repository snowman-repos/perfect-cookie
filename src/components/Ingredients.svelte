<div class="mdc-layout-grid u-layout--centered o-ingredients-container">

  <div class="mdc-data-table">
    <table class="mdc-data-table__table " aria-label="Ingredients">
      <tbody class="mdc-data-table__content ">
        {#each ingredientsList as ingredient}
          {#if ingredient.amount !== 0}
            <tr class=" mdc-data-table__row" aria-selected="false">
              {#if ingredient.unit !== 'tsp'}
                <td class="mdc-data-table__cell">{getIngredientAmount(ingredient)}</td>
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

<iframe title="advertisement" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=darrylsnow-20&marketplace=amazon&region=US&placement=B0885Q6S45&asins=B0885Q6S45&linkId=dacb96cf42f491ec2976514206ed22ca&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=028f8d&bg_color=ffffff"></iframe>

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
  import { convertAmountToAmerican } from '../utilities.js'

  let number
  let ingredientsList = []
  let currentRecipe

  recipe.subscribe((actualRecipe) => {
    currentRecipe = actualRecipe
    ingredientsList = actualRecipe.ingredients
    number = actualRecipe.numberOfCookies
  })

  const getIngredientAmount = (ingredient) => {
    if (currentRecipe.useStandardUnits) {
      return `${Math.round(ingredient.amount * number)} ${ingredient.unit}`
    } else {
      return convertAmountToAmerican(ingredient, number)
    }
  }

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
