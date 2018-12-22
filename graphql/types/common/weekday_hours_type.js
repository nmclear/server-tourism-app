const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type WeekdayHours {
    Sunday: Hours
    Monday: Hours
    Tuesday: Hours
    Wednesday: Hours
    Thursday: Hours
    Friday: Hours
    Saturday: Hours
  }
`;
