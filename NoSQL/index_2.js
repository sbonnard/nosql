const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('<username>');
    const countries = database.collection('countries');

    const query = {};

    const options = {
        skip: 9,
        limit: 12,
        sort: {area: 1},
        projection: {'name.official': 1}
    };

    const country = await countries.find(query, options).toArray();

    console.log(country);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

