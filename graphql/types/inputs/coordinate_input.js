const { gql } = require('apollo-server-lambda');

module.exports = gql`
  input CoordinateInput {
    latitude: Float!
    longitude: Float!
  }
`;
