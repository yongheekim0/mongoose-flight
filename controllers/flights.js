const { Flight, Ticket } = require('../models/flight');

const index = async (req, res) => {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'All Flights', flights });
};

const newFlight = (req, res) => {
  res.render('flights/new', { title: 'Add Flight' });
};

const show = async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  const ticket = await Ticket.find({ flight: req.params.id });
  res.render('flights/show', { title: 'Flight Detail', flight, ticket });
};

const create = async (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Flight.create(req.body);
  } catch (error) {
    console.log(error);
    res.render('flights/new', {
      errorMsg: error.message,
    });
  }
  res.redirect('/flights');
};

module.exports = {
  index,
  new: newFlight,
  show,
  create,
};
