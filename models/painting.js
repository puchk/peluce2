var mongoose = require('mongoose');

var paintingSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	date: Number
});

module.exports = mongoose.model("Painting", paintingSchema);