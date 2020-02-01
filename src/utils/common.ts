import verifyEmpty from './verifyEmpty'
/**
 * @description 获取数据类型
 * @author Y-Hui
 * @param {any} param
 * @returns {String}
 * Eg: String || Boolean || Number || Array
 */
export function getType(param:any):string {
  return Object.prototype.toString.call(param).replace(/object |\[|\]/g, '')
}

/**
 * @description 是否为假值
 * @author Y-Hui
 * @param {any} param
 * @returns {Boolean}
 * @note 在该函数中 0 不会被认定为假值
 * @note 有关 falsy 的定义 https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy
 */
export function isFalsy(param:any):boolean {
  const baseFalsy:Array<any> = [false, null, undefined, '']
  let result:boolean = false
  switch (getType(param)) {
    case 'Number':
      if (Number.isNaN(param)) {
        result = true
      }
      break
    case 'String':
      if (baseFalsy.includes(param.trim())) {
        result = true
      }
      break
    default:
      if (baseFalsy.includes(param)) {
        result = true
      }
      break
  }
  return result
}

/**
 * @description 判断数组或对象是否为空
 * @author Y-Hui
 * @param {any} param
 * @returns {Boolean}
 * @note 在该函数中若数组中有且仅有一个 '' 值，则会被判断为空.
 *
 * Eg: [] || [''] || {}
 */
export function isEmpty(param:object|Array<any>):boolean {
  return verifyEmpty[getType(param)](param)
}

/**
 * @description 数组转字符串，逗号分割
 * @param {String} str 字符串
 * @returns {Array}
 */
export function str2Arr(str:string) {
  let result:Array<string> = []
  if (getType(str) === 'String') {
    result = str.split(',')
  }
  return result
}

/**
 * @description 查找对象是否包含指定属性
 * @param obj 目标对象
 * @param attr 属性名称
 */
export function hasAttr(obj:any, attr:any):boolean {
  return Object.prototype.hasOwnProperty.call(obj, attr)
}
