const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum SportGroup {
    SKIING
    GOLF
    BIKE
    HIKING
    GYM
    DOWNTOWN
    LAKE_VIEW
  }
`;
