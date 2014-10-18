var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient
	, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/quotesdb';
var connection = null;
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server");
	connection = db;
});

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
	res.redirect("/index.html");
});

app.get("/api/quotes", function (req, res) {
    var collection = connection.collection('quotes');
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
	res.send(docs);
    });
});

app.listen(80);
console.log("Listening on port 80");

