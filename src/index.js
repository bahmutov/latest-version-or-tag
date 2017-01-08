'use strict'

const decide = require('./decide-start-version')

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
