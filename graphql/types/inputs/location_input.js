const { gql } = require('apollo-server-lambda');

module.exports = gql`
  input LocationInput {
    address: String!
    city: String!
    state: String!
    zipcode: Int
    coordinate: CoordinateInput
  }
`;
