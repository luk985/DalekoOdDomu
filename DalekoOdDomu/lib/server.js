var http = require("http"); //ładowanie modułu HTTP z biblioteki modułów node.js

var server = http.createServer(); 

server.on("request", function(req, res) {
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end("Witaj świecie");
	})
server.listen(1388, "127.0.0.1");

console.log("Serwer jest dostępny pod adresem 127.0.0.1");