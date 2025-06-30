const mongoose = require('mongoose');

const OvertimeSchema = new mongoose.Schema({
  employeeName: String,
  date: String,
  hours: Number,
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
});

module.exports = mongoose.model('Overtime', OvertimeSchema);
