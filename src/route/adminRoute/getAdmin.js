const express = require('express')
const app = express()
const router = express.Router()

const adminController = require('../../controller/admin_controller')

router.use('/', adminController.index)
router.post('/login', adminController.login)
module.exports = router
