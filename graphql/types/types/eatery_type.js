// const { gql } = require('apollo-server-lambda');
// // type Eatery implements Locale {
// module.exports = gql`
//   type Eatery {
//     id: ID!
//     name: String!
//     description: String!
//     category: Category!
//     contact: Contact
//     location: Location!
//     groups: [EateryGroup]!
//     uri: String
//   }

//   type Query {
//     eateries(category: Category): [Eatery]
//     eatery(id: ID!): Eatery
//     eateriesByGroup(category: Category, group: EateryGroup): [Eatery]
//   }

//   type Mutation {
//     createEatery(
//       name: String!
//       description: String!
//       category: Category!
//       contact: ContactInput
//       location: LocationInput
//       groups: [EateryGroup]!
//       uri: String
//     ): Eatery

//     updateEatery(
//       id: ID!
//       name: String!
//       description: String!
//       category: Category
//       contact: ContactInput
//       location: LocationInput
//       groups: [EateryGroup]!
//       uri: String
//     ): Eatery

//     deleteEatery(id: ID!): Eatery
//   }
// `;

const { gql } = require('apollo-server-lambda');
// type Eatery implements Locale {
module.exports = gql`
  type Eatery {
    id: ID!
    name: String!
    description: String!
    category: Category!
    contact: Contact
    location: Location!
    groups: [EateryGroup]!
    uri: String
  }
`;
