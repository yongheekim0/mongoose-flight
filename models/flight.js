const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-Z][1-9]\d?/,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
  },
  flight: { type: Schema.Types.ObjectId, ref: 'Flight' },
});

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ['ICN', 'SIN', 'LAX', 'DEN'],
    },
    arrival: {
      type: Date,
    },
  },
  { timestamps: true }
);

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ['American', 'United', 'Korean', 'Singapore'],
    },
    airport: {
      type: String,
      enum: ['ICN', 'SIN', 'LAX', 'DEN'],
      default: 'ICN',
    },
    flightNo: {
      type: Number,
      min: 1,
      max: 9999,
    },
    departs: {
      type: Date,
      default: () => Date.now() + 365 * 24 * 60 * 60 * 1000,
    },
    destination: [destinationSchema],
  },
  { timestamps: true }
);

const Flight = mongoose.model('Flight', flightSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = {
  Flight,
  Ticket,
};

// const firstFlight = new Flight({
//   airline: 'Korean',
//   flightNo: 3424,
// });

// firstFlight.save();
