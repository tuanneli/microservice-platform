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

const app = express()

app.use(
    webpackDevMiddleware(compiler, {
        // webpack-dev-middleware options
    })
)

// router.get('/', (req, res) => {
//     res.send('Hello')
// })
// app.use('/', router)

module.exports = ({ port, openBrowser }) => {
    app.listen(port, () => {
        if (openBrowser) {
            open(`http://localhost:${port}`)
        }
        console.log(`Port - ${port}`)
    })
}

