const { Ticket, Flight } = require('../models/flight');

const newTicket = async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/ticket', { title: 'Add New Ticket', flight });
};

const create = async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  const ticket = await Ticket.create({
    seat: req.body.seat,
    price: req.body.price,
    flight: flight._id,
  });
  ticket.save();
  res.redirect(`/flights/${flight._id}`);
};

module.exports = {
  new: newTicket,
  create,
};
