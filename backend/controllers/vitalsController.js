const mongoose = require('mongoose');
const Vitals   = require('../models/Vitals');

// @desc    Submit new vitals
// @route   POST /api/vitals
exports.submitVitals = async (req, res) => {
  try {
    const { heartRate, temperature, oxygenSaturation, bloodPressure, riskLevel } = req.body;

    const vitals = new Vitals({
      user: req.user.userId,
      heartRate,
      temperature,
      oxygenSaturation,
      bloodPressure,
      riskLevel
    });

    await vitals.save();
    res.status(201).json({ message: 'Vitals submitted successfully' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get vitals history for a user
// @route   GET /api/vitals/history
exports.getVitalsHistory = async (req, res) => {
  try {
    const vitals = await Vitals.find({ user: req.user.userId }).sort({ createdAt: -1 });
    res.json(vitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get analytics for a user (average vitals)
// @route   GET /api/vitals/analytics
exports.getVitalsAnalytics = async (req, res) => {
  try {
    const userId = req.user.userId;

    const analytics = await Vitals.aggregate([
      { $match: { user: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: null,
          avgHeartRate:       { $avg: '$heartRate' },
          avgTemperature:     { $avg: '$temperature' },
          avgOxygenSaturation:{ $avg: '$oxygenSaturation' }
        }
      }
    ]);

    res.json(analytics[0] || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get emergency vitals
exports.getEmergencyAlerts = async (req, res) => {
  try {
    const emergencyVitals = await Vitals.find({
      $or: [
        { heartRate:       { $gte: 150 } },
        { temperature:     { $gte: 103 } },
        { oxygenSaturation:{ $lte: 90  } }
      ]
    }).populate('user', 'name email');

    res.json(emergencyVitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Acknowledge emergency alert
// @route   PUT /api/vitals/:id/ack
exports.acknowledgeAlert = async (req, res) => {
  try {
    const vitals = await Vitals.findById(req.params.id);
    if (!vitals) return res.status(404).json({ message: 'Vitals not found' });

    vitals.acknowledged = true;
    await vitals.save();

    res.json({ message: 'Alert acknowledged' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Delete vitals
exports.deleteVitals = async (req, res) => {
  try {
    await Vitals.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vitals deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// @desc    Get all vitals with populated patient name
// @route   GET /api/vitals
exports.getAllVitals = async (req, res) => {
  try {
    const vitals = await Vitals.find()
      .sort({ createdAt: -1 })
      .populate('user', 'name email'); // ✅ populate patient info

    res.json(vitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
