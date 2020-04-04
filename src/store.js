import { writable } from 'svelte/store'

export const properties = writable({
  cragginess: 80,
  crispiness: 40,
  darkness: 80,
  density: 80,
  thickness: 80,
  uniformity: 80,
})
