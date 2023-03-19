const searchFile = require('./search-file')

const pkgFile = searchFile('package.json')

const pkg = require(pkgFile)

module.exports = () => ({
    ...pkg,
})