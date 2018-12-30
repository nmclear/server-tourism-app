const { mergeTypes } = require('merge-graphql-schemas');

const ContactInput = require('./contact_input');
const LocationInput = require('./location_input');
const CoordinateInput = require('./coordinate_input');
const WeekdayHoursInput = require('./weekday_hours_input');
const HoursInput = require('./hours_input');

module.exports = mergeTypes([
  ContactInput,
  LocationInput,
  CoordinateInput,
  WeekdayHoursInput,
  HoursInput,
]);
