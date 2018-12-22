const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Location {
    address: String!
    city: String!
    state: String!
    zipcode: Int
    coordinate: Coordinate
  }
`;
