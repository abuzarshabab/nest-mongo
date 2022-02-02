import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017';
let db = null;

export function dbInstance() {
  if (!db) {
    return connect();
  }
  if (db) return db;
}

export function connect() {
  const dbClient = new MongoClient(url);
  dbClient
    .connect()
    .then((connection) => {
      console.log('Connection succeded');
      db = connection.db();
      return db;
    })
    .catch((err) => {
      console.log('error in connection', err);
    });
}
