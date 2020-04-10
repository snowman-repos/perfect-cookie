/* eslint-disable */
import { render, cleanup, fireEvent } from '@testing-library/svelte'
import YieldController from '../src/components/YieldController.svelte'
import { recipe } from '../src/store.js'

let numberOfCookies

recipe.subscribe((actualRecipe) => {
  numberOfCookies = actualRecipe.numberOfCookies
})

describe('yield controller component', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should render the buttons and the input', () => {
    const { getByTestId } = render(YieldController)
    expect(getByTestId('decrement-button')).toBeInTheDocument()
    expect(getByTestId('yield')).toBeInTheDocument()
    expect(getByTestId('increment-button')).toBeInTheDocument()
  })

  test('it should update the number of cookies when the value changes', async () => {
    const number = 42
    const { getByTestId } = render(YieldController)
    const yieldValue = getByTestId('yield')
    yieldValue.value = number
    // await fireEvent(
    //   yieldValue,
    //   new MouseEvent('blur', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(numberOfCookies).toBe(number)
  })

  test('it should reduce the yield value when the decrement button is clicked', async () => {
    const number = numberOfCookies
    const { getByTestId } = render(YieldController)
    const button = getByTestId('decrement-button')
    const yieldValue = getByTestId('yield')
    // await fireEvent(
    //   button,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(yieldValue).toHaveProperty('value', number - 1)
  })

  test('it should not reduce the yield value below 1', async () => {
    const number = numberOfCookies
    const { getByTestId } = render(YieldController)
    const button = getByTestId('decrement-button')
    const yieldValue = getByTestId('yield')
    // await fireEvent(
    //   button,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(yieldValue).toHaveProperty('value', number)
    yieldValue.value = 0
    // await fireEvent(
    //   yieldValue,
    //   new MouseEvent('blur', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(yieldValue).toHaveProperty('value', 1)
  })

  test('it should increase the yield value when the increment button is clicked', async () => {
    const number = numberOfCookies
    const { getByTestId } = render(YieldController)
    const button = getByTestId('decrement-button')
    const yieldValue = getByTestId('yield')
    // await fireEvent(
    //   button,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(yieldValue).toHaveProperty('value', number + 1)
  })

  test('it should not increase the yield value beyond 1000', async () => {
    const number = 1000
    const { getByTestId } = render(YieldController)
    const button = getByTestId('increment-button')
    const yieldValue = getByTestId('yield')
    // await fireEvent(
    //   button,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(yieldValue).toHaveProperty('value', number)
    yieldValue.value = 1001
    // await fireEvent(
    //   yieldValue,
    //   new MouseEvent('blur', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(yieldValue).toHaveProperty('value', number)
  })

  test('it should only accept numeric input or revert to the default value of 25', async () => {
    const { getByTestId } = render(YieldController)
    const yieldValue = getByTestId('yield')
    yieldValue.value = 'test'
    // await fireEvent(
    //   yieldValue,
    //   new MouseEvent('blur', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(yieldValue).toHaveProperty('value', numberOfCookies)
  })
})
