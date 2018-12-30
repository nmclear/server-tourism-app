const { mergeTypes } = require('merge-graphql-schemas');

const EateryType = require('./eatery_type');
const HotelType = require('./hotel_type');
const EntertainmentType = require('./entertainment_type');
const TransportationType = require('./transportation_type');

module.exports = mergeTypes([EateryType, HotelType, EntertainmentType, TransportationType]);
