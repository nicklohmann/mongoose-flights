import mongoose from 'mongoose'
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  },
})

const flightSchema = new Schema({
  airline: { 
    type: String,
    enum: ['American' , 'Southwest' , 'United']
},
  airport: {
    type: String,
    enum: ['AUS' , 'DFW' , 'DEN' , 'LAX' , 'SAN'],
    default: 'DEN',

  },
  flightNo: {
    type: Number,
    max: 9999,
    min: 10,
  },
  departs: {
    type: Date,
    default: function () {
      let date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      return date;
    },
  },
  tickets: [ticketSchema],
  meal: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
})

const Flight = mongoose.model('Flight' , flightSchema)
export {
  Flight,
}