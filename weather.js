const appKey = "cc63d73493510fd738750282ab5fc24a";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let wind = document.getElementById("ws");


    findWeatherDetails();

function findWeatherDetails() {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + "Wellington" + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  console.log(jsonObject);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = "Temperature: " + parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = "Humidity: " + jsonObject.main.humidity + "%";
  wind.innerHTML = "Windspeed: " + jsonObject.wind.speed + "km/h";
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}