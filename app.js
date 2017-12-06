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
	image: String,
	description: String,
	date: Number
});

var Painting = mongoose.model("Painting", paintingSchema);

/*Painting.create(
		{
			name: 'Starry Night', 
			image: 'http://wisetoast.com/wp-content/uploads/2015/10/Starry-Night-by-Vincent-Van-Gogh-painting.jpg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dolor totam, illo esse dolores veritatis. Inventore, repellendus tenetur quis, similique non sed nihil ab minus illo numquam sapiente, nostrum eius.',
			date: 1889		
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
	var description = req.body.description;
	var date = req.body.date;
	var newPainting = {name: name, image: image, description: description, date: date};
	Painting.create(newPainting, function(err, addedPainting){
		if(err) {
			console.log(err);
		} else {
				res.redirect("/gallery");
		}
	});
});

app.get('/gallery/new', function(req, res) {
	res.render('new');
});

app.get('/gallery/:id', function(req, res) {
	Painting.findById(req.params.id, function(err, foundPainting){
		if(err){
			console.log(err);
		} else {
			res.render("show", {painting: foundPainting});
		}
	});
});

app.listen(port, function(err) {
	console.log('Listening on port ' + port);
});