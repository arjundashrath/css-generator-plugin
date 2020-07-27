/**
 * order 450
 */

module.exports = {
  regExp: /^(text-)?ellipsis(-(?<num>[1-9]\d*))?$/,
  render ({ groups }) {
    let { num } = groups
    const base = { name: '', order: 450 }
    if (parseInt(num) === 1) {
      num = undefined // 和没写是一样的
    }
    if (num === undefined) {
      return {
        ...base,
        num: 0,
        css: [
          'display: inline-block',
          'overflow: hidden',
          'text-overflow: ellipsis',
          'white-space: nowrap'
        ]
      }
    } else {
      return {
        ...base,
        num,
        css: [
          'overflow: hidden',
          'text-overflow: ellipsis',
          'display: -webkit-box',
          `-webkit-line-clamp: ${num}`,
          '-webkit-box-orient: vertical'
        ]
      }
    }
  }
}
