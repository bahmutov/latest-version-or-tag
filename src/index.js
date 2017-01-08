'use strict'

const ggit = require('ggit')
const decide = require('./decide-start-version')

function latest () {
  return ggit.fetchTags()
    .then(decide)
}

module.exports = latest
