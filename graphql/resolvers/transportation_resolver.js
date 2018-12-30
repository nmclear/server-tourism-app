const dbLocales = require('./../../dynamodb/locales_db');

module.exports = {
  Query: {
    transportations: (_, args) => dbLocales.getLocalesByCategory(args),
    transportation: (_, args) => dbLocales.getLocaleById(args.id),
    transportationByGroup: (_, args) => dbLocales.getLocalesByGroup(args),
  },
  Mutation: {
    createTransportation: (_, args) => dbLocales.createLocale(args),
    updateTransportation: (_, args) => dbLocales.updateLocale(args),
    deleteTransportation: (_, args) => dbLocales.deleteLocale(args),
  },
};
