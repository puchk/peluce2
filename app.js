var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/gallery', function(req, res) {
	var paintings = [
		{name: 'Mona Lisa', image: 'http://wisetoast.com/wp-content/uploads/2015/10/mona-lisa-leonardo-da-vinci-most-famous-painting.jpg'},
		{name: 'Starry Night', image: 'http://wisetoast.com/wp-content/uploads/2015/10/Starry-Night-by-Vincent-Van-Gogh-painting.jpg'},
		{name: 'The Scream', image: 'http://wisetoast.com/wp-content/uploads/2015/10/the-scream-edvard-munch-poster.jpg'},
		{name: 'American Gothic', image: 'http://wisetoast.com/wp-content/uploads/2015/10/American-Gothic-grant-wood-painting.jpg'}
	];

	res.render('gallery', {paintings:paintings});
});

app.post('/gallery', function(req, res) {
	res.send("Post route");
})

app.listen(port, function(err) {
	console.log('Listening on port ' + port);
});