export const replaceAll = (str, mapObj) => {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'g')

  return str.replace(re, function (matched) {
    return mapObj[matched]
  })
}

export const roundToTwo = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2')
}
