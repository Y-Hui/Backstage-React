/**
 * @description 身份证校验，仅支持第二代居民身份证（18位）
 * @author Y-Hui
 * @param {String} id 身份证号码
 * @returns {Boolean}
 */
function verifyIdCard(id) {
  let result = false
  const matchIdCard = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  if (matchIdCard.test(id)) {
    // 加权系数
    const coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 最终求值结果及对应校验码
    const codeMap = {
      0: '1', 1: '0', 2: 'X', 3: '9', 4: '8', 5: '7', 6: '6', 7: '5', 8: '4', 9: '3', 10: '2'
    }
    // 计算校验码
    let checkCode = 0
    for (let i = 0; i < 17; i += 1) {
      checkCode += Number(id.charAt(i)) * coefficient[i]
    }
    checkCode %= 11
    if (id.charAt(17).toLocaleUpperCase() === codeMap[checkCode]) {
      result = true
    }
  }
  return result
}

/**
 * @description 电话号码校验
 * @author Y-Hui
 * @param {String} phone
 * @returns {Boolean}
 */
function verifyPhoneNum(phone) {
  const rule = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
  return rule.test(phone)
}

/**
 * @description 密码校验，要求两种及以上字符 [英文+数字、英文+特殊符号、数字+特殊符号]（6~20位）
 * @author Y-Hui
 * @param {String} pwd 密码
 * @returns {Boolean}
 */
function verifyBasePassword(pwd) {
  const rule = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,20}$/
  return rule.test(pwd)
}

/**
 * @description 是否为外链 => a 标签 href
 * @author Y-Hui
 * @param {*} path url
 * @returns {Boolean}
 */
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export {
  verifyIdCard,
  verifyPhoneNum,
  verifyBasePassword,
  isExternal
}
