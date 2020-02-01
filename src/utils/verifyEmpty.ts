interface empty {
  [propName: string]: Function
}

const verifyEmpty:empty = {
  Object: (param:object):boolean => {
    let result:boolean = false
    if (Object.keys(param).length === 0) {
      result = true
    }
    return result
  },
  Array: (param:Array<any>):boolean => {
    let result:boolean = false
    if (param.length === 0 || param[0].toString().trim() === '') {
      result = true
    }
    return result
  }
}
export default verifyEmpty
