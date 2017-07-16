const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server.');
	db.collection('Todos').find({_id}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	// db.close();
});
