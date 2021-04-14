import { version } from '../package.json'
const toRegexStr = _ => _.join('|')
export const COLORS = 'colors' // 选填
export const DIR_PATH = 'dirPath' // 必填
export const GENERATE = 'generate' // 必填 生成地址
export const UNIT = 'unit' // 选填 单位
export const IMPORTANT = 'important' // 选填 单位
export const GLOB_REG = 'globReg'
// 以下是项目配置 不从配置文件读
export const EXT_NAME = 'extNames'
export const MODIFY_RULES = 'modifyRules'
export const MEDIA_QUERIES = 'mediaQueries'
// 以下是枚举

export const JUSTIFY_CONTENT_ENUM = ['center', 'start', 'end', 'flex-start', 'flex-end', 'left', 'right', 'space-between', 'between', 'space-around', 'around', 'space-evenly', 'evenly', 'stretch', 'inherit', 'initial', 'unset', 'normal']
export const ALIGN_ITEMS_ENUM = ['baseline', 'center', 'end', 'flex-end', 'flex-start', 'inherit', 'initial', 'normal', 'self-end', 'self-start', 'start', 'stretch', 'unset']

export const CURSOR_ENUM = ['auto', 'default', 'none', 'context-menu', 'help', 'pointer', 'progress', 'wait', 'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'e-resize', 'n-resize', 'ne-resize', 'nw-resize', 's-resize', 'se-resize', 'sw-resize', 'w-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'zoom-in', 'zoom-out', 'grab', 'grabbing']

const UNIT_ENUM = ['cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'p']

const PSEUDO_LIST = ['active', 'any-link', 'blank', 'checked', 'current', 'default', 'defined', 'disabled', 'drop', 'empty', 'enabled', 'first', 'first-child', 'first-of-type', 'fullscreen', 'future', 'focus', 'focus-visible', 'focus-within', 'host', 'hover', 'indeterminate', 'in-range', 'invalid', 'last-child', 'last-of-type', 'left', 'link', 'local-link', 'only-child', 'only-of-type', 'optional', 'out-of-range', 'past', 'placeholder-shown', 'read-only', 'read-write', 'required', 'right', 'root', 'scope', 'target', 'target-within', 'user-invalid', 'valid', 'visited']
export const VERTICAL_ALIGN_ENUM = ['baseline', 'sub', 'super', 'text-top', 'text-bottom', 'middle', 'top', 'bottom', 'inherit', 'initial', 'unset']
export const PSEUDO_STR = toRegexStr(PSEUDO_LIST)
export const JUSTIFY_CONTENT_ENUM_STR = toRegexStr(JUSTIFY_CONTENT_ENUM)
export const ALIGN_ITEMS_ENUM_STR = toRegexStr(ALIGN_ITEMS_ENUM)
export const CURSOR_ENUM_STR = toRegexStr(CURSOR_ENUM)
export const UNIT_ENUM_STR = toRegexStr(UNIT_ENUM)
export const VERTICAL_ALIGN_STR = toRegexStr(VERTICAL_ALIGN_ENUM)

// 文件开头
export let CSS_ANNOTATION = ''
CSS_ANNOTATION += '@charset "UTF-8";\n'
CSS_ANNOTATION += '/* https://github.com/macheteHot/css-generator-plugin/\n'
CSS_ANNOTATION += `   version: v${version}\n`
CSS_ANNOTATION += '   this file will auto generate and update\n'
CSS_ANNOTATION += '   DO NOT EDIT THIS FILE!\n'
CSS_ANNOTATION += '   DO NOT EDIT THIS FILE!\n'
CSS_ANNOTATION += '   DO NOT EDIT THIS FILE!\n'
CSS_ANNOTATION += '*/\n\n'

export const BASE_MEDIA_QUERY = {
  sm : '(min-width: 640px)',
  md : '(min-width: 768px)',
  lg : '(min-width: 1024px)',
  xl : '(min-width: 1280px)'
}

export const BASE_MEDIA_QUERY_KEY = Object.keys(BASE_MEDIA_QUERY)
export const NONNEGATIVE_NUMBER_REGEX_STR = '(0|([1-9]\\d*))(\\.\\d*[1-9])?'
export const DIRECTION_MAP = new Map()
DIRECTION_MAP.set(undefined, ['']) // 全部
DIRECTION_MAP.set('x', ['left', 'right'])
DIRECTION_MAP.set('y', ['top', 'bottom'])
DIRECTION_MAP.set('t', ['top'])
DIRECTION_MAP.set('r', ['right'])
DIRECTION_MAP.set('b', ['bottom'])
DIRECTION_MAP.set('l', ['left'])
DIRECTION_MAP.set('top', ['top'])
DIRECTION_MAP.set('right', ['right'])
DIRECTION_MAP.set('bottom', ['bottom'])
DIRECTION_MAP.set('left', ['left'])
