/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import Method from '../src/components/Method.svelte'
import { recipe } from '../src/store.js'
import { replaceAll } from '../src/utilities.js'

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

    expect(container.querySelectorAll('.mdc-list li').length).toBe(actualRecipe.method.length)
  })

  test('it should render the baking conditions', () => {
    const step = 'Bake at {TEMPERATURE} degrees for {TIME} minutes.'
    const mappedValues = {
      '{TIME}': actualRecipe.bakingConditions.time,
      '{TEMPERATURE}': actualRecipe.bakingConditions.temperature,
    }

    const { getByText } = render(Method)
    expect(getByText(replaceAll(step, mappedValues))).toBeInTheDocument()
  })

  test('it should update the method when the baking conditions change', () => {
    const newTemperature = 160
    const newTime = 15
    const mappedValues = {
      '{TIME}': newTime,
      '{TEMPERATURE}': newTemperature,
    }

    const step = 'Bake at {TEMPERATURE} degrees for {TIME} minutes.'
    const test = replaceAll(step, mappedValues)

    recipe.set(
      Object.assign(actualRecipe, {
        bakingConditions: {
          time: newTime,
          temperature: newTemperature,
        },
      })
    )

    setTimeout(() => {
      const { getByText } = render(Method)
      expect(getByText(test)).toBeInTheDocument()
    }, 1000)
  })

  test('it should update the method when the attributes change', () => {})
})
