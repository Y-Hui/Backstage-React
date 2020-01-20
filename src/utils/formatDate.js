import { getType } from './common'

// 补全 0
function completion(str) {
  const result = str.toString()
  return result.length === 2 ? result : `0${result}`
}

// 获取年月日时分秒
function getTime(time) {
  const date = {
    year: time.getFullYear(),
    month: completion(time.getMonth() + 1),
    day: completion(time.getDate()),
    hours: completion(time.getHours()),
    minutes: completion(time.getMinutes()),
    seconds: completion(time.getSeconds())
  }
  return `${date.year}-${date.month}-${date.day} ${date.hours}:${date.minutes}:${date.seconds}`
}

/**
 * @description 时间格式化，支持 Date、时间戳
 * @author Y-Hui
 * @returns {String} yyyy-mm-dd
 */
function formatDate(time = new Date()) {
  return formatDate.format(time).substring(0, 10)
}
/**
 * @description 获取完整时间：yyyy-mm-dd hh-mm-ss
 */
formatDate.fullTime = (time = new Date()) => formatDate.format(time)
formatDate.format = (time) => {
  let result = time
  switch (getType(time)) {
    case 'Date':
      result = getTime(time)
      break
    case 'String':
    case 'Number':
      result = getTime(new Date(time))
      break
    default:
      break
  }
  return result
}
export default formatDate
