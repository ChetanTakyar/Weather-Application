function fetchWeather(input) {
  const URI ="https://www.metaweather.com/api/location/search/?query=" + input;
	const fetchPromise = fetch(URI, {
		headers: {
			Accept: "application/json",
		},
	});
	const StreamPromise = fetchPromise.then((weatherData) => weatherData.json());
	StreamPromise.then((weatherJSON) => {
		const woeid = weatherJSON[0].woeid;
    
		const weatherinfoURI = `https:www.metaweather.com/api/location/${woeid}/`;
		const allInfo = fetch(weatherinfoURI, {
			headers: {
				Accept: "application/json",
			},
    });
    const allInfoStream = allInfo.then(data => data.json());

    allInfoStream.then((allData) => {
		let weatherSummary = "";

		weatherSummary = `
			<h2>Today's forecast for ${allData.title}</h2>
			<h4>Max Temperature Today: ${allData.consolidated_weather[0].max_temp}</h4>
			<h4>Min Temperature Today: ${allData.consolidated_weather[0].min_temp}</h4>
		`;

		document.getElementById("weatherInfo").innerHTML = weatherSummary;
    })
	});
}

function cityinput() {
	cityName = document.getElementById("cityInputBox").value;
	return fetchWeather(cityName);
}
