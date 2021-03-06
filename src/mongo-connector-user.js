const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017/users';

module.exports = async () => {
	const db = await MongoClient.connect(MONGO_URL);
	return {Users: db.collection('users')};
}