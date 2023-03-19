const { merge } = require('webpack-merge')
process.env.NODE_ENV = 'development'

const webpack = require('webpack')

const base = require('../webpack/base')

module.exports = merge(
    base
)