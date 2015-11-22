var express = require('express');

var app = express();


var PORT = 3143;

app.get('/', function(req, res) {
	res.send("Wallpapers albums");
})

app.listen(PORT, function() {
	console.log("server is running: http://localhost:" + PORT);
})