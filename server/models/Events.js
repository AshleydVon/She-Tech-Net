const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  registrationLink: {
    type: String,
    required: true,
  },
  tags: [String],
  enrollments: {
    type: Number,
    default: 0,
  },
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
