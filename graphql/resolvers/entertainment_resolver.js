const dbLocales = require('./../../dynamodb/locales_db');

module.exports = {
  Query: {
    entertainments: (_, args) => dbLocales.getLocalesByCategory(args),
    entertainment: (_, args) => dbLocales.getLocaleById(args.id),
    entertainmentByGroup: (_, args) => dbLocales.getLocalesByGroup(args),
  },
  Mutation: {
    createEntertainment: (_, args) => dbLocales.createLocale(args),
    updateEntertainment: (_, args) => dbLocales.updateLocale(args),
    deleteEntertainment: (_, args) => dbLocales.deleteLocale(args),
  },
};
