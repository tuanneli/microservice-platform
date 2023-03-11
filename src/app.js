const express = require('express')
const Router = require('express')
const router = new Router()
const open = require('open')

const app = express()

router.get('/', (req, res) => {
    res.send("Hello")
})
app.use('/', router)

module.exports = ({ port, openBrowser }) => {
    app.listen(port, () => {
        if (openBrowser) {
            open(`http://localhost:${port}`)
        }
        console.log(`Port - ${port}`)
    })
}

