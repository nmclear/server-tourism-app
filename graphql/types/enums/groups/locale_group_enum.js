// const { gql } = require('apollo-server-lambda');

// module.exports = gql`
//   enum LocaleGroup {
//     EateryGroup
//     HotelGroup
//     EntertainmentGroup
//     NatureGroup
//     TransportationGroup
//     SportGroup
//     LandmarkGroup
//   }
// `;

const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum LocaleGroup {
    LAKE_VIEW
    OUTDOOR
    DOWNTOWN
    AMERICAN
    PIZZA
    ITALIAN
    STEAK
    BREAKFAST
    MEXICAN
    BAR
    SEAFOOD
    SUSHI
    DESSERT
    BAKERY
    LATE_NIGHT
    SANDWHICH
    BREWERY
    DOG_FRIENDLY
    DELIVERY
    WINERY
    THEATER
    NIGHT_LIFE
    ART
    COFFEE
    COMMONS
    SHOPPING
    RESORT
    BEACH_FRONT
    VACATION_RENTAL
    AIR_BNB
    CASINO
    HOTEL
    TOURS
    CAR_TRIPS
    PARKING
    DIRECTIONS
    BUS
    TAXI
  }
`;
