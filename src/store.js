import { writable } from 'svelte/store'

export const properties = writable({
  cragginess: 60,
  crispiness: 20,
  darkness: 90,
  density: 60,
  thickness: 30,
  uniformity: 40,
})

export const numberOfCookies = writable(25)

export const ingredients = writable({
  flour: {
    amount: 10.0,
    name: 'Plain flour',
    unit: 'g',
  },
  cornstarch: {
    amount: 0,
    name: 'Cornstarch',
    unit: 'tsp',
  },
  fat: {
    amount: 8.04,
    name: 'Butter',
    unit: 'g',
  },
  whiteSugar: {
    amount: 5,
    name: 'Granulated sugar',
    unit: 'g',
  },
  brownSugar: {
    amount: 5,
    name: 'Brown sugar',
    unit: 'g',
  },
  cornSyrup: {
    amount: 0,
    name: 'Corn syrup',
    unit: 'g',
  },
  egg: {
    amount: 0.07,
    name: 'Eggs',
    unit: '',
  },
  additionalEggYolk: {
    amount: 0,
    name: 'Additional egg yolk',
    unit: '',
  },
  bakingSoda: {
    amount: 0.03,
    name: 'Baking soda',
    unit: 'tsp',
  },
  bakingPowder: {
    amount: 0,
    name: 'Baking powder',
    unit: 'tsp',
  },
  salt: {
    amount: 0.07,
    name: 'Salt',
    unit: 'tsp',
  },
  vanillaExtract: {
    amount: 0.07,
    name: 'Vanilla extract',
    unit: 'tsp',
  },
  water: {
    amount: 0,
    name: 'Water',
    unit: 'tbsp',
  },
  cinnamon: {
    amount: 0,
    name: 'Cinnamon',
    unit: 'tsp',
  },
  chocolate: {
    amount: 6,
    name: 'Chopped dark chocolate',
    unit: 'g',
  },
})

export const method = writable({
  brownButter:
    'In a saucepan over medium heat, cook the butter while gently swirling or stirring until you start to see golden brown milk solids. As soon as the butter turns a rich brown color with a nutty aroma, remove from the heat. This should take about 5 minutes. Be careful not to go past this point otherwise your butter will burn, leaving a bitter taste.',
  rehydrateButter:
    'Mix 2 tablespoons of water into the melted butter to replace the moisture lost by cooking the butter.',
  coolButter: 'Place the melted butter in the refrigerator until cool and just opaque, but not completely hardened.',
  mixWetIngredients:
    'Vigorously whisk together egg, white sugar, and vanilla until pale in color and falling from the whisk in thick ribbons',
  mixDryIntgredients: 'Whisk together flour, leavening agents, and salt.',
  mixDryAndWetIngredients:
    "Mix the brown butter and brown sugar into the egg mixture, then gently fold in the dry ingredients until just combined. Do not overmix - it's OK to still have some flour visible.",
  addOtherIngredients: 'Gently mix in the chocolate.',
  prepareDough: 'Refrigerate the dpough for at least 24 hours. Keep everything as cold as possible until you bake',
  prepareCookies:
    'Roll out your dough into small balls. Tear each ball in half and mudge the smooth sides back together before placing on the lined baking sheet - this will help maximize cragginess.',
  rest: [
    'One baked, leave the cookies to cool and solidify on the baking tray for 2 minutes before placing on a wire cooling rack. Leave to cool completely (if you can).',
  ],
})
