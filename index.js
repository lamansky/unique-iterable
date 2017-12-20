'use strict'

const filterIterable = require('filter-iter')
const IsNew = require('is-new')

module.exports = function uniqueIterable (iter, options) {
  const isNew = IsNew()
  return filterIterable(iter, el => isNew(el), options)
}
