export function isNull(value: any): value is null {
  return value === null
}

export function isMap(value: any): value is Map<any, any> {
  return value instanceof Map
}

export function isSet(value: any): value is Set<any> {
  return value instanceof Set
}

export function isDate(value: any): value is Date {
  return value instanceof Date
}

export function isRegExp(value: any): value is RegExp {
  return value instanceof RegExp
}

export function isFunction(value: any): value is Function {
  return typeof value === 'function'
}

export function isObject(value: any): value is Object {
  if (isNull(value) || isFunction(value)) {
    return false
  }

  return typeof value === 'object'
}
