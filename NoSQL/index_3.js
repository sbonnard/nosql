const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('<username>');
    const countries = database.collection('countries');

    const query = {'name.common' : 'Mongolia'};

    const country = await countries.findOne(query);

    console.log(country);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

