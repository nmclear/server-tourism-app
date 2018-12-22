const { gql } = require('apollo-server-lambda');

module.exports = gql`
  input HoursInput {
    open: String
    close: String
  }
`;
