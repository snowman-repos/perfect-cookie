import { recipe, method } from './store.js'

// ------UTILITY FUNCTIONS------

/**
 * Debounces a function call to avoid taxing the browser.
 * @param  {Function} callback          The function to be debounced
 * @param  {Number}   wait              The wait time before the function can be called again
 * @param  {Boolean}  [immediate=false] Whether or not to call the function at T=0
 * @return {Function}                   The debouncer
 */
export const debounce = (callback, wait, immediate = false) => {
  let timeout = null

  return function () {
    const callNow = immediate && !timeout
    const next = () => callback.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(next, wait)

    if (callNow) {
      next()
    }
  }
}

/**
 * Replaces all occurrences of multiple placeholders in a string with a given set of values.
 * @param  {String} str    The input containing the placeholders
 * @param  {Object} mapObj An object that maps placeholders to the actual values
 * @return {String}        The string with the placeholders replaced
 */
export const replaceAll = (str, mapObj) => {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'g')

  return str.replace(re, function (matched) {
    return mapObj[matched]
  })
}

/**
 * Rounds a number to 2 significant figures.
 * @param  {Number} num The number to be rounded
 * @return {Number}     The rounded number
 */
export const roundToTwo = (number) => {
  return +(Math.round(number + 'e+2') + 'e-2')
}

// ------CALCULATE RECIPE------

/**
 * Calculates any additional egg yolk needed (in grams) based on the required texture. Additional egg yolk is required for a softer texture.
 * @param  {Number} texture The texture percentage value 0-100
 * @return {Number}         Grams of additional egg yolk needed
 */
export const getAdditionalEggYolk = (texture) => {
  switch (texture) {
    case 0:
      return 0.07
    case 10:
      return 0.04
    case 20:
      return 0.02
    default:
      return 0
  }
}

/**
 * Calculates any baking powder needed based on the required surface quality and thickness. Baking powder leads to a smoother and thinner cookies.
 * @param  {String} property  [description]
 * @param  {Number} surface   The surface percentage value 0-100
 * @param  {Number} thickness The thickness percentage value 0-100
 * @return {Number}           Grams of baking powder required
 */
export const getBakingPowder = (property, surface, thickness) => {
  if (property === 'surface' && surface < 30) {
    return -0.00062 * surface + 0.0188
  } else if (property === 'thickness' && thickness < 50) {
    return -0.00037 * thickness + 0.0188
  } else {
    return 0
  }
}

/**
 * Calculates the baking soda needed based on the required texture. Baking soda softens the texture.
 * @param  {Number} texture The texture percentage value 0-100
 * @return {Number}         Grams of baking soda required
 */
export const getBakingSoda = (texture) => {
  switch (texture) {
    case 60:
      return 0.02
    case 70:
      return 0.013
    case 80:
      return 0.007
    case 90:
      return 0
    case 100:
      return 0
    default:
      return 0.0262
  }
}

/**
 * Calculates the heat exposure (a ratio between time in the oven and oven temperature) based on the required texture. More heat is needed for a crunchier texture.
 * @param  {Number} texture The texture percentage value 0-100
 * @return {Number}         The heat exposure ratio
 */
export const getHeatExposure = (texture) => {
  return 0.09 * texture + 12.5
}

/**
 * Calculates the baking time needed based on the color and thickness. The calculation will prioritize the property that the user is currently adjusting. Darker color or taller cookies need more time in the oven.
 * @param  {String} property  The property that the user adjusted to trigger this function
 * @param  {Number} color     The color percentage value 0-100
 * @param  {Number} thickness The thickness percentage value 0-100
 * @return {number}           Number of minutes the cookies should be baked for
 */
export const getBakingTime = (property, color, thickness) => {
  if (property === 'color') {
    return Math.round(0.024 * color + 10.8)
  } else if (property === 'thickness') {
    return Math.round(0.01 * thickness + 11.5)
  } else return 12
}

/**
 * Calculates the baking temperature needed based on the required heat exposure and baking time.
 * @param  {Number} heat The heat exposure ratio
 * @param  {Number} time The baking time in minutes
 * @return {Number}      The baking temperature
 */
export const getBakingTemperature = (heat, time) => {
  let temperature = Math.round(heat * time)

  if (temperature < 150) return 150
  if (temperature > 250) return 250
  return temperature
}

/**
 * Calculates how much bread flour is needed based on the total amount of flour and the required mouthfeel. Bread flour adds density & chewiness.
 * @param  {Number} flour     Total grams of flour needed
 * @param  {Number} mouthfeel The mouthfeel percentage value 0-100
 * @return {Number}           Grams of bread flour needed
 */
export const getBreadFlour = (flour, mouthfeel) => {
  if (mouthfeel > 90) {
    return 0.67 * flour
  } else if (mouthfeel > 80) {
    return 0.5 * flour
  } else if (mouthfeel > 70) {
    return 0.33 * flour
  } else {
    return 0
  }
}

/**
 * Calculates the ratio of brown to white sugar required based on the required color or thickness. The calculation will prioritize the property that the user is currently adjusting. More brown sugar will lead to darker and taller cookies.
 * @param  {String} property  The property that the user adjusted to trigger this function
 * @param  {Number} color     The color percentage value 0-100
 * @param  {Number} thickness The thickness percentage value 0-100
 * @return {Number}           The brown:white sugar ratio
 */
export const getBrownWhiteSugarRatio = (property, color, thickness) => {
  if (property === 'color') {
    const ratio = 0.0212 * color - 0.27
    return ratio >= 0 ? ratio : 0
  } else if (property === 'thickness') {
    return 0.005 * thickness + 0.75
  } else {
    return -0.0165 * thickness + 1.8
  }
}

/**
 * Calculates how much cake flour is needed based on the total amount of flour, the texture, and the mouthfeel. Cake flour will lead to softer, lighter, and cakier cookies.
 * @param  {Number} flour     Total grams of flour needed
 * @param  {Number} texture   The texture percentage value 0-100
 * @param  {Number} mouthfeel The mouthfeel percentage value 0-100
 * @return {Number}           Grams of cake flour needed
 */
export const getCakeFlour = (flour, texture, mouthfeel) => {
  if (texture < 10 && mouthfeel < 10) {
    return flour
  } else if (mouthfeel < 20) {
    return 0.5 * flour
  } else if (mouthfeel < 30) {
    return 0.33 * flour
  } else {
    return 0
  }
}

/**
 * Calculates the updated color property. Color is impacted by ingredients that also impact thickness and surface quality. Smoother surfaced cookies may contain corn syrup, which also darkens cookies. Brown sugar increases the thickness of cookies and also darkens the color.
 * @param  {String} property             The property that the user adjusted to trigger this function
 * @param  {Number} brownWhiteSugarRatio The brown:white sugar ratio
 * @param  {Number} color                The current color percentage value 0-100
 * @param  {Number} surface              The surface percentage value 0-100
 * @return {Number}                      The resulting color percentage value 0-100
 */
export const getColor = (property, brownWhiteSugarRatio, color, surface) => {
  let newColor = color

  if (property === 'thickness') {
    if (brownWhiteSugarRatio < 1.1 && brownWhiteSugarRatio / 1.1 > 0.5) {
      if (color >= 10) newColor = color - 10
    }
    if (brownWhiteSugarRatio > 1.1 && brownWhiteSugarRatio < 3.0 && brownWhiteSugarRatio / 1.9 > 0.5) {
      if (color <= 90) newColor = color + 10
    }
  }

  if (surface < 10) {
    if (color <= 80) return newColor + 20
  } else if (surface < 20) {
    if (color <= 80) return newColor + 10
  } else return newColor

  return newColor
}

/**
 * Calculates how much corn syrup is needed based on the total amount of sugar and the desired surface quality. Corn sugar will lead to a smooth surface.
 * @param  {Number} sugar   Total grams of sugar in the recipe
 * @param  {Number} surface The surface percentage value 0-100
 * @return {Number}         Grams of corn syrup needed
 */
export const getCornSyrup = (totalSugar, surface) => {
  if (surface < 10) {
    return totalSugar * 0.15
  } else if (surface < 20) {
    return totalSugar * 0.1
  } else if (surface < 30) {
    return totalSugar * 0.05
  } else {
    return 0
  }
}

/**
 * Calculates how many eggs are needed based on the desired texture. More egg will lead to a softer texture.
 * @param  {Number} texture The texture percentage value 0-100
 * @return {Number}         The number of eggs needed
 */
export const getEggs = (texture) => {
  return -0.00038 * texture + 0.065
}

/**
 * Calculates how much fat is needed based on the desired thickness. Less fat will result in a thicker cookie.
 * @param  {Number} thickness The thickness percentage value 0-100
 * @return {Number}           Grams of fat needed
 */
export const getFat = (thickness) => {
  return -0.021 * thickness + 7.7
}

/**
 * Determines the type of fat that should be used based on the thickness. Thinner cookies should use vegetable oil instead of butter.
 * @param  {Number} thickness The thickness percentage value 0-100
 * @return {String}           The type of fat needed
 */
export const getFatType = (thickness) => {
  if (thickness < 20) return 'Vegetable oil'
  else return 'Butter'
}

/**
 * Calculates how much flour is needed based on the liquid:dry ingredients ratio, and the liquid ingredients.
 * @param  {Number} liquidRatio       The ratio of liquid:dry ingredients
 * @param  {Number} eggs              The number of eggs
 * @param  {Number} additionalEggYolk The number of additional egg yolks
 * @param  {Number} fat               Grams of fat
 * @return {Number}                   Grams of flour needed
 */
export const getFlour = (liquidRatio, eggs, additionalEggYolk, fat) => {
  // Assume an egg weighs 50g, an egg yolk weighs 18g
  return liquidRatio * (eggs * 50 + additionalEggYolk * 18 + fat)
}

/**
 * Calculates the flour:sugar ratio based on the desired texture. A higher ratio will result in crunchier cookies.
 * @param  {Number} texture The texture percentage value 0-100
 * @return {Number}         The flour:sugar ratio
 */
export const getFlourSugarRatio = (texture) => {
  return 0.0025 * texture + 1.3
}

/**
 * Calculates the dry:liquid ingredient ratio based on the desired surface quality. A higher ratio (more dry) will result in a craggier surface.
 * @param  {Number} surface The surface percentage value 0-100
 * @return {Number}         The dry:liquid ingredient ratio
 */
export const getDryLiquidRatio = (surface) => {
  return 0.021 * surface + 0.65
}

/**
 * Calculates how much plain flour is needed based on the total amount of flour and the desired mouthfeel. Denser, chewier cookies will need some amount of bread flour, whereas lighter, cakier cookies would need some amount of cake flour.
 * @param  {Number} flour     Total grams of flour
 * @param  {Number} mouthfeel The mouthfeel percentage value 0-100
 * @return {Number}           Grams of plain flour needed
 */
export const getPlainFlour = (flour, mouthfeel) => {
  if (mouthfeel < 20) {
    return 0.5 * flour
  } else if (mouthfeel < 30) {
    return 0.67 * flour
  } else if (mouthfeel > 90) {
    return 0.33 * flour
  } else if (mouthfeel > 80) {
    return 0.5 * flour
  } else if (mouthfeel > 70) {
    return 0.67 * flour
  } else {
    return flour
  }
}

/**
 * Calculates how much total sugar is needed based on the flour:sugar ratio and the desired surface quality. For cookies with a smoother surface, some of the required sugar will be replaced with corn syrup.
 * @param  {Number} amount  Total grams of sugar
 * @param  {Number} surface The surface percentage value 0-100
 * @return {Number}         Grams of sugar needed
 */
export const getSugar = (totalSugar, surface) => {
  if (surface < 10) {
    return totalSugar * 0.85
  } else if (surface < 20) {
    return totalSugar * 0.9
  } else if (surface < 30) {
    return totalSugar * 0.95
  } else {
    return totalSugar
  }
}

/**
 * Calculates the updated surface property. Surface quality is impacted by ingredients that also impact thickness. Thinner cookies may contain ingredients which also result in a smoother surface.
 * @param  {String} property  The property that the user adjusted to trigger this function
 * @param  {Number} surface   The current surface percentage value 0-100
 * @param  {Number} thickness The thickness percentage value 0-100
 * @return {Number}           The resulting surface percentage value 0-100
 */
export const getSurface = (property, surface, thickness) => {
  if (property === 'thickness' && thickness < 50) {
    if (surface >= 10) return surface - 10
  }
  return surface
}

/**
 * Calculates the updated texture property. Texture is impacted by the brown:white sugar ratio, which is determined by the desired color and thickness properties. More brown sugar results not only in darker, thicker cookies, but also a softer texture.
 * @param  {String} property             The property that the user adjusted to trigger this function
 * @param  {Number} brownWhiteSugarRatio The brown:white sugar ratio
 * @param  {Number} texture              The current texture percentage value 0-100
 * @return {Number}                      The resulting texture percentage value 0-100
 */
export const getTexture = (property, brownWhiteSugarRatio, texture) => {
  if (property === 'color' || property === 'thickness') {
    if (brownWhiteSugarRatio < 1.1 && brownWhiteSugarRatio / 1.1 > 0.5) {
      if (texture <= 90) return texture + 10
    }
    if (brownWhiteSugarRatio > 1.1 && brownWhiteSugarRatio < 3.0 && brownWhiteSugarRatio / 1.9 > 0.5) {
      if (texture >= 10) return texture - 10
    }
  }
  return texture
}

/**
 * Calculates the updated thickness property. Thickness is impacted by the brown:white sugar ratio, which is determined by the desired color. Thickness is also impacted by ingredients that also impact surface quality, such as vegetable oil and corn syrup. Thickness is also impacted by the heat exposure - a longer time in the oven at a lower temperature would result in thinner cookies.
 * @param  {String} property             The property that the user adjusted to trigger this function
 * @param  {Number} brownWhiteSugarRatio The brown:white sugar ratio
 * @param  {Number} thickness            The current thickness percentage value 0-100
 * @return {Number}                      The resulting thickness percentage value 0-100
 */
export const getThickness = (property, brownWhiteSugarRatio, surface, thickness, heatExposure) => {
  if (property === 'color') {
    if (brownWhiteSugarRatio < 1.1 && brownWhiteSugarRatio / 1.1 > 0.5) {
      if (thickness >= 10) return thickness - 10
    }
    if (brownWhiteSugarRatio > 1.1 && brownWhiteSugarRatio < 3.0 && brownWhiteSugarRatio / 1.9 > 0.5) {
      if (thickness <= 90) return thickness + 10
    }
  } else if (property === 'surface' && surface < 30) {
    if (thickness >= 10) return thickness - 10
  } else if (property === 'thickness') {
    return (heatExposure - 18) / -0.025
  } else if (property !== 'thickness') {
    if (brownWhiteSugarRatio < 1.1 && brownWhiteSugarRatio / 1.1 > 0.5) {
      if (thickness >= 10) return thickness - 10
    }
    if (brownWhiteSugarRatio > 1.1 && brownWhiteSugarRatio < 3.0 && brownWhiteSugarRatio / 1.9 > 0.5) {
      if (thickness <= 90) return thickness + 10
    }
  }
  return thickness
}

/**
 * Determines whether a potential step should be added to the instructions for the recipe based on the ingredients that will be used and the desired properties of the cookies.
 * @param  {Object} step        A step, containing properties such as the ingredients needed and the property thresholds
 * @param  {Array} ingredients A collection of objects representing each ingredient in the recipe
 * @param  {Object} properties  A set of desired properties for the cookies
 * @return {Boolean}             A true/false decision on whether the step should be added to the recipe method
 */
export const shouldAddStep = (step, ingredients, properties) => {
  let addStep = true

  // don't add this step if we're not using ingredients required for the step
  step.ingredientsNeeded.every((requiredIngredient) => {
    const matchingIngredients = ingredients.filter((ingredient) => {
      return ingredient.name === requiredIngredient
    })
    if (!matchingIngredients.length) {
      addStep = false
      return false
    }
  })

  // don't add this step if the properties don't meet the critera for the step
  const { thresholds } = step
  for (const property in properties) {
    if (properties[property] < thresholds[property].min || properties[property] > thresholds[property].max) {
      addStep = false
      break
    }
  }

  return addStep
}

// ------UPDATE RECIPE FACTORY------

/**
 * [getUpdateRecipeFunction description]
 * @return {type} [description]
 */
export const getUpdateRecipeFunction = () => {
  let currentRecipe = {}
  let potentialMethod = []
  recipe.subscribe((store) => {
    currentRecipe = store
  })
  method.subscribe((store) => {
    potentialMethod = store
  })

  // Return the function to update the recipe
  // This creates a recipe (ingredients + method) for making a single cookie that has the desired properties
  return (property) => {
    const { properties } = currentRecipe
    const { color, mouthfeel, surface, texture, thickness } = properties

    let newProperties = properties
    let newIngredients = []
    let newMethod = []

    // --EGGS--

    const eggs = getEggs(texture)
    const additionalEggYolk = getAdditionalEggYolk(texture)

    // 1 egg = 57g
    newIngredients.push({
      amount: eggs * 57,
      checked: false,
      name: 'Beaten egg',
      unit: 'g',
    })

    // 1 yolk = 18g
    newIngredients.push({
      amount: additionalEggYolk * 18,
      checked: false,
      name: 'Additional egg yolk',
      unit: 'g',
    })

    // --FAT--

    const liquidRatio = getDryLiquidRatio(surface)
    const flour = getFlour(liquidRatio, eggs, additionalEggYolk, getFat(thickness))
    newIngredients.push({
      amount: flour / 1.74,
      checked: false,
      name: getFatType(thickness),
      unit: 'g',
    })

    // --FLOUR--

    newIngredients.push({
      amount: getCakeFlour(flour, texture, mouthfeel),
      checked: false,
      name: 'Cake flour',
      unit: 'g',
    })

    newIngredients.push({
      amount: getPlainFlour(flour, mouthfeel),
      checked: false,
      name: 'Plain flour',
      unit: 'g',
    })

    newIngredients.push({
      amount: getBreadFlour(flour, mouthfeel),
      checked: false,
      name: 'Bread flour',
      unit: 'g',
    })

    // --SUGAR--

    const flourSugarRatio = getFlourSugarRatio(texture)
    const sugar = getSugar(flour / flourSugarRatio, surface)
    const brownWhiteSugarRatio = getBrownWhiteSugarRatio(property, color, thickness)

    newIngredients.push({
      amount: sugar / (1 + brownWhiteSugarRatio),
      checked: false,
      name: 'Granulated sugar',
      unit: 'g',
    })

    const brownSugar = sugar - sugar / (1 + brownWhiteSugarRatio)

    newIngredients.push({
      amount: brownSugar,
      checked: false,
      name: 'Brown sugar',
      unit: 'g',
    })

    newIngredients.push({
      amount: getCornSyrup(flour / flourSugarRatio, surface),
      checked: false,
      name: 'Corn syrup',
      unit: 'g',
    })

    // --RAISING AGENTS--

    newIngredients.push({
      amount: getBakingSoda(texture),
      checked: false,
      name: 'Baking soda',
      unit: 'tsp',
    })

    newIngredients.push({
      amount: getBakingPowder(property, surface, thickness),
      checked: false,
      name: 'Baking powder',
      unit: 'tsp',
    })

    // --OTHER--

    if (properties.color >= 40 && properties.mouthfeel >= 80) {
      newIngredients.push({
        amount: brownSugar / sugar > 0.5 ? 0.08 : 0,
        checked: false,
        name: 'Hot water',
        unit: 'tsp',
      })
    }

    newIngredients.push({
      amount: mouthfeel < 30 ? 0.08 : 0,
      checked: false,
      name: 'Cornstarch',
      unit: 'g',
    })

    newIngredients.push({
      amount: 0.04,
      checked: false,
      name: 'Salt',
      unit: 'tsp',
    })

    newIngredients.push({
      amount: 0.04,
      checked: false,
      name: 'Vanilla extract',
      unit: 'tsp',
    })

    newIngredients.push({
      amount: 6,
      checked: false,
      name: 'Chopped dark chocolate',
      unit: 'g',
    })

    // --BAKING CONDITIONS--
    const bakingTime = getBakingTime(property, color, thickness)
    const heatExposure = getHeatExposure(texture)
    const bakingTemperature = getBakingTemperature(heatExposure, bakingTime)

    // --NEW PROPERTIES--

    // "you can't always get what you want" - Mick Jagger
    // Some property adjustment impact others...

    if (property !== 'color')
      newProperties.color = getColor(property, brownWhiteSugarRatio, properties.color, properties.surface)
    if (property !== 'thickness')
      newProperties.thickness = getThickness(
        property,
        brownWhiteSugarRatio,
        properties.surface,
        properties.thickness,
        heatExposure
      )
    if (property !== 'texture') newProperties.texture = getTexture(property, brownWhiteSugarRatio, properties.texture)
    if (property !== 'surface') newProperties.surface = getSurface(property, properties.surface, properties.thickness)

    // --METHOD--

    // time needed for the entire recipe
    let time = bakingTime

    // this is for replacing any placeholders in the method instructions
    const mappedValues = {
      '{TIME}': bakingTime,
      '{TEMPERATURE}': bakingTemperature,
    }

    // review the criteria for each potential step against the updated ingredients and properties
    potentialMethod.forEach((step) => {
      if (shouldAddStep(step, newIngredients, newProperties)) {
        // if it meets the criteria, add the step to the method list
        newMethod.push(replaceAll(step.instruction, mappedValues))
        time += step.timeNeeded
      }
    })

    // --UPDATE THE STORE--

    recipe.set(
      Object.assign(currentRecipe, {
        bakingConditions: {
          temperature: bakingTemperature,
          time: bakingTime,
        },
        ingredients: newIngredients,
        method: newMethod,
        preparationTime: time,
        properties: newProperties,
      })
    )

    // --UPDATE LOCAL STORAGE--

    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('recipe', JSON.stringify(currentRecipe))
      } catch (e) {
        return false
      }
    }
  }
}

// ------SET RECIPE------

/**
 * Sets the recipe to the last used recipe in local storage.
 */
export const setRecipe = () => {
  let currentRecipe = {}
  recipe.subscribe((store) => {
    currentRecipe = store
  })

  recipe.set(Object.assign(currentRecipe, JSON.parse(localStorage.getItem('recipe'))))
}

// ------RICH DATA------

/**
 * Adds a script tag containing rich data to the document.
 */
export const addRichData = () => {
  let currentRecipe = {}
  recipe.subscribe((store) => {
    currentRecipe = store
  })

  // Format the date in ISO-8601
  const getDate = () => {
    const date = new Date()
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
    return `${year}-${month}-${day}`
  }

  // Format the properties
  const getDescription = () => {
    const { color, mouthfeel, surface, texture, thickness } = currentRecipe.properties

    return `${color}% dark, ${mouthfeel}% chewy, ${surface}% craggy surface, ${texture}% crunchy, and ${thickness}% thick.`
  }

  // Format the preparation time in ISO-8601
  const getPreparationTime = (t) => {
    if (t >= 60) {
      return `PT${Math.floor(t / 60)}H${Math.round(t % 60)}M`
    } else return `PT${t}M`
  }

  // Format the ingredients list as an array of strings
  const getIngredients = () => {
    let ingredients = []

    currentRecipe.ingredients.forEach((ingredient) => {
      let amount = ingredient.amount
      if (amount !== 0) {
        if (ingredient.unit !== 'tsp') amount = Math.round(amount * currentRecipe.numberOfCookies)
        else amount = parseFloat(amount * currentRecipe.numberOfCookies).toPrecision(2)

        ingredients.push(`${amount}${ingredient.unit} ${ingredient.name}`)
      }
    })

    return ingredients
  }

  let richData = document.createElement('script')
  richData.type = 'application/ld+json'
  richData.innerText = JSON.stringify({
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    name: 'The Perfect Cookie',
    author: {
      '@type': 'Person',
      name: 'Darryl Snow',
    },
    recipeCuisine: 'American',
    datePublished: getDate(),
    description: getDescription(),
    prepTime: getPreparationTime(currentRecipe.preparationTime),
    cookTime: `PT${currentRecipe.bakingConditions.time}M`,
    recipeIngredient: getIngredients(),
    recipeInstructions: currentRecipe.method.join(' '),
    recipeYield: currentRecipe.numberOfCookies,
  })
  document.head.appendChild(richData)
}
