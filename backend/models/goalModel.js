const mongoose = require('mongoose')

//creating a goalSChema/ document with schematype text, required
const goalSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'add text'],
    },
},{
    timestamps: true,
})

//converting our goalSchema into a Goal model with mongoose.model function
module.exports = mongoose.model('Goal',  goalSchema)