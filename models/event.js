var mongoose = require('mongoose');


var EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    typeEvent: {
        type: String,
        required: true
    },
    timeStart: {
        type: Date,
        required: true
    },
    timeEnd:{
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    location:{
        type: String
    },
    donor: {
        type: String
    },
    price: {
        type: Number
    },
    imageUrl: String,
    status: Number
});
var Event = mongoose.model('products', EventSchema);
module.exports = Event;