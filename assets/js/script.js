// Fetch response for city latatude and longitude

requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=fc8bffadcdca6a94d021c093eac22797';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// Fetch response for weather

requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.4875167&lon=-0.1687007&appid=fc8bffadcdca6a94d021c093eac22797';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
