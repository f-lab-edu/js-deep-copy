import { describe, expect, test } from '@jest/globals'
import { deepCopy } from '../lib/deepCopy'

describe('Test: Regexp type', () => {
  test('Regexp: 원시형 요소 깊은 복사 확인', () => {
    const originRegexp = new RegExp(/abc/)
    const deepCopyRegexp = deepCopy(originRegexp)

    expect(originRegexp).toEqual(deepCopyRegexp)
    expect(originRegexp).not.toBe(deepCopyRegexp)
  })
})
