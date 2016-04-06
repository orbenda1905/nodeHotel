
var Hotel = require('./hotel');
var http = require('http');
var describes = require('./describes');

var hotel = new Hotel();
hotel.on(describes.starsChanged, hotel.displayStars);
hotel.on(describes.starsChanged, hotel.checkIfZero);



http.createServer(function(req, res) {
	res.writeHeader(200, {'content-type' : 'text/plain'});
	hotel.addStars(220);
	hotel.addStars(320);
	hotel.addStars(600);
	hotel.decStars(1200);
	res.write(hotel.getLogger());
	res.end();

}).listen(8080);

console.log("listening on port 8080.....\n");
