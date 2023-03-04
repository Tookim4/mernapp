const mongoose = require('mongoose')
// const moongose = require('mongoose')

// callback function connecting the project to a MongoDB database
const connectDB = async ( ) =>{
    try {
        // connects using link imported in dotenv file
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected : ${conn.connection.host}`.blue.underline);
    } catch (error){
        console.log(error)
    }
}

module.exports = connectDB