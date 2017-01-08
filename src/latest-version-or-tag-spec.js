'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('latest-version-or-tag', () => {
  const latest = require('.')
  const semver = require('semver')

  it('is a function', () => {
    la(is.fn(latest))
  })

  it('reports version', () => {
    return latest()
      .then(v =>
        la(semver.valid(v), 'invalid version', v))
  })
})
