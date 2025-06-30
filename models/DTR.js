const mongoose = require('mongoose');

const DTRSchema = new mongoose.Schema({
  employeeId: String,
  date: String,
  time: String,
  type: String
});

module.exports = mongoose.model('DTR', DTRSchema);
