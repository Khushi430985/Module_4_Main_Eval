const express = require('express');
const router = express.Router();

const {
  createTrip,
  updateTrip,
  getTrip,
  deleteTrip,
  endTrip
} = require('../controllers/trip.controller');

// Customer only
router.post('/create', createTrip);
router.patch('/update/:tripId', updateTrip);
router.get('/:tripId', getTrip);
router.delete('/delete/:tripId', deleteTrip);

// End trip feature
router.patch('/end/:tripId', endTrip);

module.exports = router;
