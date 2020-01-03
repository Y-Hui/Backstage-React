/**
 * @description 查找对象中的属性
 * @param {*} obj 需要查找的对象
 * @param {*} attr 属性名称
 * @returns {Boolean}
 */
function findAttr(obj, attr) {
  return Object.prototype.hasOwnProperty.call(obj, attr)
}

export default findAttr
