const { gql } = require('apollo-server-lambda');
// type Hotel implements Locale {
module.exports = gql`
  type Hotel {
    id: ID!
    name: String!
    description: String!
    category: Category!
    contact: Contact
    location: Location!
    groups: [HotelGroup]!
    uri: String
  }

  type Query {
    hotels: [Hotel]
    hotel(id: ID!): Hotel
    hotelsByGroup(category: Category, group: HotelGroup): [Hotel]
  }

  type Mutation {
    createHotel(
      name: String!
      description: String!
      category: Category!
      contact: ContactInput
      location: LocationInput
      groups: [HotelGroup]!
      uri: String
    ): Hotel

    updateHotel(
      id: ID!
      name: String!
      description: String!
      category: Category
      contact: ContactInput
      location: LocationInput
      groups: [HotelGroup]!
      uri: String
    ): Hotel

    deleteHotel(id: ID!): Hotel
  }
`;
