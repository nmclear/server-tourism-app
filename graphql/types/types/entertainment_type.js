// const { gql } = require('apollo-server-lambda');
// // type Entertainment implements Locale {
// module.exports = gql`
//   type Entertainment {
//     id: ID!
//     name: String!
//     description: String!
//     category: Category!
//     contact: Contact
//     location: Location!
//     groups: [EntertainmentGroup]!
//     uri: String
//   }

//   type Query {
//     entertainments: [Entertainment]
//     entertainment(id: ID!): Entertainment
//     entertainmentByGroup(category: Category, group: EntertainmentGroup): [Entertainment]
//   }

//   type Mutation {
//     createEntertainment(
//       name: String!
//       description: String!
//       category: Category!
//       contact: ContactInput
//       location: LocationInput
//       groups: [EntertainmentGroup]!
//       uri: String
//     ): Entertainment

//     updateEntertainment(
//       id: ID!
//       name: String!
//       description: String!
//       category: Category
//       contact: ContactInput
//       location: LocationInput
//       groups: [EntertainmentGroup]!
//       uri: String
//     ): Entertainment

//     deleteEntertainment(id: ID!): Entertainment
//   }
// `;

const { gql } = require('apollo-server-lambda');
// type Entertainment implements Locale {
module.exports = gql`
  type Entertainment implements Locale {
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
