import {
  isDate,
  isFunction,
  isMap,
  isNull,
  isObject,
  isRegExp,
  isSet,
} from './checkType'

function isNonDeepCopy(value: any) {
  return isNull(value) || isFunction(value) || !isObject(value)
}

export function deepCopy<T>(input: T): T {
  if (isNonDeepCopy(input)) {
    return input as T
  }

  if (Array.isArray(input)) {
    const cloneArray: Array<any> = []

    input.forEach((value) => {
      if (isNonDeepCopy(value)) {
        cloneArray.push(value)
      } else {
        const deepCopyValue = deepCopy(value)
        cloneArray.push(deepCopyValue)
      }
    })

    return cloneArray as T
  }

  if (isMap(input)) {
    const cloneMap = new Map()

    input.forEach((value, key) => {
      if (isNonDeepCopy(value)) {
        cloneMap.set(key, value)
      } else {
        const deepCopyValue = deepCopy(value)
        cloneMap.set(key, deepCopyValue)
      }
    })

    return cloneMap as T
  }

  if (isSet(input)) {
    const cloneSet = new Set()

    input.forEach((value) => {
      if (isNonDeepCopy(value)) {
        cloneSet.add(value)
      } else {
        const deepCopyValue = deepCopy(value)
        cloneSet.add(deepCopyValue)
      }
    })

    return cloneSet as T
  }

  if (isDate(input)) {
    return new Date(input) as T
  }

  if (isRegExp(input)) {
    return new RegExp(input) as T
  }

  if (isObject(input)) {
    const cloneObject: any = {}

    for (const [key, value] of Object.entries(input)) {
      if (isNonDeepCopy(value)) {
        cloneObject[key] = value
      } else {
        const deepCopyValue = deepCopy(value)
        cloneObject[key] = deepCopyValue
      }
    }

    return cloneObject as T
  }

  return input as T
}
