const { mergeTypes } = require('merge-graphql-schemas');

const EateryType = require('./eatery_type');
const HotelType = require('./hotel_type');
const EntertainmentType = require('./entertainment_type');
const TransportationType = require('./transportation_type');
const SportType = require('./sport_type');
const NatureType = require('./nature_type');
const LandmarkType = require('./landmark_type');

module.exports = mergeTypes([
  EateryType,
  HotelType,
  EntertainmentType,
  TransportationType,
  SportType,
  NatureType,
  LandmarkType,
]);
