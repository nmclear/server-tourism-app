const uuid = require('uuid/v1');
const db = require('./index');

// const TABLE_NAME = process.env.TABLE_NAME;
const TABLE_NAME = 'tcLocales';

module.exports = {
  getEateries: () => {
    const params = {
      TableName: TABLE_NAME,
    };

    return db.scan(params);
  },

  getEateryById: (id) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id,
      },
    };

    return db.get(params);
  },

  createEatery: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuid(),
        name: args.name,
        description: args.description,
        category: args.category,
        contact: args.contact,
        location: args.location,
        groups: args.groups,
        uri: args.uri,
        addedAt: Date.now(),
        updatedAt: Date.now(),
      },
    };

    return db.createItem(params);
  },

  updateEatery: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
      ExpressionAttributeValues: {
        ':name': args.name,
        ':descr': args.description,
        ':cat': args.category,
        ':contact': args.contact,
        ':location': args.location,
        ':groups': args.groups,
        ':uri': args.uri,
        ':date': Date.now(),
      },
      UpdateExpression:
        'SET name = :name, description = :descr, category = :cat, contact = :contact, location = :location, groups = :groups, updatedAt = :date, uri = :uri',
      ReturnValues: 'ALL_NEW',
    };

    return db.updateItem(params, args);
  },

  deleteEatery: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
    };

    return db.deleteItem(params, args);
  },
};
