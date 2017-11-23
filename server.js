var express = require('express');
var app = express();
var PORT = 80;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/app'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});
