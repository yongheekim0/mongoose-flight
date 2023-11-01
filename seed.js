require('dotenv').config();
require('./config/database');

const { Flight, Ticket } = require('./models/flight');

// const f = new Flight({
//   airport: 'DEN',
//   airline: 'American',
//   departs: new Date(),
// });

// const r = await f.save();
// console.log()

// const t1 = new Ticket({
//   seat: 'B35',
//   price: 150,
//   flight:
// });

// const t1 = await Ticket.findOne({ price: 100 }, { flight: 2345555234422 });

// t1.save()
//   .then(t => console.log(t))
//   .catch(e => console.log(e));

Flight.updateMany({});
