const express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'mysql',
    user: 'docker',
    password: 'docker',
    database: 'test_database'
});

app.get('/', function (req, res) {
    connection.query('SELECT * FROM `HOGE`', function (error, results, fields) {
        if (error) throw error;
        res.send(results[0]);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});