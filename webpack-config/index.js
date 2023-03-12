require('./webpack/utils/default-envs')

const webpack = require('./webpack.config')()
console.log('webpack =', webpack)
module.exports = webpack