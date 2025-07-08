const express = require('express');
const router = express.Router();
const {
  submitVitals,
  getVitalsHistory,
  getVitalsAnalytics,
  getEmergencyAlerts,
  acknowledgeAlert,
  deleteVitals,
  getAllVitals
} = require('../controllers/vitalsController');
const auth = require('../middleware/auth');

// 🩺 Submit new vitals
router.post('/', auth, submitVitals);

// ✅ GET ALL VITALS — For doctor/admin dashboard (includes patient names)
// e.g. GET /api/vitals/all
router.get('/all', auth, getAllVitals);

// 📜 Get current user's vitals history (self)
// e.g. GET /api/vitals/history
router.get('/history', auth, getVitalsHistory);

// 📊 Analytics for current user
router.get('/analytics', auth, getVitalsAnalytics);

// 🚨 Emergency alerts
router.get('/emergency', auth, getEmergencyAlerts);

// ✅ Acknowledge emergency
router.put('/:id/ack', auth, acknowledgeAlert);

// ❌ Delete vitals
router.delete('/:id', auth, deleteVitals);

module.exports = router;
