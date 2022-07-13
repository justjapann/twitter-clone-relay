const MongoClient = require("mongodb").MongoClient;

let mongoDB;

const setupDB = (callback) => {
  const uri = "179.250.224.50/32"; // paste uri from mongoDB atlas here and input your db user credentials

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db("full-stack-server");

      if (err) {
        return callback(err);
      } else {
        return callback("DB OK");
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };
