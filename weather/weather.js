const request = require("request");

var getWeather = (lat, lng, callback) => {
		request({
			url: "https://api.darksky.net/forecast/e8e89576d3d996f5cc53eaf1a2214cf2/" + lat + "," + lng,
			json: true
		},
		 function(error, response, body){
		if(!error && response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}else{
			callback("unable to fetch data");
		}
	});
}

module.exports.getWeather = getWeather; 