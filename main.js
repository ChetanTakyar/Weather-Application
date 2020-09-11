function fetchWeather(input) {
  const proxyURI = "https://cors-anywhere.herokuapp.com/";
  const URI = proxyURI+"https://www.metaweather.com/api/location/search/?query=" + input;
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
      console.log(allData.title);

    })
	});
}

function cityinput() {
	cityName = document.getElementById("cityInputBox").value;
	return fetchWeather(cityName);
}
