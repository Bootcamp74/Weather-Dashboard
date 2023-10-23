const key = 'fc8bffadcdca6a94d021c093eac22797'
var city = "chicago"

// Fetch response for city name latatude and longitude

requestUrl0 = 'https://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=5&appid='+key;

fetch(requestUrl0)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log (data[0].name)
    console.log (data[0].lat)
    console.log (data[0].lon)
  });

// Fetch response for weather

requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.4875167&lon=-0.1687007&appid='+key;

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
