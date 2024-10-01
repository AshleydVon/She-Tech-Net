const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  applicationLink: {
    type: String,
    required: true,
  },
  postedDate: {
    type: String,
    required: true,
  },
  isWomenFriendly: {
    type: Boolean,
    required: true,
  },
  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
