import { render } from '@testing-library/svelte'
import Index from '../src/routes/index.svelte'

describe('index page', () => {
  test('it should render the page title', () => {
    const { getByText } = render(Index)

    expect(getByText('The Perfect Cookie')).toBeInTheDocument()
  })

  test('it should render 6 sliders in a configuration section', () => {
    const { queryAllByRole } = render(Index)
    expect(queryAllByRole('slider')).toHaveLength(6)
  })

  test('it should render the section titles', () => {
    const { getByText } = render(Index)

    expect(getByText('Recipe')).toBeInTheDocument()
    expect(getByText('Method')).toBeInTheDocument()
  })
})
