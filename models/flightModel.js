const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flights: {
        type: Number,
        requires: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    destinations: [{
        type: mongoose.Types.ObjectId,
        ref: 'Destination'
    }]
})

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight