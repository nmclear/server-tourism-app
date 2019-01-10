const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Contact {
    phone: String
    email: String
    website: String
    opentable: String
    weekdayHours: WeekdayHours
    social: Social
  }
`;
