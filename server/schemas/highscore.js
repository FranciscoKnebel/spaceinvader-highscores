const mongoose = require('mongoose');

const highscoreSchema = mongoose.Schema({
	player: String,
	score: Number,
	version: String
}, { timestamps: true });

module.exports = mongoose.model('Highscore', highscoreSchema);
