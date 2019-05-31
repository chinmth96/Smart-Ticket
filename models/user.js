var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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
    content:{
        type: String
    },
    imageUrl: String,
    status: Number
});
var User = mongoose.model('user', UserSchema);
module.exports = User;