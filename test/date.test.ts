import { describe, expect, test } from '@jest/globals'
import { deepCopy } from '../lib/deepCopy'

describe('Test: Date type', () => {
  test('Date: 깊은 복사 확인', () => {
    const date = new Date()
    const deepCopyDate = deepCopy(date)

    expect(date).toEqual(deepCopyDate)
    expect(date).not.toBe(deepCopyDate)
    expect(deepCopyDate instanceof Date).toBe(true)
  })
})
