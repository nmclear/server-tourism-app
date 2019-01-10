// const { gql } = require('apollo-server-lambda');
// // type Transportation implements Locale {
// module.exports = gql`
//   type Transportation {
//     id: ID!
//     name: String!
//     description: String!
//     category: Category!
//     contact: Contact
//     location: Location!
//     groups: [TransportationGroup]!
//     uri: String
//   }

//   type Query {
//     transportations: [Transportation]
//     transportation(id: ID!): Transportation
//     transportationByGroup(category: Category, group: TransportationGroup): [Transportation]
//   }

//   type Mutation {
//     createTransportation(
//       name: String!
//       description: String!
//       category: Category!
//       contact: ContactInput
//       location: LocationInput
//       groups: [TransportationGroup]!
//       uri: String
//     ): Transportation

//     updateTransportation(
//       id: ID!
//       name: String!
//       description: String!
//       category: Category
//       contact: ContactInput
//       location: LocationInput
//       groups: [TransportationGroup]!
//       uri: String
//     ): Transportation

//     deleteTransportation(id: ID!): Transportation
//   }
// `;

const { gql } = require('apollo-server-lambda');
// type Transportation implements Locale {
module.exports = gql`
  type Transportation implements Locale {
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
