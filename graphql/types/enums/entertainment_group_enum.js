const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum EntertainmentGroup {
    BREWERY
    WINERY
    THEATER
    NIGHT_LIFE
    ART
    COFFEE
    COMMONS
    SHOPPING
    TOURS
    CAR_TRIPS
    DOWNTOWN
  }
`;
