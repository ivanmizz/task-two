const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({

  name: {
    required: true,
    type: String,
  },
  user_id: {
    required: true,
    type: Number,
  },
  // Add more fields as needed
});

module.exports = mongoose.model("Person", personSchema);
