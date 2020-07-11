import { readable, writable } from 'svelte/store'

export const recipe = writable({
  bakingConditions: {
    temperature: 0,
    time: 0,
  },
  ingredients: [
    {
      amount: 0,
      checked: false,
      name: 'Plain flour',
      unit: 'g',
    },
    {
      amount: 0,
      checked: false,
      name: 'Bread flour',
      unit: 'g',
    },
    {
      amount: 0,
      checked: false,
      name: 'Butter',
      unit: 'g',
    },
    {
      amount: 0,
      checked: false,
      name: 'Hot water',
      unit: 'tbsp',
    },
    {
      amount: 0,
      checked: false,
      name: 'Granulated sugar',
      unit: 'g',
    },
    {
      amount: 0,
      checked: false,
      name: 'Brown sugar',
      unit: 'g',
    },
    {
      amount: 0,
      checked: false,
      name: 'Eggs',
      unit: '',
    },
    {
      amount: 0,
      checked: false,
      name: 'Baking soda',
      unit: 'tsp',
    },
    {
      amount: 0,
      checked: false,
      name: 'Salt',
      unit: 'tsp',
    },
    {
      amount: 0,
      checked: false,
      name: 'Vanilla extract',
      unit: 'tsp',
    },
    {
      amount: 0,
      checked: false,
      name: 'Cinnamon',
      unit: 'tsp',
    },
    {
      amount: 0,
      checked: false,
      name: 'Chopped dark chocolate',
      unit: 'g',
    },
  ],
  method: [],
  numberOfCookies: 25,
  preparationTime: 0,
  properties: {
    color: 60,
    mouthfeel: 80,
    surface: 90,
    texture: 30,
    thickness: 40,
  },
})

export const method = readable([
  {
    ingredientsNeeded: [],
    instruction:
      'In a saucepan over medium heat, cook the butter while gently swirling or stirring until you start to see golden brown milk solids. As soon as the butter turns a rich brown color with a nutty aroma, remove from the heat. This should take about 5 minutes. Be careful not to go past this point otherwise your butter will burn, leaving a bitter taste.',
    timeNeeded: 5,
    thresholds: {
      color: {
        min: 60,
        max: 100,
      },
      mouthfeel: {
        min: 40,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: ['Hot water'],
    instruction: 'Mix hot water into the melted butter to replace the moisture lost by cooking the butter.',
    timeNeeded: 0.5,
    thresholds: {
      color: {
        min: 80,
        max: 100,
      },
      mouthfeel: {
        min: 40,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Use cold hard butter from the refrigerator.',
    timeNeeded: 20,
    thresholds: {
      color: {
        min: 0,
        max: 60,
      },
      mouthfeel: {
        min: 0,
        max: 40,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Make sure the butter is cool, but not completely hardened.',
    timeNeeded: 20,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 40,
        max: 80,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Use completely melted butter.',
    timeNeeded: 20,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 90,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Vigorously whisk together egg, white sugar, and vanilla until pale in color and falling from the whisk in thick ribbons.',
    timeNeeded: 5,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Cream butter and granulated sugar until pale, then gradually beat in the egg, a little at a time to avoid curdling. Once all the egg is incorportated, stir in the vanilla extract.',
    timeNeeded: 3,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 70,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Sift and whisk together the flour and salt.',
    timeNeeded: 1,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 90,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: ['Baking soda'],
    instruction: 'Sift the flour, baking soda, and salt, and whisk together.',
    timeNeeded: 1,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 90,
      },
      thickness: {
        min: 50,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: ['Baking soda', 'Baking powder'],
    instruction: 'Sift the flour, baking soda, baking powder, and salt, and whisk together.',
    timeNeeded: 1,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 90,
      },
      thickness: {
        min: 0,
        max: 50,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Mix the brown butter into the egg mixture.',
    timeNeeded: 0.5,
    thresholds: {
      color: {
        min: 60,
        max: 100,
      },
      mouthfeel: {
        min: 40,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: ['Brown sugar'],
    instruction: 'Mix the brown butter and brown sugar into the egg mixture.',
    timeNeeded: 0.5,
    thresholds: {
      color: {
        min: 60,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Mix the butter and brown sugar into the egg mixture.',
    timeNeeded: 0.5,
    thresholds: {
      color: {
        min: 10,
        max: 50,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      "<em>Gently</em> fold the wet ingredients into the dry ingredients until just combined. <em>Do not</em> overmix - it's OK to still have some flour visible. It's best to do this by hand rather than using a stand mixer to avoid over-working the dough.",
    timeNeeded: 1,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 70,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Mix together the wet and dry ingredients until combined.',
    timeNeeded: 2,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 40,
        max: 60,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Thoroughly mix the wet and dry ingredients, stirring until smooth and glossy. This is best done in a stand mixer.',
    timeNeeded: 5,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 30,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: ['Chopped dark chocolate'],
    instruction: 'Gently mix in the chocolate and anything else you might want to add.',
    timeNeeded: 1,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 50,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: ['Chopped dark chocolate'],
    instruction: 'Stir in the chocolate and anything else you might want to add.',
    timeNeeded: 1,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 40,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Refrigerate the dough for at least 24 hours. Keep everything as cold as possible until you bake.',
    timeNeeded: 1440,
    thresholds: {
      color: {
        min: 80,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 50,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 50,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Refrigerate the dough for 30 minutes or until it firms up slightly.',
    timeNeeded: 30,
    thresholds: {
      color: {
        min: 0,
        max: 70,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 50,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Preheat the oven and line a baking sheet with something non-stick.',
    timeNeeded: 1,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Shape your dough into small balls, about 3.5cm in diameter.',
    timeNeeded: 5,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Roll the dough to your desired thickness and cut into desired shapes.',
    timeNeeded: 10,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 80,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Tear each ball in half and smoodge the smooth sides back together before placing on the lined baking sheet. This will help maximize cragginess.',
    timeNeeded: 5,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 80,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Place the cookies at least 10cm apart on a lined baking sheet.',
    timeNeeded: 2,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction: 'Bake at {TEMPERATURE} degrees for {TIME} minutes.',
    timeNeeded: 0,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
    },
  },
  {
    ingredientsNeeded: [],
    instruction:
      'Once baked, leave the cookies to cool and solidify on the baking tray for 2 minutes before placing on a wire cooling rack. Leave to cool completely (if you can).',
    timeNeeded: 32,
    thresholds: {
      color: {
        min: 0,
        max: 100,
      },
      mouthfeel: {
        min: 0,
        max: 100,
      },
      surface: {
        min: 0,
        max: 100,
      },
      texture: {
        min: 0,
        max: 100,
      },
      thickness: {
        min: 0,
        max: 100,
      },
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
    from: 'Smooth',
    name: 'surface',
    to: 'Craggy',
  },
  {
    from: 'Soft',
    name: 'texture',
    to: 'Crunchy',
  },
  {
    from: 'Spread thin',
    name: 'thickness',
    to: 'Tall & thick',
  },
])

export const tips = readable(['', ''])
