let libraryRandomNumber = require('random-number')

const getNumberRandom = () => {

    options = { min: 1000, max: 9999, integer: true }
    return libraryRandomNumber(options)
}

module.exports = getNumberRandom