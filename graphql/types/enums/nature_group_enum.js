const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum NatureGroup {
    BEACHES
    LAKES
    PARKS
    MARINA
  }
`;
