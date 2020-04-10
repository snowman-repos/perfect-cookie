<DataTable data-testid="method" table$aria-label="Ingredients">
  <Head>
    <Row>
      <Cell>Step</Cell>
      <Cell>Instructions</Cell>
    </Row>
  </Head>
  <Body>
    {#each steps as step, index}
      <Row>
        <Cell>{index}</Cell>
        <Cell>{step}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>

<script>
  import DataTable, { Body, Cell, Head, Row } from '@smui/data-table/bare.js'
  import '@smui/data-table/bare.css'
  import { recipe } from '../store.js'

  let steps = []

  recipe.subscribe(({ method }) => {
    steps = method
  })
</script>
