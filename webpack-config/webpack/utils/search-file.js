const path = require('path')
const fs = require('fs')

const searchFile = (filename, directory = process.cwd()) => {
    const { root, dir } = path.parse(directory)
    if (root === dir) {
        throw new Error('You should create package.json')
    }

    const filepath = path.join(directory, filename)
    if (fs.existsSync(filepath)) {
        return filepath
    }

    return searchFile(filename, path.normalize(path.resolve(directory, '..')))
}

module.exports = searchFile