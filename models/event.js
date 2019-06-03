var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    timeStart: {
        type: Date,
        required: true
    },
    timeEnd: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    numTicket: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    location_GG:{
        type: String
    },
    price: {
        type: Number
    },
    tickets: {
        type: [{
            CODE:{
                type: String,
                required: true,
                trim: true
            },
            location:{
                type: String,
                required: true
            },
            time:{
                type: String,
                required:true
            },
            status:{
                type: String,
                required: true
            }
        }],
        required: true
    },
    imageUrl: String,
    status: Number
});
var Event = mongoose.model('event', EventSchema);
module.exports = Event;