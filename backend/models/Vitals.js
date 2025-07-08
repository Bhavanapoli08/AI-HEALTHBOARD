const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  heartRate: Number,
  temperature: Number,
  oxygenSaturation: Number,
  bloodPressure: String,
  riskLevel: String,
  acknowledged: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('Vitals', vitalsSchema);
