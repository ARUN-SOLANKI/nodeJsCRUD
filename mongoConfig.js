const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "myDatabase";

async function dbConnection() {
  const result = await client.connect();
  const db = result.db(dbName);
  return db;
}

module.exports = dbConnection;
