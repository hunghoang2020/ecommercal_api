const express = require('express')
const app = express()
const router = express.Router()

const adminController = require('../../controller/admin_controller')

router.get('/getadmin', adminController.getAllAdmin)
router.post('/addnewadmin', adminController.addNewAdmin)
// router.post('/login', adminController.login)
// router.put('/edit',adminController.edit)
module.exports = router
