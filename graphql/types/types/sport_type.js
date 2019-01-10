const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Sport implements Locale {
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
`;
