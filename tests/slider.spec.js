/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import Slider from '../src/components/Slider.svelte'
import { properties } from '../src/store.js'

let property_values

properties.subscribe((properties) => {
  property_values = properties
})

describe('slider component', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should get the correct value from the store', () => {
    const property = 'surface'
    const { container } = render(Slider, {
      props: {
        from: '',
        property,
        to: '',
        updateRecipe: () => {},
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
        property: 'surface',
        to,
      },
    })
    expect(container).toContainHTML(`<span>${from}</span>`)
    expect(container).toContainHTML(`<span>${to}</span>`)
  })
})
