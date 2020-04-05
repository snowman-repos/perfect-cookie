import { render, cleanup } from '@testing-library/svelte'
import Button from '../src/components/Button.svelte'

describe('button component', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should render component correctly', () => {
    const test = 'testing'

    const { container } = render(Button, {
      props: {
        text: test,
      },
    })

    expect(container).toHaveTextContent(test)
  })
})
