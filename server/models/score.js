var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
	bid: Number,
    score: Number,
	words:  Number,
	createdDate: { type: Date, default: Date.now }

});

module.exports = mongoose.model('score', scoreSchema);