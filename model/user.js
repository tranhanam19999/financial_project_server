const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {type: String},
    address: {type: String},
    photoUser: {type: String},
    local: {
        email: {type:String},
        password: {type:String},
    },
    workPlace: {type: String},
    bankId: {type: String},
    phoneNumber: {type: String}
})
const User = mongoose.model('users', userSchema,'users');
module.exports = User;