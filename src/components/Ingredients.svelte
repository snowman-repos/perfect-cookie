<DataTable data-testid="ingredients" table$aria-label="Ingredients">
  <Head>
    <Row>
      <Cell>Quantity</Cell>
      <Cell>Ingredient</Cell>
    </Row>
  </Head>
  <Body>
    {#each ingredientsList as ingredient}
      {#if ingredient.amount !== 0}
        <Row>
          <Cell>{roundToTwo(ingredient.amount * number)} {ingredient.unit}</Cell>
          <Cell>{ingredient.name}</Cell>
        </Row>
      {/if}
    {/each}
  </Body>
</DataTable>

<script>
  import DataTable, { Body, Cell, Head, Row } from '@smui/data-table/bare.js'
  import '@smui/data-table/bare.css'
  import { recipe } from '../store.js'
  import { roundToTwo } from '../utilities.js'

  let number
  let ingredientsList = []

  recipe.subscribe(({ingredients, numberOfCookies}) => {
    ingredientsList = ingredients
    number = numberOfCookies
  })
</script>
