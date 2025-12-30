const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  formData: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["booked", "checked_in", "checked_out"],
    default: "booked",
  },
  checkedInAt: {
    type: Date,
    default: null
  },
  checkedOutAt: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: () => new Date().toISOString(),
  }
}
);

module.exports = mongoose.model('Booking', bookingSchema);
