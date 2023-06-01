const admin_model = require('../../models/admin_model')
const bodyParser = require('body-parser')

const admin = require('../../models/admin_model/index')
//connect db
const db = require('../../config/db')
db.connect()

// async function getdata() {
//     const admindata = await admin.find({})
//     return admindata
// }

// async function myfruits() {
//     const fruits = await admin.find({}).then(function (result) {
//         return result
//     })
//     return fruits
// }

// app.get('/', (req, res) => {
//     console.log(myfruits())

//     res.send('Hello World!')
// })
class admin_controller {
    //get all admin
    // async index(req, res, next) {
    //     if (await admin.find({})) {
    //         admin.then(function (user) {
    //             console.log(user)
    //         })
    //         // console.log('ok')
    //         // const data = admin.find({})
    //         // console.log(data)
    //         res.send('ok')
    //     } else {
    //         console.log('no')
    //         console.loh('error')
    //     }
    // }
    async getAllAdmin(req, res, next) {
        await admin.find({}).then(function (user) {
            // console.log(user)
            res.send(user)
        })
    }
    addNewAdmin(req, res, next) {
        console.log(req.body)
        res.send('ok')
    }
    login(req, res, next) {
        res.send('llllll')
    }
}

module.exports = new admin_controller()
