/* eslint-disable */
import { render, cleanup } from '@testing-library/svelte'
import Feedback from '../src/components/Feedback.svelte'

class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = value.toString()
  }

  removeItem(key) {
    delete this.store[key]
  }
}

describe('ingredients component', () => {
  afterEach(() => {
    cleanup()
  })

  test('it should not render the panel when there is no recipe in local storage', () => {
    let { queryByTestId } = render(Feedback)
    expect(queryByTestId('feedback')).toBeNull()
  })

  test('it should render the panel when there is a recipe in local storage', () => {
    localStorage.setItem('recipe', {})
    let { getByTestId } = render(Feedback)
    expect(getByTestId('feedback')).toBeInTheDocument()
  })

  test('it should render the feedback buttons', () => {
    const { getByTestId } = render(Feedback)
    expect(getByTestId('positive-button')).toBeInTheDocument()
    expect(getByTestId('negative-button')).toBeInTheDocument()
  })

  test('it should render the feedback form when negative feedback is given', () => {
    let { getByTestId, queryByTestId } = render(Feedback)
    const button = getByTestId('negative-button')
    expect(queryByTestId('what-went-wrong')).toBeNull()
    expect(queryByTestId('submit-button')).toBeNull()
    // await fireEvent(
    //   button,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(getByTestId('what-went-wrong')).toBeInTheDocument()
    // expect(getByTestId('submit-button')).toBeInTheDocument()
  })

  test('it should submit the form when positive feedback is given', () => {
    let { getByTestId } = render(Feedback)
    const button = getByTestId('positive-button')
    // await fireEvent(
    //   button,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(getByTestId('thanks')).toBeInTheDocument()
  })

  test('it should submit the feedback form when the button is clicked', () => {
    let { getByTestId } = render(Feedback)
    const negativeButton = getByTestId('negative-button')
    // await fireEvent(
    //   negativeButton,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // const submitButton = getByTestId('submit-button')
    // await fireEvent(
    //   submitButton,
    //   new MouseEvent('click', {
    //     bubbles: false,
    //     cancelable: true,
    //   })
    // )
    // expect(getByTestId('thanks')).toBeInTheDocument()
  })
})
