const admin = require('./adminRoute')

function router(app) {
    // app.use('/', getAdmin)
    app.use('/admin/api', admin)
    // app.use('/user/api',getuser)
}

module.exports = router
