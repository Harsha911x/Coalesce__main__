const mongoose= require('mongoose')

const Schema = mongoose.Schema

const data_baseSchema=new Schema({
    username: {
        type: String, requried: true
    },
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    contact : { type: Number, required: true},
    gender: {
        type: String, required: true
    },
    //one more to mention whether student or graduate 
    //graduating or graduated year
    password: {
        type: String, required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('data_base',data_baseSchema)
