const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Hours {
    open: String
    close: String
  }
`;
