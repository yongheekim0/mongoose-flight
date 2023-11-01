const express = require('express');
const router = express.Router();

const ticketsControl = require('../controllers/tickets');

router.get('/flights/:id/ticket', ticketsControl.new);
router.post('/flights/:id/ticket', ticketsControl.create);

module.exports = router;
