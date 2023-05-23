const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose
            .connect(
                'mongodb+srv://hungproject:hungproject@project.qab4gff.mongodb.net/API'
            )
            .then(() =>
                console.log(
                    '\n****************************\nCONNECT SCUCCESS\n****************************\n'
                )
            )
    } catch (error) {
        console.log(
            '\n****************************\nCONNECT FAIL\n****************************\n'
        )
    }
}

// mongoose
//     .connect(
//         "mongodb+srv://hungproject:hungproject@project.qab4gff.mongodb.net/"
//     )
//     .then(() => console.log("Connected!"))
module.exports = { connect }
