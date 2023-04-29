const hbs = require('hbs')
const path = require('path')

module.exports = {
    applyHbs: (app, {message, logger}) => {
        const templates = path.resolve(__dirname)
        app.engine('hbs', hbs.__express)
        console.log(3)
        app.set('views', templates)
        console.log(4)
    }
}