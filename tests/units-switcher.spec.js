/* eslint-disable */
import { render, cleanup, fireEvent } from '@testing-library/svelte'
import UnitsSwitcher from '../src/components/UnitsSwitcher.svelte'
import { recipe } from '../src/store.js'

let currentRecipe

recipe.subscribe((actualRecipe) => {
  currentRecipe = actualRecipe
})

describe('units switcher component', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should render the switch', () => {
    const { getByTestId } = render(UnitsSwitcher)
    expect(getByTestId('switch')).toBeInTheDocument()
  })

  test('it should render the labels', () => {
    const { getByTestId } = render(UnitsSwitcher)
    expect(getByTestId('american-units-label')).toBeInTheDocument()
    expect(getByTestId('standard-units-label')).toBeInTheDocument()
  })

  test('it should display a warning when american units are selected', () => {
    recipe.set(
      Object.assign(currentRecipe, {
        useStandardUnits: true,
      })
    )
    const { getByTestId } = render(UnitsSwitcher)
    const unitSwitch = getByTestId('switch')
    // await fireEvent(
    //   unitSwitch,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(currentRecipe.useStandardUnits).toBe(false)
  })
})
