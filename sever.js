let http = require('http');
let dt = require('./myfirstmodule');
let url = require('url');
let fs = require('fs');
let uc = require('upper-case');
let rs = fs.createReadStream('./demo.txt');
let events = require('events');
let eventEmitter = new events.EventEmitter();


let myEvenHandler = function() {
    console.log('I hear a scream!');
}

eventEmitter.on('scream', myEvenHandler);

eventEmitter.emit('scream');

rs.on('open', function() {
    console.log('File opened');
});

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(uc.upperCase('Kanokpol'));
//     res.end();
// }).listen(8000);

// let adr = 'http://localhost:8080/default.htm?year=2025&month=november';
// let q = url.parse(adr, true);

// console.log(q.host); 
// console.log(q.pathname); 
// console.log(q.search); 

// let qdata = q.query; 
// console.log(qdata);

// http.createServer(function(req, res)  {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//        if (err) {
//            res.writeHead(404, {'Content-Type': 'text/html'});
//            return res.end("404 Not Found");
//        }
//        res.writeHead(200, {'Content-Type': 'text/html'});
//        res.write(data);
//        return res.end();
//     });
// }).listen(8000);

// fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   })

// fs.writeFile('mynewfile2.txt', 'r', function(err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   })

// fs.writeFile('mynewfile3.txt', 'This is replace', function(err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   })

// fs.appendFile('mynewfile3.txt', 'This is update text', function(err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   })

// fs.unlink('mynewfile3.txt', function(err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   })

// fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function(err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   })
