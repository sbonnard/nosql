const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('<username>');
    const countries = database.collection('countries');

    // Query for a movie that has the title 'Back to the Future'
    const query = { 'name.official': 'Canada' };
    const country = await countries.findOne(query);

    console.log("pouet");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);