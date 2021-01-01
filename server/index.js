const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');
const path = require('path');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.Promise = require('bluebird');


mongoose.connect('mongodb+srv://scrump:'+process.env.MDBP+'@cluster0.gmugj.mongodb.net/wgucapstone?retryWrites=true&w=majority', {promiseLibrary: require('bluebird') })
	.then(() => console.log('connection successful'+process.env.NODE_ENV + " PORT" + process.env.PORT))
	.catch((err) => console.error(err));


var score = require("./routes/score");

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

app.use("/api/score", score);

port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', function(err) {
	console.log("Started listening on %s", app.url);
  });

console.log('App is listening on port ' + port);
