const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Social {
    facebook: String
    instagram: String
    twitter: String
  }
`;
