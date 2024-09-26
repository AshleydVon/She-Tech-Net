const mongoose = require('mongoose');

const { Schema } = mongoose;

const coursesSchema = new Schema({
title: {
    type: String,
    required: true,
    trim: true
},
description : {
    type: String
},
category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
},
level: {
    type: String,
    required: true
},
content : {
    type: String
},
auther: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
enrollments: {
    type: Number,
    min: 0,
    default: 0
}
});

const Course = mongoose.model('Course', coursesSchema);

module.exports = Course;
