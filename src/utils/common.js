/**
 * @description 获取数据类型
 * @author Y-Hui
 * @param {any} param
 * @returns {String}
 * Eg: String || Boolean || Number || Array
 */
function getType(param) {
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
function isFalsy(param) {
  const baseFalsy = [false, null, undefined, '']
  let result = false

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

const verifyEmpty = {
  Object: (param) => {
    let result = false
    if (Object.keys(param).length === 0) {
      result = true
    }
    return result
  },
  Array: (param) => {
    let result = false
    if (param.length === 0 || param[0].toString().trim() === '') {
      result = true
    }
    return result
  }
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
function isEmpty(param) {
  return verifyEmpty[getType(param)](param)
}

/**
 * @description 数组转字符串，逗号分割
 * @param {String} str 字符串
 * @returns {Array}
 */
function str2Arr(str) {
  let result = []
  if (getType(str) === 'String') {
    result = str.split(',')
  }
  return result
}

/**
 * @deprecated 查找对象是否包含指定属性
 * @param {*} obj 目标对象
 * @param {*} attr 属性名称
 */
function hasAttr(obj, attr) {
  return Object.prototype.hasOwnProperty.call(obj, attr)
}

export {
  getType,
  isFalsy,
  isEmpty,
  str2Arr,
  hasAttr
}
