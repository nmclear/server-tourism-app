const dbEateries = require('./../../dynamodb/eateries_db');

module.exports = {
  Query: {
    eateries: (_, args) => dbEateries.getEateries(),
    eatery: (_, args) => dbEateries.getEateryById(args.id),
    eateriesByGroup: (_, args) => dbEateries.getEateriesByGroup(args.group),
  },
  Mutation: {
    createEatery: (_, args) => dbEateries.createEatery(args),
    updateEatery: (_, args) => dbEateries.updateEatery(args),
    deleteEatery: (_, args) => dbEateries.deleteEatery(args),
  },
};
