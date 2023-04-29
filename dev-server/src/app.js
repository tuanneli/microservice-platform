const express = require('express')
const path = require('path')
const Router = require('express')
const router = new Router()
const open = require('open')
const webpack = require('webpack')
// const cors = require('cors')
const webpackDevMiddleware = require('webpack-dev-middleware')

const webpackConfigPath = path.resolve(__dirname, '..', '..', 'webpack-config')
const webpackConfig = require(path.resolve(webpackConfigPath))
const compiler = webpack(webpackConfig);
console.log(path.resolve(__dirname))
const pathHbs = path.resolve(__dirname, '..', '..', 'presentation-layer')

const app = express()

// app.use(
//     webpackDevMiddleware(compiler, {
//         // webpack-dev-middleware options
//     })
// )

require(path.resolve(pathHbs)).applyHbs(app, {message: {}, logger: console})

module.exports = ({ port, openBrowser }) => {
    const htmlResolver = async (req, res) => {
        res.render(`index.hbs`)
    }

    app.use(express.static(path.resolve(__dirname, '..', '..', 'presentation-layer', 'public')));
    app.use('/', htmlResolver)

    app.listen(port, () => {
        if (openBrowser) {
            open(`http://localhost:${port}`)
        }
        console.log(`Port - ${port}`)
    })
}
