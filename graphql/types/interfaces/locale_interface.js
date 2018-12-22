const { gql } = require('apollo-server-lambda');

module.exports = gql`
  interface Locale {
    id: ID!
    name: String!
    description: String!
    category: Category!
    contact: Contact
    location: Location!
    groups: [EateryGroup]!
  }
  type Query {
    locales: [Locale]
    locale(id: ID!): Locale
  }
`;
