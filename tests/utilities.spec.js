import {
  debounce,
  replaceAll,
  roundToTwo,
  getAdditionalEggYolk,
  getBakingPowder,
  getBakingSoda,
  getHeatExposure,
  getBakingTime,
  getBreadFlour,
  getBrownWhiteSugarRatio,
  getCakeFlour,
  getColor,
  getCornSyrup,
  getEggs,
  getFat,
  getFatType,
  getFlour,
  getFlourSugarRatio,
  getDryLiquidRatio,
  getPlainFlour,
  getSugar,
  getSurface,
  getTexture,
  getThickness,
  shouldAddStep,
  getUpdateRecipeFunction,
  setRecipe,
} from '../src/utilities.js'
import { recipe } from '../src/store.js'

let currentRecipe

recipe.subscribe((actualRecipe) => {
  currentRecipe = actualRecipe
})

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

global.localStorage = new LocalStorageMock()

describe('utility functions', () => {
  test('debounce', () => {
    const mockFunction = jest.fn(() => {})
    const waitTime = 250
    debounce(mockFunction, waitTime)
    expect(mockFunction).not.toHaveBeenCalled()
    setTimeout(() => {
      expect(mockFunction).toHaveBeenCalled()
    }, waitTime)
  })

  test('replaceAll', () => {
    const testString = 'a cookie a day keeps the cookie monster away'
    const testMapObject = {
      cookie: 'apple',
    }
    expect(replaceAll(testString, testMapObject)).toBe('a apple a day keeps the apple monster away')
  })

  test('roundToTwo', () => {
    expect(roundToTwo(1.011)).toBe(1.01)
    expect(roundToTwo(1.015)).toBe(1.02)
    expect(roundToTwo(1.016)).toBe(1.02)
    expect(roundToTwo(1.0)).toBe(1)
    expect(roundToTwo(1.999)).toBe(2)
  })

  test('getAdditionalEggYolk', () => {
    // texture
    expect(parseFloat(getAdditionalEggYolk(0).toFixed(4))).toBe(0.07)
    expect(parseFloat(getAdditionalEggYolk(10).toFixed(4))).toBe(0.04)
    expect(parseFloat(getAdditionalEggYolk(20).toFixed(4))).toBe(0.02)
    expect(getAdditionalEggYolk(30)).toBe(0)
    expect(getAdditionalEggYolk(100)).toBe(0)
  })

  test('getBakingPowder', () => {
    // property, surface, thickness
    expect(parseFloat(getBakingPowder('surface', 0, 0).toFixed(4))).toBe(0.0188)
    expect(parseFloat(getBakingPowder('surface', 10, 0).toFixed(4))).toBe(0.0126)
    expect(parseFloat(getBakingPowder('surface', 20, 0).toFixed(4))).toBe(0.0064)
    expect(getBakingPowder('surface', 30, 0)).toBe(0)
    expect(getBakingPowder('surface', 100, 0)).toBe(0)

    expect(parseFloat(getBakingPowder('thickness', 0, 0).toFixed(4))).toBe(0.0188)
    expect(parseFloat(getBakingPowder('thickness', 0, 10).toFixed(4))).toBe(0.0151)
    expect(parseFloat(getBakingPowder('thickness', 0, 20).toFixed(4))).toBe(0.0114)
    expect(parseFloat(getBakingPowder('thickness', 0, 30).toFixed(4))).toBe(0.0077)
    expect(parseFloat(getBakingPowder('thickness', 0, 40).toFixed(4))).toBe(0.004)
    expect(getBakingPowder('thickness', 0, 50)).toBe(0)
    expect(getBakingPowder('thickness', 0, 100)).toBe(0)

    expect(getBakingPowder('', 0, 0)).toBe(0)
    expect(getBakingPowder('', 10, 10)).toBe(0)
    expect(getBakingPowder('', 100, 100)).toBe(0)
  })

  test('getBakingSoda', () => {
    // texture
    expect(getBakingSoda(0)).toBe(0.0262)
    expect(getBakingSoda(10)).toBe(0.0262)
    expect(getBakingSoda(20)).toBe(0.0262)
    expect(getBakingSoda(30)).toBe(0.0262)
    expect(getBakingSoda(40)).toBe(0.0262)
    expect(getBakingSoda(50)).toBe(0.0262)
    expect(getBakingSoda(60)).toBe(0.02)
    expect(getBakingSoda(70)).toBe(0.013)
    expect(getBakingSoda(80)).toBe(0.007)
    expect(getBakingSoda(90)).toBe(0)
    expect(getBakingSoda(100)).toBe(0)
  })

  test('getHeatExposure', () => {
    // texture
    expect(getHeatExposure(0)).toBe(12.5)
    expect(getHeatExposure(10)).toBe(13.4)
    expect(getHeatExposure(20)).toBe(14.3)
    expect(getHeatExposure(30)).toBe(15.2)
    expect(getHeatExposure(40)).toBe(16.1)
    expect(getHeatExposure(50)).toBe(17)
    expect(getHeatExposure(60)).toBe(17.9)
    expect(getHeatExposure(70)).toBe(18.8)
    expect(getHeatExposure(80)).toBe(19.7)
    expect(getHeatExposure(90)).toBe(20.6)
    expect(getHeatExposure(100)).toBe(21.5)
  })

  test('getBakingTime', () => {
    // property, color, thickness
    expect(getBakingTime('color', 0, 0)).toBe(11)
    expect(getBakingTime('color', 10, 0)).toBe(11)
    expect(getBakingTime('color', 20, 0)).toBe(11)
    expect(getBakingTime('color', 30, 0)).toBe(12)
    expect(getBakingTime('color', 40, 0)).toBe(12)
    expect(getBakingTime('color', 50, 0)).toBe(12)
    expect(getBakingTime('color', 60, 0)).toBe(12)
    expect(getBakingTime('color', 70, 0)).toBe(12)
    expect(getBakingTime('color', 80, 0)).toBe(13)
    expect(getBakingTime('color', 90, 0)).toBe(13)
    expect(getBakingTime('color', 100, 0)).toBe(13)

    expect(getBakingTime('thickness', 0, 0)).toBe(12)
    expect(getBakingTime('thickness', 0, 10)).toBe(12)
    expect(getBakingTime('thickness', 0, 20)).toBe(12)
    expect(getBakingTime('thickness', 0, 30)).toBe(12)
    expect(getBakingTime('thickness', 0, 40)).toBe(12)
    expect(getBakingTime('thickness', 0, 50)).toBe(12)
    expect(getBakingTime('thickness', 0, 60)).toBe(12)
    expect(getBakingTime('thickness', 0, 70)).toBe(12)
    expect(getBakingTime('thickness', 0, 80)).toBe(12)
    expect(getBakingTime('thickness', 0, 90)).toBe(12)
    expect(getBakingTime('thickness', 0, 100)).toBe(13)

    expect(getBakingTime('', 0, 0)).toBe(12)
    expect(getBakingTime('', 10, 10)).toBe(12)
    expect(getBakingTime('', 100, 100)).toBe(12)
  })

  test('getBreadFlour', () => {
    // flour, mouthfeel
    expect(getBreadFlour(1, 0)).toBe(0)
    expect(getBreadFlour(1, 10)).toBe(0)
    expect(getBreadFlour(1, 20)).toBe(0)
    expect(getBreadFlour(1, 30)).toBe(0)
    expect(getBreadFlour(1, 40)).toBe(0)
    expect(getBreadFlour(1, 50)).toBe(0)
    expect(getBreadFlour(1, 60)).toBe(0)
    expect(getBreadFlour(1, 70)).toBe(0)
    expect(parseFloat(getBreadFlour(1, 80).toFixed(2))).toBe(0.33)
    expect(parseFloat(getBreadFlour(1, 90).toFixed(2))).toBe(0.5)
    expect(parseFloat(getBreadFlour(1, 100).toFixed(2))).toBe(0.67)

    expect(getBreadFlour(10, 70)).toBe(0)
    expect(parseFloat(getBreadFlour(10, 80).toFixed(2))).toBe(3.3)
    expect(parseFloat(getBreadFlour(10, 90).toFixed(2))).toBe(5)
    expect(parseFloat(getBreadFlour(10, 100).toFixed(2))).toBe(6.7)
  })

  test('getBrownWhiteSugarRatio', () => {
    // property, color, thickness
    expect(parseFloat(getBrownWhiteSugarRatio('color', 0, 0).toFixed(3))).toBe(-0.27)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 10, 0).toFixed(3))).toBe(-0.058)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 20, 0).toFixed(3))).toBe(0.154)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 30, 0).toFixed(3))).toBe(0.366)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 40, 0).toFixed(3))).toBe(0.578)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 50, 0).toFixed(3))).toBe(0.79)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 60, 0).toFixed(3))).toBe(1.002)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 70, 0).toFixed(3))).toBe(1.214)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 80, 0).toFixed(3))).toBe(1.426)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 90, 0).toFixed(3))).toBe(1.638)
    expect(parseFloat(getBrownWhiteSugarRatio('color', 100, 0).toFixed(3))).toBe(1.85)

    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 0).toFixed(3))).toBe(0.75)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 10).toFixed(3))).toBe(0.8)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 20).toFixed(3))).toBe(0.85)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 30).toFixed(3))).toBe(0.9)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 40).toFixed(3))).toBe(0.95)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 50).toFixed(3))).toBe(1)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 60).toFixed(3))).toBe(1.05)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 70).toFixed(3))).toBe(1.1)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 80).toFixed(3))).toBe(1.15)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 90).toFixed(3))).toBe(1.2)
    expect(parseFloat(getBrownWhiteSugarRatio('thickness', 0, 100).toFixed(3))).toBe(1.25)

    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 0).toFixed(3))).toBe(1.8)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 10).toFixed(3))).toBe(1.635)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 20).toFixed(3))).toBe(1.47)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 30).toFixed(3))).toBe(1.305)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 40).toFixed(3))).toBe(1.14)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 50).toFixed(3))).toBe(0.975)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 60).toFixed(3))).toBe(0.81)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 70).toFixed(3))).toBe(0.645)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 80).toFixed(3))).toBe(0.48)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 90).toFixed(3))).toBe(0.315)
    expect(parseFloat(getBrownWhiteSugarRatio('', 0, 100).toFixed(3))).toBe(0.15)
  })

  test('getCakeFlour', () => {
    // flour, texture, mouthfeel
    expect(getCakeFlour(1, 0, 0)).toBe(1)
    expect(getCakeFlour(1, 10, 0)).toBe(0.5)
    expect(getCakeFlour(1, 100, 0)).toBe(0.5)
    expect(getCakeFlour(1, 0, 10)).toBe(0.5)
    expect(getCakeFlour(1, 0, 20)).toBe(0.33)
    expect(getCakeFlour(1, 0, 30)).toBe(0)
    expect(getCakeFlour(1, 0, 40)).toBe(0)
    expect(getCakeFlour(1, 0, 50)).toBe(0)
    expect(getCakeFlour(1, 0, 60)).toBe(0)
    expect(getCakeFlour(1, 0, 70)).toBe(0)
    expect(getCakeFlour(1, 0, 80)).toBe(0)
    expect(getCakeFlour(1, 0, 90)).toBe(0)
    expect(getCakeFlour(1, 0, 100)).toBe(0)
    expect(getCakeFlour(1, 10, 10)).toBe(0.5)
    expect(getCakeFlour(1, 100, 100)).toBe(0)
  })

  test('getColor', () => {
    // property, brownWhiteSugarRatio, color, surface
    expect(getColor('thickness', 1, 0, 100)).toBe(0)
    expect(getColor('thickness', 1, 10, 100)).toBe(0)
    expect(getColor('thickness', 1, 100, 100)).toBe(90)
    expect(getColor('thickness', 1.1, 0, 100)).toBe(0)
    expect(getColor('thickness', 1.1, 10, 100)).toBe(10)
    expect(getColor('thickness', 1.1, 100, 100)).toBe(100)
    expect(getColor('thickness', 0.1, 0, 100)).toBe(0)
    expect(getColor('thickness', 0.1, 10, 100)).toBe(10)
    expect(getColor('thickness', 0.1, 100, 100)).toBe(100)
    expect(getColor('thickness', 2, 0, 100)).toBe(10)
    expect(getColor('thickness', 2, 10, 100)).toBe(20)
    expect(getColor('thickness', 2, 100, 100)).toBe(100)
    expect(getColor('thickness', 1, 0, 100)).toBe(0)
    expect(getColor('thickness', 1, 10, 100)).toBe(0)
    expect(getColor('thickness', 1, 100, 100)).toBe(90)
    expect(getColor('thickness', 4, 0, 100)).toBe(0)
    expect(getColor('thickness', 4, 10, 100)).toBe(10)
    expect(getColor('thickness', 4, 100, 100)).toBe(100)

    expect(getColor('', 0, 80, 0)).toBe(100)
    expect(getColor('', 0, 80, 10)).toBe(90)
    expect(getColor('', 0, 80, 10)).toBe(90)
    expect(getColor('', 0, 100, 10)).toBe(100)
    expect(getColor('', 0, 90, 20)).toBe(90)
    expect(getColor('', 0, 100, 20)).toBe(100)
    expect(getColor('', 0, 100, 30)).toBe(100)
    expect(getColor('', 0, 100, 100)).toBe(100)
  })

  test('getCornSyrup', () => {
    // totalSugar, surface
    expect(getCornSyrup(100, 0)).toBe(15)
    expect(getCornSyrup(100, 10)).toBe(10)
    expect(getCornSyrup(100, 20)).toBe(5)
    expect(getCornSyrup(100, 30)).toBe(0)
    expect(getCornSyrup(100, 40)).toBe(0)
    expect(getCornSyrup(100, 50)).toBe(0)
    expect(getCornSyrup(100, 60)).toBe(0)
    expect(getCornSyrup(100, 70)).toBe(0)
    expect(getCornSyrup(100, 80)).toBe(0)
    expect(getCornSyrup(100, 90)).toBe(0)
    expect(getCornSyrup(100, 100)).toBe(0)
    expect(getCornSyrup(200, 0)).toBe(30)
  })

  test('getEggs', () => {
    // texture
    expect(parseFloat(getEggs(0).toFixed(4))).toBe(0.065)
    expect(parseFloat(getEggs(10).toFixed(4))).toBe(0.0612)
    expect(parseFloat(getEggs(20).toFixed(4))).toBe(0.0574)
    expect(parseFloat(getEggs(30).toFixed(4))).toBe(0.0536)
    expect(parseFloat(getEggs(40).toFixed(4))).toBe(0.0498)
    expect(parseFloat(getEggs(50).toFixed(4))).toBe(0.046)
    expect(parseFloat(getEggs(60).toFixed(4))).toBe(0.0422)
    expect(parseFloat(getEggs(70).toFixed(4))).toBe(0.0384)
    expect(parseFloat(getEggs(80).toFixed(4))).toBe(0.0346)
    expect(parseFloat(getEggs(90).toFixed(4))).toBe(0.0308)
    expect(parseFloat(getEggs(100).toFixed(4))).toBe(0.027)
  })

  test('getFat', () => {
    // thickness
    expect(parseFloat(getFat(0).toFixed(2))).toBe(7.7)
    expect(parseFloat(getFat(10).toFixed(2))).toBe(7.49)
    expect(parseFloat(getFat(20).toFixed(2))).toBe(7.28)
    expect(parseFloat(getFat(30).toFixed(2))).toBe(7.07)
    expect(parseFloat(getFat(40).toFixed(2))).toBe(6.86)
    expect(parseFloat(getFat(50).toFixed(2))).toBe(6.65)
    expect(parseFloat(getFat(60).toFixed(2))).toBe(6.44)
    expect(parseFloat(getFat(70).toFixed(2))).toBe(6.23)
    expect(parseFloat(getFat(80).toFixed(2))).toBe(6.02)
    expect(parseFloat(getFat(90).toFixed(2))).toBe(5.81)
    expect(parseFloat(getFat(100).toFixed(2))).toBe(5.6)
  })

  test('getFatType', () => {
    // thickness
    expect(getFatType(0)).toBe('Vegetable oil')
    expect(getFatType(10)).toBe('Vegetable oil')
    expect(getFatType(20)).toBe('Butter')
    expect(getFatType(100)).toBe('Butter')
  })

  test('getFlour', () => {
    // liquidRatio, eggs, additionalEggYolk, fat
    expect(getFlour(0, 0, 0, 0)).toBe(0)
    expect(getFlour(1, 1, 0, 100)).toBe(150)
    expect(getFlour(2, 1, 2, 200)).toBe(572)
  })

  test('getFlourSugarRatio', () => {
    // texture
    expect(parseFloat(getFlourSugarRatio(0).toFixed(3))).toBe(1.3)
    expect(parseFloat(getFlourSugarRatio(10).toFixed(3))).toBe(1.325)
    expect(parseFloat(getFlourSugarRatio(20).toFixed(3))).toBe(1.35)
    expect(parseFloat(getFlourSugarRatio(30).toFixed(3))).toBe(1.375)
    expect(parseFloat(getFlourSugarRatio(40).toFixed(3))).toBe(1.4)
    expect(parseFloat(getFlourSugarRatio(50).toFixed(3))).toBe(1.425)
    expect(parseFloat(getFlourSugarRatio(60).toFixed(3))).toBe(1.45)
    expect(parseFloat(getFlourSugarRatio(70).toFixed(3))).toBe(1.475)
    expect(parseFloat(getFlourSugarRatio(80).toFixed(3))).toBe(1.5)
    expect(parseFloat(getFlourSugarRatio(90).toFixed(3))).toBe(1.525)
    expect(parseFloat(getFlourSugarRatio(100).toFixed(3))).toBe(1.55)
  })

  test('getDryLiquidRatio', () => {
    // surface
    expect(parseFloat(getDryLiquidRatio(0).toFixed(2))).toBe(0.65)
    expect(parseFloat(getDryLiquidRatio(10).toFixed(2))).toBe(0.86)
    expect(parseFloat(getDryLiquidRatio(20).toFixed(2))).toBe(1.07)
    expect(parseFloat(getDryLiquidRatio(30).toFixed(2))).toBe(1.28)
    expect(parseFloat(getDryLiquidRatio(40).toFixed(2))).toBe(1.49)
    expect(parseFloat(getDryLiquidRatio(50).toFixed(2))).toBe(1.7)
    expect(parseFloat(getDryLiquidRatio(60).toFixed(2))).toBe(1.91)
    expect(parseFloat(getDryLiquidRatio(70).toFixed(2))).toBe(2.12)
    expect(parseFloat(getDryLiquidRatio(80).toFixed(2))).toBe(2.33)
    expect(parseFloat(getDryLiquidRatio(90).toFixed(2))).toBe(2.54)
    expect(parseFloat(getDryLiquidRatio(100).toFixed(2))).toBe(2.75)
  })

  test('getPlainFlour', () => {
    // flour, mouthfeel
    expect(getPlainFlour(100, 0)).toBe(50)
    expect(getPlainFlour(100, 10)).toBe(50)
    expect(getPlainFlour(100, 20)).toBe(67)
    expect(getPlainFlour(100, 30)).toBe(100)
    expect(getPlainFlour(100, 40)).toBe(100)
    expect(getPlainFlour(100, 50)).toBe(100)
    expect(getPlainFlour(100, 60)).toBe(100)
    expect(getPlainFlour(100, 70)).toBe(100)
    expect(getPlainFlour(100, 80)).toBe(67)
    expect(getPlainFlour(100, 90)).toBe(50)
    expect(getPlainFlour(100, 100)).toBe(33)
  })

  test('getSugar', () => {
    // totalSugar, surface
    expect(getSugar(100, 0)).toBe(85)
    expect(getSugar(100, 10)).toBe(90)
    expect(getSugar(100, 20)).toBe(95)
    expect(getSugar(100, 30)).toBe(100)
    expect(getSugar(100, 40)).toBe(100)
    expect(getSugar(100, 50)).toBe(100)
    expect(getSugar(100, 60)).toBe(100)
    expect(getSugar(100, 70)).toBe(100)
    expect(getSugar(100, 80)).toBe(100)
    expect(getSugar(100, 90)).toBe(100)
    expect(getSugar(100, 100)).toBe(100)
    expect(getSugar(200, 100)).toBe(200)
  })

  test('getSurface', () => {
    // property, surface, thickness
    expect(getSurface('thickness', 0, 0)).toBe(0)
    expect(getSurface('thickness', 10, 0)).toBe(0)
    expect(getSurface('thickness', 20, 0)).toBe(10)
    expect(getSurface('thickness', 30, 0)).toBe(20)
    expect(getSurface('thickness', 0, 50)).toBe(0)
    expect(getSurface('thickness', 10, 50)).toBe(10)
    expect(getSurface('thickness', 20, 50)).toBe(20)
    expect(getSurface('thickness', 30, 50)).toBe(30)
    expect(getSurface('', 0, 0)).toBe(0)
    expect(getSurface('', 10, 0)).toBe(10)
    expect(getSurface('', 100, 0)).toBe(100)
  })

  test('getTexture', () => {
    // property, brownWhiteSugarRatio, texture
    expect(getTexture('color', 1, 0)).toBe(10)
    expect(getTexture('color', 1, 90)).toBe(100)
    expect(getTexture('color', 1, 100)).toBe(100)
    expect(getTexture('color', 0, 0)).toBe(0)
    expect(getTexture('color', 0, 90)).toBe(90)
    expect(getTexture('color', 0, 100)).toBe(100)
    expect(getTexture('color', 1.1, 0)).toBe(0)
    expect(getTexture('color', 1.1, 90)).toBe(90)
    expect(getTexture('color', 1.1, 100)).toBe(100)
    expect(getTexture('color', 3, 0)).toBe(0)
    expect(getTexture('color', 3, 90)).toBe(90)
    expect(getTexture('color', 3, 100)).toBe(100)
    expect(getTexture('color', 1.5, 0)).toBe(0)
    expect(getTexture('color', 1.5, 10)).toBe(0)
    expect(getTexture('color', 1.5, 100)).toBe(90)

    expect(getTexture('thickness', 1, 0)).toBe(10)
    expect(getTexture('thickness', 1, 90)).toBe(100)
    expect(getTexture('thickness', 1, 100)).toBe(100)
    expect(getTexture('thickness', 0, 0)).toBe(0)
    expect(getTexture('thickness', 0, 90)).toBe(90)
    expect(getTexture('thickness', 0, 100)).toBe(100)
    expect(getTexture('thickness', 1.1, 0)).toBe(0)
    expect(getTexture('thickness', 1.1, 90)).toBe(90)
    expect(getTexture('thickness', 1.1, 100)).toBe(100)
    expect(getTexture('thickness', 3, 0)).toBe(0)
    expect(getTexture('thickness', 3, 90)).toBe(90)
    expect(getTexture('thickness', 3, 100)).toBe(100)
    expect(getTexture('thickness', 1.5, 0)).toBe(0)
    expect(getTexture('thickness', 1.5, 10)).toBe(0)
    expect(getTexture('thickness', 1.5, 100)).toBe(90)

    expect(getTexture('', 0, 0)).toBe(0)
    expect(getTexture('', 10, 10)).toBe(10)
    expect(getTexture('', 100, 100)).toBe(100)
  })

  test('getThickness', () => {
    // property, brownWhiteSugarRatio, surface, thickness, heatExposure

    expect(getThickness('color', 1, 0, 0, 0)).toBe(0)
    expect(getThickness('color', 1, 0, 10, 0)).toBe(0)
    expect(getThickness('color', 1, 0, 20, 0)).toBe(10)
    expect(getThickness('color', 0, 0, 50, 0)).toBe(50)
    expect(getThickness('color', 1.2, 0, 80, 0)).toBe(90)
    expect(getThickness('color', 1.2, 0, 90, 0)).toBe(100)
    expect(getThickness('color', 1.2, 0, 100, 0)).toBe(100)
    expect(getThickness('color', 3, 0, 50, 0)).toBe(50)

    expect(getThickness('surface', 0, 0, 0, 0)).toBe(0)
    expect(getThickness('surface', 0, 0, 10, 0)).toBe(0)
    expect(getThickness('surface', 0, 0, 20, 0)).toBe(10)
    expect(getThickness('surface', 0, 30, 20, 0)).toBe(20)

    expect(getThickness('thickness', 0, 0, 0, 36)).toBe(-720)

    expect(getThickness('', 1, 0, 0, 0)).toBe(0)
    expect(getThickness('', 1, 0, 10, 0)).toBe(0)
    expect(getThickness('', 1, 0, 20, 0)).toBe(10)
    expect(getThickness('', 0, 0, 50, 0)).toBe(50)
    expect(getThickness('', 1.2, 0, 80, 0)).toBe(90)
    expect(getThickness('', 1.2, 0, 90, 0)).toBe(100)
    expect(getThickness('', 1.2, 0, 100, 0)).toBe(100)
    expect(getThickness('', 3, 0, 50, 0)).toBe(50)
  })

  test('shouldAddStep', () => {
    // step, ingredients, properties

    let step = {
      ingredientsNeeded: ['a'],
      thresholds: {
        a: {
          min: 0,
          max: 100,
        },
      },
    }

    let ingredients = [
      {
        name: 'b',
      },
    ]

    let properties = {
      a: 0,
    }

    expect(shouldAddStep(step, ingredients, properties)).toBe(false)

    step = {
      ingredientsNeeded: ['a'],
      thresholds: {
        a: {
          min: 10,
          max: 100,
        },
      },
    }

    ingredients = [
      {
        name: 'a',
      },
    ]

    properties = {
      a: 0,
    }

    expect(shouldAddStep(step, ingredients, properties)).toBe(false)

    step = {
      ingredientsNeeded: ['a'],
      thresholds: {
        a: {
          min: 0,
          max: 10,
        },
      },
    }

    ingredients = [
      {
        name: 'a',
      },
    ]

    properties = {
      a: 20,
    }

    expect(shouldAddStep(step, ingredients, properties)).toBe(false)

    step = {
      ingredientsNeeded: ['a'],
      thresholds: {
        a: {
          min: 0,
          max: 100,
        },
      },
    }

    ingredients = [
      {
        name: 'a',
      },
    ]

    properties = {
      a: 50,
    }

    expect(shouldAddStep(step, ingredients, properties)).toBe(true)
  })

  test('getUpdateRecipeFunction', () => {
    expect(typeof getUpdateRecipeFunction()).toBe('function')
  })

  test('setRecipe', () => {
    const recipe = {
      test: 'test',
    }

    localStorage.setItem('recipe', JSON.stringify(recipe))

    setRecipe()

    setTimeout(() => {
      expect(currentRecipe).toBe(recipe)
    }, 1000)
  })
})
