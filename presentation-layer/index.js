const path = require('path')

module.exports = {
    applyHbs: (app, {message, logger}) => {
        const templates = path.resolve(__dirname, 'index.html')
        app.set('views', templates)
    }
}