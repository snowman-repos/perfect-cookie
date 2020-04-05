import { render, cleanup } from '@testing-library/svelte'
import Slider from '../src/components/Slider.svelte'
import { properties } from '../src/store.js'

let property_values

properties.subscribe((properties) => {
  property_values = properties
})

describe('slider component', () => {
  beforeEach(() => {
    global.window = {}
    global.window.fetch = () => ({})
  })
  afterEach(() => {
    cleanup()
  })

  test('it should get the correct value from the store', () => {
    const property = 'cragginess'
    const { container } = render(Slider, {
      props: {
        from: '',
        property,
        to: '',
      },
    })
    expect(container).toHaveProperty('aria-valuenow', properties[property])
  })

  test('it should render the correct labels', () => {
    const from = 'test1'
    const to = 'test2'
    const { container } = render(Slider, {
      props: {
        from,
        property: 'cragginess',
        to,
      },
    })
    expect(container).toContainHTML(`<span>${from}</span>`)
    expect(container).toContainHTML(`<span>${to}</span>`)
  })
})
