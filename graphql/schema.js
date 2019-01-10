const { makeExecutableSchema } = require('graphql-tools');
const { mergeResolvers, mergeTypes } = require('merge-graphql-schemas');

const LocaleInterface = require('./types/interfaces/locale_interface');
// const LocaleUnion = require('./types/unions/locale_union');

const types = require('./types/types');
const commonTypes = require('./types/common');
const enums = require('./types/enums');
const inputs = require('./types/inputs');

// const eateryResolvers = require('./resolvers/eatery_resolver');
const localeResolvers = require('./resolvers/locale_resolver');
// const hotelResolvers = require('./resolvers/hotel_resolver');
// const entertainmentResolvers = require('./resolvers/entertainment_resolver');
// const transporationResolvers = require('./resolvers/transportation_resolver');

const typeDefs = mergeTypes([
  LocaleInterface,
  // LocaleUnion,
  types,
  commonTypes,
  enums,
  inputs,
]);

// const resolvers = mergeResolvers([
//   // eateryResolvers,
//   localeResolvers,
//   // hotelResolvers,
//   // entertainmentResolvers,
//   // transporationResolvers,
// ]);

const resolvers = localeResolvers;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
