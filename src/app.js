const express = require('express')
const Router = require('express')
const router = new Router()

const app = express()

router.get('/', (req, res) => {
    res.send("Hello")
})
app.use('/', router)

module.exports = ({port}) => {
    app.listen(port, () => console.log(`Port - ${port}`))
}

