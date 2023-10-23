

// Needed to change const key to var key to run in github??
// Error: "key already defined." Ran fine in Live server

var key = 'fc8bffadcdca6a94d021c093eac22797'
var city = document.getElementById("citysearch").value
// var cityTitle= document.getElementById("cityTitle")
cityTitle.innerHTML = city; 
var search = document.getElementById("search")

// Fetch request for city name latatude and longitude
// function latatude () {

// requestUrl0 = 'https://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=5&appid='+key;

// fetch(requestUrl0)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     console.log (data[0].name)
//     console.log (data[0].lat)
//     console.log (data[0].lon)
//     window.alert(data[0].name)
//   });
// return}


// Fetch request for weather

// requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.4875167&lon=-0.1687007&appid='+key;

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });



// Test for button function

search.onclick =  function () {
  
  var city = document.getElementById("citysearch").value

  // Makes sure the user enters a city in the input field
  
  if (document.getElementById("citysearch").value == "" ||document.getElementById("citysearch").value == "Please enter a city name") {
  document.getElementById("citysearch").value = "Please enter a city name"
  return}
  else {


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
          window.alert(data[0].name)
          document.getElementById("cityTitle").innerHTML = data[0].name
        });
      return}
    
  };
 
