const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  user_id: Number,
  // Add more fields as needed
});

module.exports = mongoose.model('Person', personSchema);
