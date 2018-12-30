const dbLocales = require('./../../dynamodb/locales_db');

const capitalizeFirstLetter = (string) => {
  const lowercase = string.toLowerCase();
  return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
};

module.exports = {
  Query: {
    locales: (_, args) => dbLocales.getLocales(),
    locale: (_, args) => dbLocales.getLocaleById(args.id),
    localesByCategory: (_, args) => dbLocales.getLocalesByCategory(args),
    localesByGroup: (_, args) => dbLocales.getLocalesByGroup(args),
  },
  Mutation: {
    createLocale: (_, args) => dbLocales.createLocale(args),
    updateLocale: (_, args) => dbLocales.updateLocale(args),
    deleteLocale: (_, args) => dbLocales.deleteLocale(args),
  },
  Locale: {
    __resolveType(obj, context, info) {
      if (obj.category) {
        return capitalizeFirstLetter(obj.category);
      }

      return null;
    },
  },
};
