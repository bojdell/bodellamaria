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

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(express.static(__dirname + '/public'));
app.use(allowCrossDomain);

app.get("/", function (req, res) {
    res.redirect("/index.html");
});

app.get("/about", function (req, res) {
        res.redirect("/about.html");
});

app.get("/projects", function (req, res) {
        res.redirect("/projects.html");
});

app.get("/music", function (req, res) {
        res.redirect("/music.html");
});

app.get("/quotes", function (req, res) {
    res.redirect("/quotes.html");
});

app.get("/api/quotes", function (req, res) {
    var collection = connection.collection('quotes');
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        res.send(docs);
    });
//    res.send(quotes.find({}));
});

app.listen(80);
console.log("Listening on port 80");
