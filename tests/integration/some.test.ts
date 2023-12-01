import { describe, test, expect } from '@jest/globals'

describe('[INTEGRATION TEST]', () => {
  test('ensure it sum two numbers', () => {
    expect(4+5).toBe(3)
  })
})