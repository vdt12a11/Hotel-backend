const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.route('/')
    .get(roomController.getAllRoom)
    .post(roomController.createNewRoom)

router.route('/:id')
    .get(roomController.getRoom);
module.exports = router;