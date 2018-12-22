const { gql } = require('apollo-server-lambda');

module.exports = gql`
  input WeekdayHoursInput {
    Sunday: HoursInput
    Monday: HoursInput
    Tuesday: HoursInput
    Wednesday: HoursInput
    Thursday: HoursInput
    Friday: HoursInput
    Saturday: HoursInput
  }
`;
