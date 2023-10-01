const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://Anshumi:anshumi@cluster0.w5wfjgh.mongodb.net/Products?retryWrites=true&w=majority'
  )
    .then(client => {
      _db = client.db();
      console.log('Connected!');
      callback(_db);
    })
    .catch(err => {
      console.error('MongoDB Connection Error:', err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
