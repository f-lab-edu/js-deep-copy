import { describe, expect, test } from '@jest/globals'
import { deepCopy } from '../lib/deepCopy'

describe('Test: Map type', () => {
  test('Map: 원시형 요소 깊은 복사 확인', () => {
    const originMap = new Map()
    originMap.set('foo', 'bar')
    originMap.set('hi', 1)
    originMap.set('a', true)

    const deepCopyMap = deepCopy(originMap)

    expect(originMap).toEqual(deepCopyMap)
    expect(originMap).not.toBe(deepCopyMap)
  })

  test('Map: 참조형 요소 깊은 복사 확인', () => {
    const originMap = new Map()
    const object = { a: 1, b: 2 }
    const array = [1, 2, 3]

    originMap.set('object', object)
    originMap.set('array', array)

    const deepCopyMap = deepCopy(originMap)

    expect(originMap).toEqual(deepCopyMap)
    expect(originMap).not.toBe(deepCopyMap)

    originMap.forEach((value, key) => {
      expect(deepCopyMap.get(key)).toEqual(value)
      expect(deepCopyMap.get(key)).not.toBe(value)
    })
  })
})
