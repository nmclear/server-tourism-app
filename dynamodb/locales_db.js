const uuid = require('uuid/v1');
const db = require('./index');

// const TABLE_NAME = process.env.TABLE_NAME;
const TABLE_NAME = 'tcLocales';

module.exports = {
  getLocales: () => {
    const params = {
      TableName: TABLE_NAME,
    };

    return db.scan(params);
  },

  getLocaleById: (id) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id,
      },
    };

    return db.get(params);
  },

  createLocale: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuid(),
        name: args.name,
        addedAt: Date.now(),
      },
    };

    return db.createItem(params);
  },

  updateLocale: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
      ExpressionAttributeValues: {
        ':name': args.name,
      },
      UpdateExpression: 'SET name = :name',
      ReturnValues: 'ALL_NEW',
    };

    return db.updateItem(params, args);
  },

  deleteLocale: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
    };

    return db.deleteItem(params, args);
  },
};
