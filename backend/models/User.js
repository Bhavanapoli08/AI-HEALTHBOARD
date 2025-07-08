const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: String,
  dosage: String,
  frequency: String,
}, { _id: false });

const emergencyContactSchema = new mongoose.Schema({
  name: String,
  relationship: String,
  phoneNumber: String,
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: {
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
    enum: ['patient', 'doctor'],
    default: 'patient',
  },
  medicalConditions: [String],
  medications: [medicationSchema],
  emergencyContact: emergencyContactSchema
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
