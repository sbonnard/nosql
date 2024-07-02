-- NoSQL 

db.createCollection('personnes');

show collections;

db.personnes.insertOne({_id:1, name:'Zangief', age: 30});

db.personnes.find();

----------------- QUERIES EXERCICES -------------------------
------------------------------1----------------------------------

db.countries.find({}, {'name.official': 1}).skip(9).limit(13);

-------------------------------2----------------------------------

db.countries.find({}, {'name.official': 1}).sort({'area': 1}).skip(9).limit(13);

-------------------------------3----------------------------------

db.countries.findOne({'name.common': 'Mongolia'});

------------------------------4----------------------------------

db.countries.find({"languages.nld": "Dutch"}, {'name.official': 1});

------------------------------5----------------------------------

db.countries.find({'name.official' : /^S/}, {'name.official': 1});

------------------------------6----------------------------------

db.countries.find({'area':{$gte:400000,$lte:500000}}, {'name.official': 1});