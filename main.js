const input = ()=>{
    document.getElementById("cityInputBox").value;
}

function fetchWeather(input) {
  const URI = "/api/location/search/?query=" + input;
  const fetchPromise = fetch(URI, {
    headers: {
      Accept: "application/json",
    },
  });


}
