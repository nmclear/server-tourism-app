const { gql } = require('apollo-server-lambda');

module.exports = gql`
  input ContactInput {
    phone: String
    email: String
    website: String
    opentable: String
    weekdayHours: WeekdayHoursInput
    social: SocialInput
  }
`;
