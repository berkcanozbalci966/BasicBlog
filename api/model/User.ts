import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 6,
        max:255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max:255
    },
    userName: {
        type: String,
        required: true,
        min: 6,
        max:255
    }
})


module.exports = mongoose.model('User',userSchema)