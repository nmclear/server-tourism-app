const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Eatery implements Locale {
    id: ID!
    name: String!
    description: String!
    category: Category!
    contact: Contact
    location: Location!
    groups: [EateryGroup]!
    uri: String
  }

  type Query {
    eateries: [Eatery]
    eatery(id: ID!): Eatery
    eateriesByGroup(group: EateryGroup): [Eatery]
  }

  type Mutation {
    createEatery(
      name: String!
      description: String!
      category: Category!
      contact: ContactInput
      location: LocationInput
      groups: [EateryGroup]!
      uri: String
    ): Eatery

    updateEatery(
      id: ID!
      name: String!
      description: String!
      category: Category
      contact: ContactInput
      location: LocationInput
      groups: [EateryGroup]!
      uri: String
    ): Eatery

    deleteEatery(id: ID!): Eatery
  }
`;
