'use strict'

const decide = require('..')

function printVersion (version) {
  console.log('latest version', version)
}

function onError (err) {
  console.error('Could not determine latest version')
  console.error(err)
}

decide()
  .then(printVersion)
  .catch(onError)
