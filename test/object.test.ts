import { describe, expect, test } from '@jest/globals'
import { deepCopy } from '../lib/deepCopy'

describe('Test: Object type', () => {
  test('Object: 원시형 요소 깊은 복사 확인', () => {
    const originObjeect = { a: 1, b: 2, c: 3, d: 4 }
    const deepCopyObject = deepCopy(originObjeect)

    expect(originObjeect).toEqual(deepCopyObject)
    expect(originObjeect).not.toBe(deepCopyObject)
  })

  test('Object: 참조형 요소 깊은 복사 확인', () => {
    const object = { a: 1, b: 2 }
    const array = [1, 2, 3]
    const originObjeect: { [key: string]: any } = {
      object,
      array,
    }

    const deepCopyObject = deepCopy(originObjeect)

    expect(originObjeect).toEqual(deepCopyObject)
    expect(originObjeect).not.toBe(deepCopyObject)

    for (const [key, value] of Object.entries(originObjeect)) {
      expect(deepCopyObject[key]).not.toBe(value)
      expect(deepCopyObject[key]).toEqual(value)
    }
  })
})
