const { makeExecutableSchema } = require('graphql-tools');
const { mergeResolvers, mergeTypes } = require('merge-graphql-schemas');

const LocaleInterface = require('./types/interfaces/locale_interface');

const EateryType = require('./types/types/eatery_type');

const ContactType = require('./types/common/contact_type');
const CoordinateType = require('./types/common/coordinate_type');
const LocationType = require('./types/common/location_type');
const WeekdayHoursTyps = require('./types/common/weekday_hours_type');
const HoursType = require('./types/common/hours_type');

const CategoryEnum = require('./types/enums/category_enum');
const EateryGroupEnum = require('./types/enums/eatery_group_enum');

const ContactInput = require('./types/inputs/contact_input');
const LocationInput = require('./types/inputs/location_input');
const CoordinateInput = require('./types/inputs/coordinate_input');
const WeekdayHoursInput = require('./types/inputs/weekday_hours_input');
const HoursInput = require('./types/inputs/hours_input');

const eateryResolvers = require('./resolvers/eatery_resolver');
const localeResolvers = require('./resolvers/locale_resolver');

const typeDefs = mergeTypes([
  LocaleInterface,
  EateryType,
  ContactType,
  CoordinateType,
  LocationType,
  WeekdayHoursTyps,
  HoursType,
  CategoryEnum,
  EateryGroupEnum,
  ContactInput,
  LocationInput,
  CoordinateInput,
  WeekdayHoursInput,
  HoursInput,
]);
// const resolvers = eateryResolvers;
const resolvers = mergeResolvers([eateryResolvers, localeResolvers]);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
