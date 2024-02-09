import { describe, expect, test } from '@jest/globals'
import { deepCopy } from '../lib/deepCopy'

describe('Test: Array type', () => {
  test('Array: 원시형 요소 깊은 복사 확인', () => {
    const originArray = [1, 2, 3]
    const deepCopyArray = deepCopy(originArray)

    expect(originArray).toEqual(deepCopyArray)
    expect(originArray).not.toBe(deepCopyArray)
  })

  test('Array: 참조형 요소 깊은 복사 확인', () => {
    const object = { a: 1, b: 2 }
    const array = [1, 2, 3]
    const originArray = [object, array]
    const deepCopyArray = deepCopy(originArray)

    expect(originArray).toEqual(deepCopyArray)
    expect(originArray).not.toBe(deepCopyArray)

    originArray.forEach((value, index) => {
      expect(deepCopyArray[index]).not.toBe(value)
      expect(deepCopyArray[index]).toEqual(value)
    })
  })
})
