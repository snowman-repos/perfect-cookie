import { render } from '@testing-library/svelte'
import Index from '../src/routes/index.svelte'

describe('index page', () => {
  test('it should render the page title', () => {
    const { container } = render(Index)

    expect(container).toContainHTML('<h1 class="title mdc-typography--headline1">The Perfect Cookie</h1>')
  })

  test('it should render 6 sliders in a configuration section', () => {
    const { queryAllByRole } = render(Index)
    expect(queryAllByRole('slider')).toHaveLength(6)
  })
})
