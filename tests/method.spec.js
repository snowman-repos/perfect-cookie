/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import Method from '../src/components/Method.svelte'
import { recipe } from '../src/store.js'

let actualRecipe

recipe.subscribe((recipeDetails) => {
  actualRecipe = recipeDetails
})

describe('recipe component', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should render a table', () => {
    const { getByTestId } = render(Method)
    expect(getByTestId('method')).toBeInTheDocument()
  })

  test('it should render a row for each instruction', () => {
    const { container } = render(Method)

    expect(container.querySelectorAll('tbody tr').length).toBe(actualRecipe.method.length)
  })
})
