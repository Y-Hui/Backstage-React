interface fullTime {
  year: string | number,
  month: string,
  day: string,
  hours: string,
  minutes: string,
  seconds: string
}

/**
 * @description 填充0
 */
function completion(str: string | number): string {
  const result: string = str.toString()
  return result.length >= 2 ? result : `0${result}`
}

function getTime(time: Date): string {
  const date: fullTime = {
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
function formatDate(time: Date | number = new Date()): string {
  return getTime(new Date(time)).substring(0, 10)
}
/**
 * @description 获取完整时间：yyyy-mm-dd hh-mm-ss
 */
formatDate.fullTime = (time: Date | number = new Date()) => getTime(new Date(time))

export default formatDate
export {
  completion
}
