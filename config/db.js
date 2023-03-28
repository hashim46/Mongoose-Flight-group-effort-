const mongoose = require('mongoose')

const db = process.env.Mongo_URI

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true})
        console.log('MongoDB connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB
