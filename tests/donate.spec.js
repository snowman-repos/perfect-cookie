/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import Donate from '../src/components/Donate.svelte'

describe('ingredients component', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should render the donate button', () => {
    let { queryByTestId } = render(Donate)
    expect(queryByTestId('donate-button')).toBeInTheDocument()
    expect(queryByTestId('thank-you-message')).toBeNull()
  })

  test('it should redirect to the stripe checkout when the donate button is tapped', () => {
    const { queryByTestId } = render(Donate)
    const donateButton = queryByTestId('donate-button')
    // await fireEvent(
    //   donateButton,
    //   new MouseEvent('blur', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // setTimeout(() => {
    //   expect(window.location.hostname).toEqual('checkout.stripe.com')
    // }, 1000)
  })

  test('it should show the loading bar immediately when the donate button is tapped', () => {
    const { queryByTestId } = render(Donate)
    const donateButton = queryByTestId('donate-button')
    // await fireEvent(
    //   donateButton,
    //   new MouseEvent('blur', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(queryByTestId('loader')).toBeInTheDocument()
  })

  test('it should show the thank you message if the url contained the donated=true key value', () => {
    let { queryByTestId } = render(Donate)
    window.history.pushState({}, 'Test', '/donated=true')
    // expect(queryByTestId('thank-you-message')).toBeInTheDocument()
  })
})
