import { render, cleanup } from '@testing-library/svelte'
import Ingredients from '../src/components/Ingredients.svelte'
import { ingredients } from '../src/store.js'

let ingredient_values

ingredients.subscribe((ingredients) => {
  ingredient_values = ingredients
})

describe('recipe component', () => {
  beforeEach(() => {
    global.window = {}
    global.window.fetch = () => ({})
  })
  afterEach(() => {
    cleanup()
  })

  test('it should render the table', () => {
    const { container } = render(Ingredients)
    expect(container.querySelector('.mdc-data-table')).toBeInTheDocument()
    expect(container.querySelector('table')).toBeInTheDocument()
  })

  test('it should render a row for each required ingredient', () => {
    const { container } = render(Ingredients)

    let nonZeroIngredients = []

    for (let [key, value] of Object.entries(ingredient_values)) {
      if (value.amount !== 0) {
        nonZeroIngredients.push(key)
      }
    }

    expect(container.querySelectorAll('tr').length).toBe(nonZeroIngredients.length)
  })

  test('it should list each required ingredient', () => {
    const { getByText } = render(Ingredients)

    let nonZeroIngredients = []

    for (let [key, value] of Object.entries(ingredient_values)) {
      if (value.amount !== 0) {
        expect(getByText(value.name)).toBeInTheDocument()
      }
    }
  })
})
