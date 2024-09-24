const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobsSchema = new Schema({
company: {  
    type: String,
    required: true,
    trim: true
},
position: {
    type: String,
    required: true,
    trim: true
},
description: {
    type: String,
    required: true,
    trim: true
},  
applicationLink: {    
    type: String,
    required: true,
    trim: true
},
postedDate: {
    type: Date,
    default: Date.now 
},
isWomenFriendly: {
    type: Boolean,
    default: false
},
});

const jobs = mongoose.model('jobs', jobsSchema);

module.exports = jobs;