<DataTable table$aria-label="Ingredients">
  <Head>
    <Row>
      <Cell>Quantity</Cell>
      <Cell>Ingredient</Cell>
    </Row>
  </Head>
  <Body>
    {#each ingredient_values as ingredient}
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
  import { numberOfCookies } from '../store.js'
  import { ingredients } from '../store.js'
  import { roundToTwo } from '../utilities.js'

  let number

  let ingredient_values = []

  ingredients.subscribe((ingredients) => {
    for (let [key, value] of Object.entries(ingredients)) {
      ingredient_values.push(value)
    }
  })

  numberOfCookies.subscribe((value) => {
    number = value
  })
</script>
