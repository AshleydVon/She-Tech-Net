const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcryptjs'); 

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  Role: {
    type: String,
    required: true,
    default: 'user'
  },
  Sckill: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  profileimage: {
    type: String,
    required: false
  },
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('user_db', userSchema);

module.exports = User;
