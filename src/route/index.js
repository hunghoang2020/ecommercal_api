const getAdmin = require('./adminRoute/getAdmin')

function router(app) {
    app.use('/admin/api', getAdmin)
    // app.use('/user/api',getuser)
}

module.exports = router
