var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    },
    location: {
        type: String
    },
    age: {
        type: Number,
        required: true
    },
    email:{
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    imageUrl: String,
    status: Number
});
var User = mongoose.model('user', UserSchema);
module.exports = User;