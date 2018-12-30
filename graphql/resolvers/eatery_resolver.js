const dbLocales = require('./../../dynamodb/locales_db');

module.exports = {
  Query: {
    eateries: (_, args) => dbLocales.getLocalesByCategory(args),
    eatery: (_, args) => dbLocales.getLocaleById(args.id),
    eateriesByGroup: (_, args) => dbLocales.getLocalesByGroup(args),
  },
  Mutation: {
    createEatery: (_, args) => dbLocales.createLocale(args),
    updateEatery: (_, args) => dbLocales.updateLocale(args),
    deleteEatery: (_, args) => dbLocales.deleteLocale(args),
  },
};
