const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    name: { type: String, required: true },          // Tên phòng
    price: { type: Number, required: true },         // Giá phòng
    image: { type: String, required: true },         // Link ảnh
    size: { type: String, required: true },          // Diện tích (ví dụ: "38m²")
    bed: { type: String, required: true },           // Loại giường
    view: { type: String, required: true },          // Hướng nhìn
    capacity: { type: Number, required: true },      // Số người tối đa
    userID: { type: String, required: true },       // ID người dùng
    date: { type: Date, required: true }            // Ngày đặt phòng
});

module.exports = mongoose.model('History', historySchema);
