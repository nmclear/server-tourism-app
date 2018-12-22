const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Coordinate {
    latitude: Float!
    longitude: Float!
  }
`;
