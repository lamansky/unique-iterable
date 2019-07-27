'use strict'

const filterIterable = require('filter-iter')
const IsNew = require('is-new')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator(function uniqueIterable (iter, options) {
  const isNew = IsNew()
  return filterIterable(iter, el => isNew(el), options)
})
