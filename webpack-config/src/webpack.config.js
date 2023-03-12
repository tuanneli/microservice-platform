module.exports = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            module.exports = require('./mode/production')
            break
        default:
            module.exports = require('./mode/development.js')
    }
}
