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

  getLocalesByCategory: ({ category }) => {
    const params = {
      TableName: TABLE_NAME,
      ExpressionAttributeValues: {
        ':category': category,
      },
      FilterExpression: 'category = :category',
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

  getLocalesByGroup: ({ category, group }) => {
    const params = {
      TableName: TABLE_NAME,
      ExpressionAttributeValues: {
        ':group': group,
        ':category': category,
      },
      FilterExpression: 'contains (groups, :group) AND category = :category',
    };

    return db.scan(params);
  },

  createLocale: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuid(),
        name: args.name,
        tagline: args.tagline,
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

  updateLocale: (args) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: args.id,
      },
      ExpressionAttributeValues: {
        ':name': args.name,
        ':descr': args.description,
        ':tag': args.tagline,
        ':cat': args.category,
        ':contact': args.contact,
        ':location': args.location,
        ':groups': args.groups,
        ':uri': args.uri,
        ':date': Date.now(),
      },
      UpdateExpression:
        'SET name = :name, description = :descr, tagline = :tag, category = :cat, contact = :contact, location = :location, groups = :groups, updatedAt = :date, uri = :uri',
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
