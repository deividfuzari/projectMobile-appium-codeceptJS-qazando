let libraryName = require('node-random-name')

const getName = () => {
    return libraryName()
}

module.exports = getName
