import { describe, expect, test } from '@jest/globals'
import { deepCopy } from '../lib/deepCopy'

describe('Test: Set type', () => {
  test('Set: 원시형 요소 깊은 복사 확인', () => {
    const originSet = new Set([1, 2, 3])
    const deepCopySet = deepCopy(originSet)

    expect(originSet).toEqual(deepCopySet)
    expect(originSet).not.toBe(deepCopySet)
  })

  test('Set: 참조형 요소 깊은 복사 확인', () => {
    const object = { a: 1, b: 2 }
    const array = [1, 2, 3]
    const originSet = new Set([object, array])
    const deepCopySet = deepCopy(originSet)

    expect(originSet).toEqual(deepCopySet)
    expect(originSet).not.toBe(deepCopySet)

    originSet.forEach((value) => {
      expect(deepCopySet.has(value)).toBe(false)
    })
  })
})
