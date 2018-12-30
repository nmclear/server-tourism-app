const { gql } = require('apollo-server-lambda');
// union LocaleGroup = EateryGroup | HotelGroup | EntertainmentGroup | TransportationGroup
module.exports = gql`
  union Locale = Eatery | Hotel | Entertainment | Transportation

  type Query {
    locales: [Locale]
    locale(id: ID!): Locale
    localesByCategory(category: Category): [Locale]
    localesByGroup(category: Category, group: LocaleGroup): [Locale]
  }

  type Mutation {
    createLocale(
      name: String!
      description: String!
      category: Category!
      contact: ContactInput
      location: LocationInput
      groups: [LocaleGroup]!
      uri: String
    ): Locale

    updateLocale(
      id: ID!
      name: String!
      description: String!
      category: Category
      contact: ContactInput
      location: LocationInput
      groups: [LocaleGroup]!
      uri: String
    ): Locale

    deleteLocale(id: ID!): Locale
  }
`;
