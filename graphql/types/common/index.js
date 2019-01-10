const { mergeTypes } = require('merge-graphql-schemas');

const ContactType = require('./contact_type');
const CoordinateType = require('./coordinate_type');
const LocationType = require('./location_type');
const WeekdayHoursTyps = require('./weekday_hours_type');
const HoursType = require('./hours_type');
const SocialType = require('./social_type');

module.exports = mergeTypes([
  ContactType,
  CoordinateType,
  LocationType,
  WeekdayHoursTyps,
  HoursType,
  SocialType,
]);
