/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import Ingredients from '../src/components/Ingredients.svelte'
import { recipe } from '../src/store.js'
import { roundToTwo } from '../src/utilities.js'

let actualRecipe

recipe.subscribe((recipeDetails) => {
  actualRecipe = recipeDetails
})

describe('ingredients component', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should render the table', () => {
    const { container } = render(Ingredients)
    expect(container.querySelector('.mdc-data-table')).toBeInTheDocument()
  })

  test('it should render a row for each required ingredient', () => {
    const { container } = render(Ingredients)

    let nonZeroIngredients = actualRecipe.ingredients.map((ingredient) => {
      return ingredient.amount != 0
    })

    setTimeout(() => {
      expect(container.querySelectorAll('tbody tr').length).toBe(nonZeroIngredients.length)
    }, 1000)
  })

  test('it should list each required ingredient', () => {
    const { getByText } = render(Ingredients)

    actualRecipe.ingredients.forEach((ingredient) => {
      if (ingredient.amount != 0) expect(getByText(ingredient.name)).toBeInTheDocument()
    })
  })

  test('it should calculate the amount of each ingredient based on the number of cookies', () => {
    const { container } = render(Ingredients)
    let index = 0

    actualRecipe.ingredients.forEach((ingredient) => {
      if (ingredient.amount != 0) {
        expect(container.querySelectorAll('tbody tr td:first-of-type')[index].innerHTML).toContain(
          roundToTwo(ingredient.amount * actualRecipe.numberOfCookies)
        )
        index += 1
      }
    })
  })

  test('it should update the ingredients list when the number of cookies changes', () => {
    const newNumber = 5
    recipe.set(
      Object.assign(actualRecipe, {
        numberOfCookies: newNumber,
      })
    )
    let index = 0
    const { container } = render(Ingredients)

    actualRecipe.ingredients.forEach((ingredient) => {
      if (ingredient.amount != 0) {
        expect(container.querySelectorAll('tbody tr td:first-of-type')[index].innerHTML).toContain(
          roundToTwo(ingredient.amount * actualRecipe.numberOfCookies)
        )
        index += 1
      }
    })
  })

  test('it should render a checkbox for each required ingredient', () => {
    const { container } = render(Ingredients)

    let nonZeroIngredients = actualRecipe.ingredients.map((ingredient) => {
      return ingredient.amount != 0
    })

    setTimeout(() => {
      expect(container.querySelectorAll('input').length).toBe(nonZeroIngredients.length)
    }, 1000)
  })

  test('it should check the checkbox if the ingredient is checked', () => {
    recipe.set(
      Object.assign(actualRecipe, {
        ingredients: [
          {
            amount: 0,
            checked: true,
            name: 'Plain flour',
            unit: 'g',
          },
          {
            amount: 0,
            checked: false,
            name: 'Bread flour',
            unit: 'g',
          },
        ],
      })
    )

    let index = 0
    const { container } = render(Ingredients)

    setTimeout(() => {
      actualRecipe.ingredients.forEach((ingredient) => {
        if (ingredient.amount != 0) {
          if (ingredient.checked) {
            expect(container.querySelectorAll('input[type="checkbox"]')[index]).toHaveProperty('checked')
          } else {
            expect(container.querySelectorAll('input[type="checkbox"]')[index]).not.toHaveProperty('checked')
          }
          index += 1
        }
      })
    }, 1000)
  })

  test('it should show American units in the ingredients list when American units are selected', () => {
    recipe.set(
      Object.assign(actualRecipe, {
        useStandardUnits: false,
      })
    )
    const { container } = render(Ingredients)

    setTimeout(() => {
      expect(container).toContainHTML('cups')
      expect(container).toContainHTML('oz')
      expect(container).not.toContainHTML(' g')
    }, 1000)
  })
})
