'use strict'

const assert = require('assert')
const uniqueIterable = require('.')

describe('uniqueIterable()', function () {
  it('should return an iterator', function () {
    const u = uniqueIterable([])
    assert.strictEqual(typeof u.next, 'function')
  })

  it('should not return scalars seen previously', function () {
    const u = Array.from(uniqueIterable([1, 1, 1, 1]))
    assert.strictEqual(u.length, 1)
    assert.strictEqual(u[0], 1)
  })

  it('should not return objects seen previously', function () {
    const o = {}
    const u = Array.from(uniqueIterable([o, o]))
    assert.strictEqual(u.length, 1)
    assert.strictEqual(u[0], o)
  })

  it('should compare objects strictly', function () {
    const u = Array.from(uniqueIterable([{}, {}]))
    assert.strictEqual(u.length, 2)
  })

  it('should support a limit argument', function () {
    const u = Array.from(uniqueIterable([1, 2, 3, 4], {limit: 2}))
    assert.strictEqual(u.length, 2)
    assert.strictEqual(u[0], 1)
    assert.strictEqual(u[1], 2)
  })
})
