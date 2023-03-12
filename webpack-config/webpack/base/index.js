const path = require('path')

console.log(1, process.env.ENTRY)

const isDev = process.env.NODE_ENV === 'development'

const fileName = (ext) => isDev ? `index.${ext}` : `index.[hash].${ext}`

module.exports = {
    // entry: [path.resolve(process.env.ENTRY)],
    entry: [path.resolve('./index.js')],
    context: process.cwd(),
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(process.cwd(), !isDev ? 'target' : 'target-dev'),
        filename: fileName('js'),
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
        modules: ['node_modules']
    },

}