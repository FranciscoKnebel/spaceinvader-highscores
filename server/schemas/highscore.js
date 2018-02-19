const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const highscoreSchema = mongoose.Schema({
	player: String,
	score: Number,
	version: String
}, { timestamps: true });
highscoreSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Highscore', highscoreSchema);
