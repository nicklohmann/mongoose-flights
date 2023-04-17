import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

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
    default: function() {
      return new (Date().getFullYear() +1)
    }
  }
})

const Flight = mongoose.model('Flight' , flightSchema)

export {
  Flight
}