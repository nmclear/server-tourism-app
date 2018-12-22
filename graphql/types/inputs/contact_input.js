const { gql } = require('apollo-server-lambda');

module.exports = gql`
  input ContactInput {
    phone: String
    email: String
    website: String
    hours: HoursInput
  }
`;
