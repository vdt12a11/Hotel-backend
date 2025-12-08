const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },          // Tên phòng
    price: { type: Number, required: true },         // Giá phòng
    image: { type: String, required: true },         // Link ảnh
    size: { type: String, required: true },          // Diện tích (ví dụ: "38m²")
    bed: { type: String, required: true },           // Loại giường
    view: { type: String, required: true },          // Hướng nhìn
    capacity: { type: Number, required: true },      // Số người tối đa
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Room', roomSchema);
