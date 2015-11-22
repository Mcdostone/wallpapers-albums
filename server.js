var express = require('express');
var ejs = require('ejs');
var engine = require('ejs-mate');
var bodyParser = require('body-parser');
var finder = require('./helpers/finder');
var albumParser = require('./helpers/album-parser');

 
var app = express();
var PORT = 3143;


app.set('view engine', 'ejs');
app.engine('ejs', engine);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.render('home');
});

app.post('/generate', function(req, res) {
	var artist = req.body.artist;

	//Get all cover albums of the artist
    finder.getAllAlbums(artist, function(data) {
        var r = albumParser.getCovers(data);
        res.render('results', {'covers': r});
    });

});


app.listen(PORT, function() {
	console.log("server is running: http://localhost:" + PORT);
});