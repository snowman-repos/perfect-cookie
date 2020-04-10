import { readable, writable } from 'svelte/store'

export const recipe = writable({
  bakingConditions: {
    time: 13,
    temperature: 170,
  },
  ingredients: [
    {
      amount: 2,
      name: 'Plain flour',
      unit: 'g',
    },
    {
      amount: 8,
      name: 'Bread flour',
      unit: 'g',
    },
    {
      amount: 8.04,
      name: 'Butter',
      unit: 'g',
    },
    {
      amount: 5,
      name: 'Granulated sugar',
      unit: 'g',
    },
    {
      amount: 5,
      name: 'Brown sugar',
      unit: 'g',
    },
    {
      amount: 0.07,
      name: 'Eggs',
      unit: '',
    },
    {
      amount: 0.03,
      name: 'Baking soda',
      unit: 'tsp',
    },
    {
      amount: 0.07,
      name: 'Salt',
      unit: 'tsp',
    },
    {
      amount: 0.07,
      name: 'Vanilla extract',
      unit: 'tsp',
    },
    {
      amount: 0.07,
      name: 'Water',
      unit: 'tbsp',
    },
    {
      amount: 0.02,
      name: 'Cinnamon',
      unit: 'tsp',
    },
    {
      amount: 6,
      name: 'Chopped dark chocolate',
      unit: 'g',
    },
  ],
  method: [
    'In a saucepan over medium heat, cook the butter while gently swirling or stirring until you start to see golden brown milk solids. As soon as the butter turns a rich brown color with a nutty aroma, remove from the heat. This should take about 5 minutes. Be careful not to go past this point otherwise your butter will burn, leaving a bitter taste.',
    'Mix 2 tablespoons of water into the melted butter to replace the moisture lost by cooking the butter.',
    'Place the melted butter in the refrigerator until cool and just opaque, but not completely hardened.',
    'Vigorously whisk together egg, white sugar, and vanilla until pale in color and falling from the whisk in thick ribbons.',
    'Sift the flour, baking soda, and salt, and whisk together.',
    'Mix the brown butter and brown sugar into the egg mixture.',
    "<em>Gently</em> fold in the dry ingredients until just combined. <em>Do not</em> overmix - it's OK to still have some flour visible. It's best to do this by hand rather than using a stand mixer to avoid over-working the dough.",
    'Gently mix in the chocolate.',
    'Refrigerate the dough for at least 24 hours. Keep everything as cold as possible until you bake.',
    'Preheat the oven and line a baking sheet with something non-stick.',
    'Shape your dough into small balls, about 3.5cm in diameter.',
    'Tear each ball in half and smoodge the smooth sides back together before placing on the lined baking sheet. This will help maximize cragginess.',
    'Place the cookies at least 10cm apart on a lined baking sheet.',
    'Bake at 175 degrees for 13 minutes.',
    'Once baked, leave the cookies to cool and solidify on the baking tray for 2 minutes before placing on a wire cooling rack. Leave to cool completely (if you can).',
  ],
  numberOfCookies: 25,
  properties: {
    color: 90,
    mouthfeel: 80,
    spread: 30,
    surface: 80,
    texture: 20,
  },
})

export const bakingConditions = readable({
  time: {
    max: 200,
    min: 7,
  },
  temperature: {
    max: 200,
    min: 160,
  },
})

export const ingredients = readable([
  {
    max: 17.5,
    min: 5.33,
    name: 'Plain flour',
    unit: 'g',
  },
  {
    max: 17.5,
    min: 5.33,
    name: 'Cake flour',
    unit: 'g',
  },
  {
    max: 17.5,
    min: 5.3,
    name: 'Bread flour',
    unit: 'g',
  },
  {
    max: 0.09,
    min: 0,
    name: 'Cornstarch',
    unit: 'g',
  },
  {
    max: 11.33,
    min: 4.69,
    name: 'Butter',
    unit: 'g',
  },
  {
    max: 8.33,
    min: 1.57,
    name: 'Granulated sugar',
    unit: 'g',
  },
  {
    max: 14.67,
    min: 0,
    name: 'Brown sugar',
    unit: 'g',
  },
  {
    max: 3.31,
    min: 0,
    name: 'Corn syrup',
    unit: 'g',
  },
  {
    max: 0.08,
    min: 0.02,
    name: 'Eggs',
    unit: '',
  },
  {
    max: 0.07,
    min: 0,
    name: 'Additional egg yolk',
    unit: '',
  },
  {
    max: 0.06,
    min: 0,
    name: 'Baking soda',
    unit: 'tsp',
  },
  {
    max: 0.02,
    min: 0,
    name: 'Baking powder',
    unit: 'tsp',
  },
  {
    max: 0.08,
    min: 0.08,
    name: 'Salt',
    unit: 'tsp',
  },
  {
    max: 0.13,
    min: 0.13,
    name: 'Vanilla extract',
    unit: 'tsp',
  },
  {
    max: 0.08,
    min: 0,
    name: 'Water',
    unit: 'tbsp',
  },
  {
    max: 0.02,
    min: 0.02,
    name: 'Cinnamon',
    unit: 'tsp',
  },
  {
    max: 6,
    min: 6,
    name: 'Chopped dark chocolate',
    unit: 'g',
  },
])

export const method = readable([
  {
    ingredientsNeeded: [],
    instruction:
      'In a saucepan over medium heat, cook the butter while gently swirling or stirring until you start to see golden brown milk solids. As soon as the butter turns a rich brown color with a nutty aroma, remove from the heat. This should take about 5 minutes. Be careful not to go past this point otherwise your butter will burn, leaving a bitter taste.',
    timeNeeded: 5,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: ['Water'],
    instruction:
      'Mix 2 tablespoons of water into the melted butter to replace the moisture lost by cooking the butter.',
    timeNeeded: 0.5,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Place the melted butter in the refrigerator until cool and just opaque, but not completely hardened.',
    timeNeeded: 20,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Vigorously whisk together egg, white sugar, and vanilla until pale in color and falling from the whisk in thick ribbons.',
    timeNeeded: 5,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Cream butter and granulated sugar until pale, then gradually beat in the egg, a little at a time to avoid curdling. Once all the egg is incorportated, stir in the vanilla extract.',
    timeNeeded: 3,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Sift and whisk together the flour and salt.',
    timeNeeded: 1,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: ['Baking soda'],
    instruction: 'Sift the flour, baking soda, and salt, and whisk together.',
    timeNeeded: 1,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: ['Baking soda', 'Baking powder'],
    instruction: 'Sift the flour, baking soda, baking powder, and salt, and whisk together.',
    timeNeeded: 1,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Mix the brown butter into the egg mixture.',
    timeNeeded: 0.5,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: ['Brown sugar'],
    instruction: 'Mix the brown butter and brown sugar into the egg mixture.',
    timeNeeded: 0.5,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      "<em>Gently</em> fold in the dry ingredients until just combined. <em>Do not</em> overmix - it's OK to still have some flour visible. It's best to do this by hand rather than using a stand mixer to avoid over-working the dough.",
    timeNeeded: 1,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Mix together the wet and dry ingredients until combined.',
    timeNeeded: 2,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Thoroughly mix the wet and dry ingredients, stirring until smooth and glossy. This is best done in a stand mixer.',
    timeNeeded: 5,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: ['Chopped dark chocolate'],
    instruction: 'Gently mix in the chocolate.',
    timeNeeded: 1,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: ['Chopped dark chocolate'],
    instruction: 'Stir in the chocolate.',
    timeNeeded: 1,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Refrigerate the dough for at least 24 hours. Keep everything as cold as possible until you bake.',
    timeNeeded: 1440,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Refrigerate the dough for 30 minutes or until it firms up slightly.',
    timeNeeded: 30,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Preheat the oven and line a baking sheet with something non-stick.',
    timeNeeded: 1,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Shape your dough into small balls, about 3.5cm in diameter.',
    timeNeeded: 5,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Roll the dough to your desired thickness and cut into desired shapes.',
    timeNeeded: 10,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Tear each ball in half and smoodge the smooth sides back together before placing on the lined baking sheet. This will help maximize cragginess.',
    timeNeeded: 5,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Place the cookies at least 10cm apart on a lined baking sheet.',
    timeNeeded: 2,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Bake at [TEMPERATURE] degrees for [MINUTES] minutes.',
    timeNeeded: '[MINUTES]',
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Once baked, leave the cookies to cool and solidify on the baking tray for 2 minutes before placing on a wire cooling rack. Leave to cool completely (if you can).',
    timeNeeded: 32,
    thresholds: {
      color: 0,
      mouthfeel: 0,
      spread: 0,
      surface: 0,
      texture: 0,
    },
  },
])

export const properties = readable([
  {
    from: 'Light',
    name: 'color',
    to: 'Dark',
  },
  {
    from: 'Light & cakey',
    name: 'mouthfeel',
    to: 'Dense & chewy',
  },
  {
    from: 'Spread thin',
    name: 'spread',
    to: 'Tall & thick',
  },
  {
    from: 'Smooth',
    name: 'surface',
    to: 'Craggy',
  },
  {
    from: 'Soft',
    name: 'texture',
    to: 'Crunchy',
  },
])

export const tips = readable(['', ''])
