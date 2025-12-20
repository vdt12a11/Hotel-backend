const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.handleBooking);
router.patch('/:id/checkin', bookingController.checkInBooking);
router.patch('/:id/checkout', bookingController.checkOutBooking);
module.exports = router;