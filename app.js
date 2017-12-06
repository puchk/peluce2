var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/peluce');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// SCHEMA
var paintingSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Painting = mongoose.model("Painting", paintingSchema);

/*Painting.create(
		{
			name: 'Starry Night', 
			image: 'http://wisetoast.com/wp-content/uploads/2015/10/Starry-Night-by-Vincent-Van-Gogh-painting.jpg'		
		}, function(err, painting){
			if(err){
				console.log(err);
			} else {
				console.log("New Painting Added");
				console.log(painting);
			}
		}
)*/


app.get('/', function(req, res) {
	res.render('index');
});

app.get('/gallery', function(req, res) {
	Painting.find({},function(err, paintings){
		if(err){
			console.log(err);
		} else {
			res.render('gallery', {paintings:paintings});
		}
	});
});

app.post('/gallery', function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var newPainting = {name: name, image: image};
	Painting.create(newPainting, function(err, addedPainting){
		if(err) {
			console.log(err);
		} else {
				res.redirect("/gallery");
		}
	})
})

app.get('/gallery/new', function(req, res) {
	res.render('new');
})

app.listen(port, function(err) {
	console.log('Listening on port ' + port);
});