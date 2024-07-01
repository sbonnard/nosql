-- NoSQL 

db.createCollection('personnes');

show collections;

db.personnes.insertOne({_id:1, name:'Zangief', age: 30});

db.personnes.find();

-------------------------------------------------------------

db.countries.find({}, {'name.official': 1}).skip(9).limit(13);

-------------------------------------------------------------

db.countries.find({}, {'name.official': 1}).sort('').skip(9).limit(13);