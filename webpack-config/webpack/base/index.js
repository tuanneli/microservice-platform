const path = require('path')
const rules = require('./rules')
const plugins = require('./plugins')
const getProjectPackage = require('../utils/get-project-package')

const isDev = process.env.NODE_ENV === 'development'

const fileName = (ext) => isDev ? `index.${ext}` : `index.[hash].${ext}`

const pkg = getProjectPackage()

module.exports = {
    // entry: [path.resolve(process.env.ENTRY)],
    entry: './index.js',
    // context: process.cwd(),
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(process.cwd(), !isDev ? 'target' : 'target-dev'),
        filename: fileName('js')
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules
    },
    plugins
}