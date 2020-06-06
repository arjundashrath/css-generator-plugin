const { getCss } = require('../utils')
const { Random } = require('mockjs')

describe('测试单位转换是否正常', () => {
  const unitList = ['rem', 'em', 'vw', 'vh', 'p', 'px', 'rpx', '']
  unitList.forEach(unit => {
    const css = getCss(`w-20${unit}`)
    it(`测试单位${unit}`, () => {
      if (unit === 'p') {
        expect(css).toBe(`.w-20${unit}{width:20%;}`)
      } else if (unit === '') {
        expect(css).toBe(`.w-20${unit}{width:20px;}`)
      } else {
        expect(css).toBe(`.w-20${unit}{width:20${unit};}`)
      }
    })
  })
})

describe('测试10次数值是否正常', () => {
  for (let index = 0; index < 10; index++) {
    const num = Random.integer(0, 99999999)
    it(`测试数值${num}`, () => {
      expect(getCss(`w-${num}vh`)).toBe(`.w-${num}vh{width:${num}vh;}`)
    })
  }
})
describe('测试10次负数是否正常', () => {
  for (let index = 0; index < 10; index++) {
    const num = Random.integer(-9999999, 0)
    it(`测试负数${num}`, () => {
      expect(getCss(`m-m${num}`)).toBe(`.m-m${num}{margin:${num}px;}`)
    })
  }
})
