const { gql } = require('apollo-server-lambda');

module.exports = gql`
  enum LandmarkGroup {
    LIGHTHOUSES
    COMMONS
    FARMS
  }
`;
