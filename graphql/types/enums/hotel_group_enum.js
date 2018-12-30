const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum HotelGroup {
    RESORT
    BEACH_FRONT
    DOWNTOWN
    VACATION_RENTAL
    AIR_BNB
    CASINO
    HOTEL
  }
`;
