const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum Category {
    EATERY
    HOTEL
    ENTERTAINMENT
    NATURE
    TRANSPORTATION
    SPORT
    LANDMARK
  }
`;
