const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventsSchema = new Schema({
   title: {
         type: String,
         required: true,
         trim: true
    },
    description: {
        type: String
    },  
    date: { 
        type: Date,
        default: Date.now
    },
    registrationLink: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: String,
        required: true,
        trim: true
    }
});

const Event = mongoose.model('Event', eventsSchema);  
module.exports = Event;  
