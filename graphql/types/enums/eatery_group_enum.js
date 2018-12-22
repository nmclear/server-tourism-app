const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum EateryGroup {
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
  }
`;
