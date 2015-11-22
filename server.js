var express = require('express');
var ejs = require('ejs');

var app = express();
var PORT = 3143;

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
	res.render('home');
});

app.post('/generate', function(req, res) {
	res.redirect('/');
});

app.listen(PORT, function() {
	console.log("server is running: http://localhost:" + PORT);
});