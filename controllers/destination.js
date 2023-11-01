const { Flight } = require('../models/flight');

// const create = (req, res) => {
//   console.log(req.body);
//   res.send('responding');
// };

const create = async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  console.log(flight);
  console.log(req.body);
  flight.destination.push(req.body);
  if (flight.destination.length > 3) {
    flight.destination.splice(0, 1);
  }
  try {
    await flight.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${flight._id}`);
};

module.exports = {
  create,
};
