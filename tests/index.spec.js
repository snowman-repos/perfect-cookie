/* eslint-disable */
import { render } from '@testing-library/svelte'
import Index from '../src/routes/index.svelte'

describe('index page', () => {
  test('it should render the page title', () => {
    const { container, getByText } = render(Index)

    expect(getByText('The Perfect Cookie')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test('it should render 6 sliders in a configuration section', () => {
    const { container, queryAllByRole } = render(Index)
    expect(queryAllByRole('slider')).toHaveLength(6)
    expect(container).toMatchSnapshot()
  })

  test('it should render the section titles', () => {
    const { container, getByText } = render(Index)

    expect(getByText('Ingredients')).toBeInTheDocument()
    expect(getByText('Method')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
