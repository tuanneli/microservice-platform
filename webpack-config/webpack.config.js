module.exports = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return module.exports = require('./mode/production')
        default:
            return module.exports = require('./mode/development.js')
    }
}
