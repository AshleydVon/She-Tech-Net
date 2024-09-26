const { Schema, model } = require('mongoose');

const mentorshipSchema = new Schema({
  name: {
    type: String,
    
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
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  expertise: {
    type: String,
    trim: true
  },
  availableTimeSlots: {
    type: [String],
  },
  industry: {
    type: String,
    trim: true
  },
  yearsOfExperience: {
    type: Number,
  }
});

const Mentorship = model('Mentorship', mentorshipSchema);

module.exports = Mentorship;
