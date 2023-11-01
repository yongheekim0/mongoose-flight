const express = require('express');
const router = express.Router();

const destinationControl = require('../controllers/destination');

router.post('/flights/:id/destination', destinationControl.create);

module.exports = router;
