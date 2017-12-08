var mongoose = require('mongoose');
var Painting = require('./models/painting');

var data = [
	{
		name: "Mona Lisa",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quibusdam iste quidem, voluptatum architecto saepe consequatur voluptatibus sequi! Atque, aperiam, suscipit. Molestias, qui laudantium dolores rerum provident. Exercitationem, officiis, aliquam?",
		date: 1503
	},
	{
		name: "The Starry Night",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate blanditiis quam voluptatem sequi iusto dignissimos, eos dolor, reprehenderit magnam quis aspernatur sint laudantium odit consectetur at repellat quos deserunt, optio.",
		date: 1889
	},
	{
		name: "The Persistence of Memory",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/300px-The_Persistence_of_Memory.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae minus tempore ab, dolores, ad dolorem ipsam ratione odit unde laudantium molestiae earum sed iure accusantium aliquid ipsa voluptatem voluptatibus officiis.",
		date: 1931
	}];

function seeds(){
	Painting.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed paintings");
		data.forEach(function(seed) {
			Painting.create(seed, function(err, data){
				if(err){
					console.log(err);
				} else {
					console.log("added a painting");
				}
			});
		});
	});

};

module.exports = seeds;