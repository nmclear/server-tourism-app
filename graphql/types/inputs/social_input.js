const { gql } = require('apollo-server-lambda');

module.exports = gql`
  input SocialInput {
    facebook: String
    instagram: String
    twitter: String
  }
`;
