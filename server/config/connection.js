const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/She-Tech-Net');

module.exports = mongoose.connection;
