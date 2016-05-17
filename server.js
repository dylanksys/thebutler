var express = require ('express');

var butler = require('../routers/butler');
var database = require('../routers/database');

var app = express();

app.use('/', butler);
app.use('/api', database);

app.listen(1337, function () {
	console.log('thebutler listening on port 1337');
};
