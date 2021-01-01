var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var score = require('../models/score.js');


 //get all scores.
router.get('/', function (req, res, next) {

	score.find(function (err, products) {
		if (err) return next(err);
		res.json(products);
	});
});

//get count of entries in the collection
router.get('/count', function (req, res, next) {
	console.log("Running Count");
	score.estimatedDocumentCount(function (err, count) {
		if (err) return next(err);
		res.json(count);
	});

	
});


/* Get score by id*/
router.get('/:id', function (req, res, next) {
	score.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* Save entry into database */
router.post('/', function (req, res, next) {
	console.log("save attempted")

	score.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* Update entry in the database */
router.put('/:id', function (req, res, next) {
	score.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* Delete entry in database */
router.delete('/:id', function (req, res, next) {
	score.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});


module.exports = router;
