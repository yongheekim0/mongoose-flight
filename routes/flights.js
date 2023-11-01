var express = require('express');
var router = express.Router();

const flightsControls = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsControls.index);
router.get('/new', flightsControls.new);
router.get('/:id', flightsControls.show);
router.post('/', flightsControls.create);

module.exports = router;
