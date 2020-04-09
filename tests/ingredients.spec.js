/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import Ingredients from '../src/components/Ingredients.svelte'
import { numberOfCookies } from '../src/store.js'
import { ingredients } from '../src/store.js'

let number
let ingredient_values

numberOfCookies.subscribe((value) => {
  number = value
})

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

    expect(container.querySelectorAll('tbody tr').length).toBe(nonZeroIngredients.length)
  })

  test('it should list each required ingredient', () => {
    const { getByText } = render(Ingredients)

    for (let [key, value] of Object.entries(ingredient_values)) {
      if (value.amount !== 0) {
        expect(getByText(value.name)).toBeInTheDocument()
      }
    }
  })

  test('it should calculate the amount of each ingredient based on the number of cookies', () => {
    const { container } = render(Ingredients)
    let index = 0
    for (let [key, value] of Object.entries(ingredient_values)) {
      if (value.amount !== 0) {
        expect(container.querySelectorAll('tbody tr td:first-of-type')[index].innerHTML).toContain(
          value.amount * number
        )
        index += 1
      }
    }
  })
  test('it should update the ingredients list when the number of cookies changes', () => {
    const newNumber = 5
    numberOfCookies.set(newNumber)
    let index = 0
    const { container } = render(Ingredients)
    for (let [key, value] of Object.entries(ingredient_values)) {
      if (value.amount !== 0) {
        expect(container.querySelectorAll('tbody tr td:first-of-type')[index].innerHTML).toContain(
          value.amount * newNumber
        )
        index += 1
      }
    }
  })
})
