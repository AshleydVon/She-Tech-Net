const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['STUDENT', 'ADMIN'],
  },
  skills: [String],
  bio: String,
  profileImage: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
