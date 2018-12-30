const dbLocales = require('./../../dynamodb/locales_db');

module.exports = {
  Query: {
    hotels: (_, args) => dbLocales.getLocalesByCategory(args),
    hotel: (_, args) => dbLocales.getLocaleById(args.id),
    hotelsByGroup: (_, args) => dbLocales.getLocalesByGroup(args),
  },
  Mutation: {
    createHotel: (_, args) => dbLocales.createLocale(args),
    updateHotel: (_, args) => dbLocales.updateLocale(args),
    deleteHotel: (_, args) => dbLocales.deleteLocale(args),
  },
};
