const { mergeTypes } = require('merge-graphql-schemas');

const CategoryEnum = require('./category_enum');
const LocaleGroupEnum = require('./groups/locale_group_enum');
const EateryGroupEnum = require('./eatery_group_enum');
const HotelGroupEnum = require('./hotel_group_enum');
const EntertainmentGroupEnum = require('./entertainment_group_enum');
const TransportationGroupEnum = require('./transportation_group_enum');

module.exports = mergeTypes([
  CategoryEnum,
  LocaleGroupEnum,
  EateryGroupEnum,
  HotelGroupEnum,
  EntertainmentGroupEnum,
  TransportationGroupEnum,
]);
