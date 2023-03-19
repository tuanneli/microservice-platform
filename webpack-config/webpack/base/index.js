const path = require('path')
const getProjectPackage = require('../utils/get-project-package')

const isDev = process.env.NODE_ENV === 'development'

const fileName = (ext) => isDev ? `index.${ext}` : `index.[hash].${ext}`

const pkg = getProjectPackage()

console.log(1, pkg?.name)

module.exports = {
    // entry: [path.resolve(process.env.ENTRY)],
    entry: [path.resolve('./index.js')],
    context: process.cwd(),
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(process.cwd(), !isDev ? 'target' : 'target-dev'),
        filename: fileName('js'),
        publicPath: `${pkg?.name}${process.env.VERSION}`
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules
    },
}