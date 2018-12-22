const dbLocales = require('./../../dynamodb/locales_db');

module.exports = {
  Query: {
    locales: (_, args) => dbLocales.getLocales(),
    locale: (_, args) => dbLocales.getLocaleById(args.id),
  },
  // Mutation: {
  //   createLocale: (_, args) => dbLocales.createLocale(args),
  //   updateLocale: (_, args) => dbLocales.updateLocale(args),
  //   deleteLocale: (_, args) => dbLocales.deleteLocale(args),
  // },
};
