
var http = require ("http"); //ładowanie modułu HTTP z biblioteki modułów node.js
var qs = require("querystring");

var pageHTML = '<html>' +
							'<head>' +
								'<title>Add something</title>' +
								'<meta charset="utf-8">' +
							'</head>' +
							'<body>' +
								'<form method="post" action="">' +
								'<div>' +
									'<label for="nickname">Nickname:</label>'+
									'<input type="text" name="nickname">' +
								'</div>' +
								'<div>' +
									'<input type="submit" value="send it">' +
								'</div>' +
									'</form>' +
							'</body>' +
						'</html>';

var server = http.createServer(function (req, res) {	//req-żądanie HTTP, res-odpowiedź HTTP
	var requestData = ' ';
	if(req.method === "GET") {
		res.writeHead(200, {"Content-Type": "text/html" });	//wysyłanie nagłówka o kodzie 200 typu formacie Content-Type; text/plain - tekst
		res.end(pageHTML);
	}
	else if(req.method === "POST"){
		req.setEncoding('utf-8');
		req.on('data', function(data) {
			requestData += data;
		});
		req.on("end", function() {
			var postData=qs.parse(requestData);
			res.whiteHead(200, {"Content-Type" : "text/html"});
			res.end('<html><head><title>Your nickname</title></head><body><h1>Your nickname is: '+ postData.nickname + '</h1></body></html>');
		});
		
	}
});

server.listen(1338, "127.0.0.1");  //ustawienie portu i IP strony internetowej/servera
console.log("Server running at http://127.0.0.1:1338/");