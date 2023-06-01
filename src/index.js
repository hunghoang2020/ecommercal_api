const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//add route chung
const router = require('./route/index')

const app = express()
const port = 3000
app.use(express.urlencoded())
app.use(express.json())
router(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
