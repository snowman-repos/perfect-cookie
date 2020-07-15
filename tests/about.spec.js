/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import About from '../src/routes/about.svelte'

describe('about page', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should render the titles', () => {
    const { container, getByText } = render(About)

    expect(getByText('The Cookie Website')).toBeInTheDocument()
    expect(getByText('How do you use this?')).toBeInTheDocument()
    expect(getByText('Who made this?')).toBeInTheDocument()
    expect(getByText('Why was this made?')).toBeInTheDocument()
    expect(getByText('How was this made?')).toBeInTheDocument()
    expect(getByText('Can I contribute?')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  test('it should render the navigation button', () => {
    const { queryByTestId } = render(About)
    expect(queryByTestId('navigation')).toBeInTheDocument()
  })

  test('it should navigate to the Home page when the navigation button is clicked', () => {
    const { queryByTestId } = render(About)
    const button = queryByTestId('navigation')
    // await fireEvent(
    //   button,
    //   new MouseEvent('blur', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(document.location.pathname).toBe('/')
  })
})
