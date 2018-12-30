const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum TransportationGroup {
    TOURS
    CAR_TRIPS
    PARKING
    DIRECTIONS
    BUS
    TAXI
  }
`;
