<DataTable table$aria-label="Ingredients">
  <Body>
    {#each ingredient_values as ingredient}
      {#if ingredient.amount !== 0}
        <Row>
          <Cell>{ingredient.amount} {ingredient.unit}</Cell>
          <Cell>{ingredient.name}</Cell>
        </Row>
      {/if}
    {/each}
  </Body>
</DataTable>

<script>
  import { ingredients } from '../store.js'
  import DataTable, { Body, Row, Cell } from '@smui/data-table/bare.js'
  import '@smui/data-table/bare.css'

  let ingredient_values = []

  ingredients.subscribe((ingredients) => {
    for (let [key, value] of Object.entries(ingredients)) {
      ingredient_values.push(value)
    }
  })
</script>
