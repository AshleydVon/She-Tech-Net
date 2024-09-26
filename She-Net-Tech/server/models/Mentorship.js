const { Schema, model } = require('mongoose');

const mentorshipSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  expertise: {
    type: String,
    required: true,
    trim: true
  },
  availableTimeSlots: {
    type: [String],
    required: true
  },
  industry: {
    type: String,
    required: true,
    trim: true
  },
  yearsOfExperience: {
    type: Number,
    required: true
  }
});

const Mentorship = model('Mentorship', mentorshipSchema);

module.exports = Mentorship;

