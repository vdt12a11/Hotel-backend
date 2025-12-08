const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    room: {
      type: Object, // hoặc bạn có thể ref tới Room nếu muốn quan hệ
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
    createdAt: {
      type: Date,
      default: () => new Date().toISOString(),
    },
  },
  { timestamps: true } // tự động tạo createdAt và updatedAt
);

module.exports = mongoose.model('Booking', bookingSchema);
