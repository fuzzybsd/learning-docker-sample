var http = require('http');
var mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'test_database'
});

var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    conn.query('SELECT * FROM `HOGE`', 
        function (error, results, fields) {
            if (error) {
                console.log('query error' + error.message);
            } else {
                for (var i = 0; i < results.length; i++) {
                    console.log(results[i]);
                }
            }
        });
    res.write('hello world');
    res.end();
});

server.listen(3000);