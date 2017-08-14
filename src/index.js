const express = require('express');

const bodyParser = require('body-parser');

const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const schema =  require('./schema');

const connectMongo = require('./mongo-connector');
const connectMongoUser = require('./mongo-connector-user');

const start = async () => {
	const mongo = await connectMongo();
	const users = await connectMongoUser();

	var app = express();

	app.use('/graphql', bodyParser.json(), graphqlExpress({
		context: {mongo,users},
		schema
	}));

	app.use('/graphiql', graphiqlExpress({
		endpointURL: '/graphql'
	}));

	const PORT = 3000;
	app.listen(PORT, () => {
		console.log(`Hackernews GraphQL server running on port ${PORT}.`);
	});
};

start();