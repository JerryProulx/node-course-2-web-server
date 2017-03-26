var request = require("request");

var	geocodeAddress = (address, callback) => {
	var encodedAdress = encodeURIComponent(address);
		request({
		url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodedAdress,
		json: true
	}, (error, response, body) => {
		if(error){
			callback("Unable to connect to google server");
		}else if(body.status === "ZERO_RESULTS"){
			callback("Unable to find the address");
		}else if(body.status === "OK"){
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
		}
	});
};


module.exports.geocodeAddress = geocodeAddress;


//https://api.darksky.net/forecast/e8e89576d3d996f5cc53eaf1a2214cf2/