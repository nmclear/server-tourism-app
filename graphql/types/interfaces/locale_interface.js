const { gql } = require('apollo-server-lambda');

module.exports = gql`
  interface Locale {
    id: ID!
    name: String!
    tagline: String!
    description: String!
    category: Category!
    contact: Contact
    location: Location!
    groups: [LocaleGroup]!
    uri: String
  }
  type Query {
    locales: [Locale]
    locale(id: ID!): Locale
    localesByCategory(category: Category): [Locale]
    localesByGroup(category: Category, group: LocaleGroup): [Locale]
  }

  type Mutation {
    createLocale(
      name: String!
      tagline: String!
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
      tagline: String!
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
