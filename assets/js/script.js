
// Needed to change const key to var key to run in github??
// Error: "key already defined." Ran fine in Live server

var key = 'fc8bffadcdca6a94d021c093eac22797'
var key1 ='4405d10b6225de2b46a773cf230ca378'
var city = document.getElementById("citysearch").value
var search = document.getElementById("search")
var Temp = document.getElementById('Temp')
var Wind = document.getElementById('Wind')
var Humidity = document.getElementById('Humidity')
var y = 0
var element = []
var dayDate = []
var dayIcon = []
var dayTemp = []
var dayHumid = []
var timeZone



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

// Checks object length to determine if city exists

  if (data.length < 1) {
    Temp.innerHTML = ""
    Wind.innerHTML = ""
    Humidity.innerHTML = ""
    cityTitle.innerHTML = "City not found. Please check spelling and try again."
    return}
  
    

 // City Name is confirmed
 
    var cityNam = data[0].name
    var cityLat = data[0].lat
    var cityLon = data[0].lon
  

 // Fetch request for weather

requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon +'&appid='+key;


fetch(requestUrl)
.then(function (response) {
      return response.json();
    })

  .then(function (data) {
    console.log(data);
    console.log(data.list.length)
 
    // use timezone info to get array elements that correspond to about 12 noon local time more or less
   
   timeZone = (12 - Math.round((data.city.timezone/3600)/3)*3)
   

    for (let i = 0; i < data.list.length; i++) {
      let index=[] 
     
    // change type of index[i] from a string to a number

      index[i] = Number(data.list[i].dt_txt.slice(11,13))


      // gets weather information for 12 noon timeframe for 5 days

        if (index[i] == timeZone) {
        element[y]=i
        y++ 
        }
      }
        
        for (let i = 0; i < element.length;i++) {
      
        dayDate [i] = data.list[element[i]].dt_txt.slice(0,11)
        dayIcon [i]= data.list[element[i]].weather[0].icon

        // Change kelvin to fahrenheit to nearest interger

        dayTemp [i]= (Math.round((data.list[element[i]].main.temp - 273.15) * 9/5) +32)
        dayHumid [i]= data.list[element[i]].main.humidity
        console.log(dayDate [i])
        console.log(dayIcon [i])
        console.log(dayTemp [i])
        console.log(dayHumid [i])
        y = 0
        // cityTitle.innerHTML = cityNam + " " + data.list[0].dt_txt
        cityTitle.innerHTML = cityNam + " (" + data.list[0].dt_txt.slice(5,7) + "/" + data.list[0].dt_txt.slice(8,10)+ "/" + data.list[0].dt_txt.slice(0,4) + ")"
        }









        
  
  
      
      })
      


      })


  
  }
}
    
