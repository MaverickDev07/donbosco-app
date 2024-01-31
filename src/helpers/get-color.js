import { get } from 'lodash'
const themeBackgroundColor = {
  1: '192,192,192',
  2: '229,228,193',
  3: '193,229,212',
  4: '197,193,229',
  5: '229,193,201',
  6: '0,122,255',
}
const themeBackgroundAlpha = {
  A: 100,
  B: 90,
  C: 80,
}
const themeTextColor = {
  1: '#363636',
  2: '#73735B',
  3: '#3C554A',
  4: '#3E3B55',
  5: '#603942',
  6: '#E4FAFF',
}

const themeTextColorAny = {
  1: '#363636',
  2: '#73735B',
  3: '#3C554A',
  4: '#3E3B55',
  5: '#603942',
  6: '#0000af',
}
export const getColor = (curso) => {
  const data = curso.split('')
  const cursoNumber = get(data, [0], '1')
  const cursoLiteral = get(data, [1], 'A')
  const backgroundColor =
    `rgba(` +
    `${get(themeBackgroundColor, [cursoNumber], '218,112,112')},` +
    `${get(themeBackgroundAlpha, [cursoLiteral], '100')}%)`
  const textColor = get(themeTextColor, [cursoNumber], '#3F2020')
  const textColorAny = get(themeTextColorAny, [cursoNumber], '#3F2020')
  return {
    backgroundColor,
    textColor,
    textColorAny,
  }
}
