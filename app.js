const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
	.options({
	  a: {
	  	demand: true,
	  	alias: "address",
	  	describe: "Address to fetch weather for",
	  	string: true
	  }
	})
	.help()
	.alias("help", "h")
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage);
	}else{
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weather) => {
			if(errorMessage){
				console.log(errorMessage);
			}else{
				var temp = (weather.temperature - 32)/1.8;
				console.log(results.address);
				console.log(`It's currently ${temp}`);
			}
		});
	}
});
