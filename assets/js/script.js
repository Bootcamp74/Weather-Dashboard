
const key = 'fc8bffadcdca6a94d021c093eac22797'
var city = document.getElementById("citysearch").value
var cityTitle= document.getElementById("cityTitle")
cityTitle.innerHTML = city; 
var search = document.getElementById("search")

// Fetch request for city name latatude and longitude

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



// Fetch request for weather

requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.4875167&lon=-0.1687007&appid='+key;

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });



// Test for button function

search.onclick = function(hello){
  var city = document.getElementById("citysearch").value

  // Makes sure the user enters a city in the input field
  
  if (document.getElementById("citysearch").value == "" ||document.getElementById("citysearch").value == "Please enter a city name") {
  document.getElementById("citysearch").value = "Please enter a city name"
  return}

cityTitle.innerHTML = city;
};
 
hello();

