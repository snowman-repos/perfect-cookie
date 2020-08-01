/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import Method from '../src/components/Method.svelte'
import { recipe } from '../src/store.js'
import { replaceAll } from '../src/utilities.js'

let actualRecipe

recipe.subscribe((recipeDetails) => {
  actualRecipe = recipeDetails
})

describe('method component', () => {
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

  test('it should render the time taken to prepare', () => {
    const { getByTestId } = render(Method)

    expect(getByTestId('preparationTime')).toBeInTheDocument()
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

  test('it should show American units in the method when American units are selected', () => {
    recipe.set(
      Object.assign(actualRecipe, {
        useStandardUnits: false,
      })
    )
    const { container } = render(Method)

    setTimeout(() => {
      expect(container).toContainHTML('Fahrenheits')
      expect(container).toContainHTML('1.38"')
      expect(container).toContainHTML('2.11oz')
      expect(container).toContainHTML('3.94"')
      expect(container).not.toContainHTML('degrees')
      expect(container).not.toContainHTML('3.5cm')
      expect(container).not.toContainHTML('60g')
      expect(container).not.toContainHTML('10cm')
    }, 1000)
  })
})
