
// Needed to change const key to var key to run in github??
// Error: "key already defined." Ran fine in Live server

var key = 'fc8bffadcdca6a94d021c093eac22797'
var city = document.getElementById("citysearch").value
var cityTitle= document.getElementById("cityTitle")
// cityTitle.innerHTML = city; 
var search = document.getElementById("search")
var Temp = document.getElementById('Temp')
var Wind = document.getElementById('Wind')
var Humidity = document.getElementById('Humidity')

// Fetch request for city name latatude and longitude

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
   
  //  Gets city name lat and lon
   
    requestUrl0 = 'https://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=5&appid='+key;
    
      fetch(requestUrl0)
      .then(function (response) {
     
// Checks network status

      if (response.status === 200) {
        console.log('Request succeeded');

      } else {
       Temp.innerHTML = ""
       Wind.innerHTML = ""
       Humidity.innerHTML = ""
       cityTitle.innerHTML = "Request failed. Status:  " + response.status + ". Please try again later.";
        return
      }
        return response.json();
      })

      .then(function (data) {
       console.log(data);
// Checks object length to dertermine if city exists

  if (data.length < 1) {
    Temp.innerHTML = ""
    Wind.innerHTML = ""
    Humidity.innerHTML = ""
    cityTitle.innerHTML = "City not found. Please check spelling and try again."
    return}

    // City Name is confirmed
    
    cityTitle.innerHTML = data[0].name}
       )
      }

  
        };
    
