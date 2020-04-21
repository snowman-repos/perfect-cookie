import { recipe } from './store.js'

export const replaceAll = (str, mapObj) => {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'g')

  return str.replace(re, function (matched) {
    return mapObj[matched]
  })
}

export const roundToTwo = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2')
}

export const getUpdateRecipeFunction = () => {
  let currentRecipe = {}
  recipe.subscribe((store) => {
    currentRecipe = store
  })
  return (property) => {
    const { properties } = currentRecipe

    let newProperties = properties

    // calculate required egg based on texture
    // = -0.00038(texture) + 0.065
    const eggs = -0.00038 * properties.texture + 0.065

    // caculate required additional egg yolk based on texture
    let additionalEggYolk = 0
    switch (properties.texture) {
      case 0:
        additionalEggYolk = 0.07
        break
      case 10:
        additionalEggYolk = 0.04
        break
      case 20:
        additionalEggYolk = 0.02
        break
    }

    // calculate fat type based on spread
    let fatType = 'Butter'
    if (properties.spread < 20) fatType = 'Vegetable oil'

    // calculate fat amount based on spread
    // = -0.021(spread) + 7.7
    let fat = -0.021 * properties.spread + 7.7

    // calculate liquid ratio based on surface
    // = 0.021(surface) + 0.65
    const liquidRatio = 0.021 * properties.surface + 0.65

    // calculate flour based on fat, egg, and liquid ratio
    // 1 egg = 50g
    // 1 yolk = 18g
    const flour = liquidRatio * (eggs * 50 + additionalEggYolk * 18 + fat)
    fat = flour / 1.74

    // calculate flour type based on texture & mouthfeel
    let flours = {
      cake: 0,
      plain: 0,
      bread: 0,
    }
    if (properties.texture < 10 && properties.mouthfeel < 10) {
      flours.cake = flour
    } else if (properties.mouthfeel < 20) {
      flours.cake = 0.5 * flour
      flours.plain = 0.5 * flour
    } else if (properties.mouthfeel < 30) {
      flours.cake = 0.33 * flour
      flours.plain = 0.67 * flour
    } else if (properties.mouthfeel > 70) {
      flours.plain = 0.67 * flour
      flours.bread = 0.33 * flour
    } else if (properties.mouthfeel > 80) {
      flours.plain = 0.5 * flour
      flours.bread = 0.5 * flour
    } else if (properties.mouthfeel > 90) {
      flours.plain = 0.33 * flour
      flours.bread = 0.67 * flour
    } else {
      flours.plain = flour
    }

    // calculate required sugar based on texture
    // = 0.0025(texture) + 1.3
    const flourSugarRatio = 0.0025 * properties.texture + 1.3
    let sugar = flour / flourSugarRatio

    // calculate required corn syrup based on surface & color
    let cornSyrup = 0
    if (properties.surface < 10) {
      cornSyrup = sugar * 0.15
      sugar = sugar * 0.85
      if (properties.color <= 85) newProperties.color = properties.color + 15
    } else if (properties.surface < 20) {
      cornSyrup = 10
      sugar = sugar * 0.9
      if (properties.color <= 90) newProperties.color = properties.color + 10
    } else if (properties.surface < 30) {
      cornSyrup = 5
      sugar = sugar * 0.95
      if (properties.color <= 95) newProperties.color = properties.color + 5
    }

    let sugars = {
      white: 0,
      brown: 0,
      cornSyrup,
    }

    let brownWhiteSugarRatio = 0
    // calculate brown/white sugar ratio based on texture & color & spread
    if (property === 'color') {
      // brown / white = 0.0212(color) + 0.27
      brownWhiteSugarRatio = 0.0212 * properties.color - 0.27
      sugars.white = sugar / (1 + brownWhiteSugarRatio)
      sugars.brown = sugar - sugars.white
      //update texture, spread
      if (brownWhiteSugarRatio < 1.1 && brownWhiteSugarRatio / 1.1 > 0.5) {
        if (properties.spread >= 5) newProperties.spread = properties.spread - 5
        if (properties.texture <= 90) newProperties.texture = properties.texture + 10
      }
      if (brownWhiteSugarRatio > 1.1 && brownWhiteSugarRatio < 3.0 && brownWhiteSugarRatio / 1.9 > 0.5) {
        if (properties.spread <= 90) newProperties.spread = properties.spread + 10
        if (properties.texture >= 10) newProperties.texture = properties.texture - 10
      }
    } else if (property === 'spread') {
      // brown / white = 0.005(spread) + 0.75
      brownWhiteSugarRatio = 0.005 * properties.spread + 0.75
      sugars.white = sugar / (1 + brownWhiteSugarRatio)
      sugars.brown = sugar - sugars.white
      //update texture, color
      if (brownWhiteSugarRatio < 1.1 && brownWhiteSugarRatio / 1.1 > 0.5) {
        if (properties.color >= 5) newProperties.color = properties.color - 5
        if (properties.texture <= 90) newProperties.texture = properties.texture + 10
      }
      if (brownWhiteSugarRatio > 1.1 && brownWhiteSugarRatio < 3.0 && brownWhiteSugarRatio / 1.9 > 0.5) {
        if (properties.color <= 90) newProperties.color = properties.color + 10
        if (properties.texture >= 10) newProperties.texture = properties.texture - 10
      }
    } else {
      // brown / white = -0.0165(texture) + 1.8
      brownWhiteSugarRatio = -0.0165 * properties.spread + 1.8
      sugars.white = sugar / (1 + brownWhiteSugarRatio)
      sugars.brown = sugar - sugars.white
      //update color,spread
      if (brownWhiteSugarRatio < 1.1 && brownWhiteSugarRatio / 1.1 > 0.5) {
        if (properties.color >= 5) newProperties.color = properties.color - 5
        if (properties.spread >= 5) newProperties.spread = properties.spread - 5
      }
      if (brownWhiteSugarRatio > 1.1 && brownWhiteSugarRatio < 3.0 && brownWhiteSugarRatio / 1.9 > 0.5) {
        if (properties.color <= 90) newProperties.color = properties.color + 10
        if (properties.spread <= 90) newProperties.spread = properties.spread + 10
      }
    }

    // caculate amount of baking soda based on texture
    let bakingSoda = 0.0625
    switch (properties.texture) {
      case 60:
        bakingSoda = 0.047
        break
      case 70:
        bakingSoda = 0.031
        break
      case 80:
        bakingSoda = 0.016
        break
      case 90:
        bakingSoda = 0
        break
      case 100:
        bakingSoda = 0
        break
    }

    let bakingPowder = 0
    // calculate amount of baking powder based on surface & spread
    // = -0.00062x + 0.0188
    if (property === 'surface' && properties.surface < 30) {
      bakingPowder = -0.00062 * properties.surface + 0.0188
      if (properties.spread >= 10) newProperties.spread = properties.spread - 10
    }
    // = -0.00062x + 0.0188
    if (property === 'spread' && properties.spread < 50) {
      bakingPowder = -0.00037 * properties.spread + 0.0188
      if (properties.surface >= 10) newProperties.surface = properties.surface - 10
    }

    let water = 0
    if (sugars.brown / sugar > 0.5) water = 0.08

    let cornstarch = 0
    if (properties.mouthfeel < 30) cornstarch = 0.08

    let bakingTime = 12
    // calculate baking time based on color & spread
    if (property === 'color') {
      // = 0.024(color) + 10.8
      bakingTime = 0.024 * properties.color + 10.8
    } else if (property === 'spread') {
      // = 0.01(spread) + 11.5
      bakingTime = 0.01 * properties.spread + 11.5
    }

    // calculate heat exposure based on texture
    let bakingTemperature = 176
    // = 0.09(texture) + 12.5
    const heatExposure = 0.09 * properties.texture + 12.5
    bakingTemperature = heatExposure * bakingTime

    // update spread
    if (property === 'spread') {
      newProperties.spread = (heatExposure - 18) / -0.025
    }

    let newIngredients = []

    newIngredients.push({
      amount: flours.cake,
      name: 'Cake flour',
      unit: 'g',
    })

    newIngredients.push({
      amount: flours.plain,
      name: 'Plain flour',
      unit: 'g',
    })

    newIngredients.push({
      amount: flours.bread,
      name: 'Bread flour',
      unit: 'g',
    })

    newIngredients.push({
      amount: fat,
      name: fatType,
      unit: 'g',
    })

    newIngredients.push({
      amount: sugars.white,
      name: 'Granulated sugar',
      unit: 'g',
    })

    newIngredients.push({
      amount: sugars.brown,
      name: 'Brown sugar',
      unit: 'g',
    })

    newIngredients.push({
      amount: sugars.cornSyrup,
      name: 'Corn syrup',
      unit: 'g',
    })

    newIngredients.push({
      amount: eggs * 57,
      name: 'Beaten egg',
      unit: 'g',
    })

    newIngredients.push({
      amount: additionalEggYolk * 18,
      name: 'Additional egg yolk',
      unit: 'g',
    })

    newIngredients.push({
      amount: bakingSoda,
      name: 'Baking soda',
      unit: 'tsp',
    })

    newIngredients.push({
      amount: bakingPowder,
      name: 'Baking powder',
      unit: 'tsp',
    })

    newIngredients.push({
      amount: 0.04,
      name: 'Salt',
      unit: 'tsp',
    })

    newIngredients.push({
      amount: 0.04,
      name: 'Vanilla extract',
      unit: 'tsp',
    })

    newIngredients.push({
      amount: cornstarch,
      name: 'Cornstarch',
      unit: 'g',
    })

    newIngredients.push({
      amount: water,
      name: 'Hot water',
      unit: 'tsp',
    })

    newIngredients.push({
      amount: 6,
      name: 'Chopped dark chocolate',
      unit: 'g',
    })

    recipe.set(
      Object.assign(currentRecipe, {
        properties: newProperties,
        ingredients: newIngredients,
      })
    )

    // update method based on properties
    // update baking conditions

    // set recipe
    // recipe.set(tempRecipe)
  }
}
