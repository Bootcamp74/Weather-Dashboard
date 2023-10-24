
// Needed to change const key to var key to run in github??
// Error: "key already defined." Ran fine in Live server

var key = 'fc8bffadcdca6a94d021c093eac22797'
var key1 ='4405d10b6225de2b46a773cf230ca378'
var city = document.getElementById("citysearch").value
var cityTitle= document.getElementById("cityTitle")
var search = document.getElementById("search")
var Temp = document.getElementById('Temp')
var Wind = document.getElementById('Wind')
var Humidity = document.getElementById('Humidity')
var y = 0
var element = []




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
    cityTitle.innerHTML = cityNam
   console.log(cityLat)
   console.log(cityLon)
  

 // Fetch request for weather

requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon +'&appid='+key;


fetch(requestUrl)
.then(function (response) {
      return response.json();
    })

  .then(function (data) {
    console.log(data);
    console.log(data.list.length)

    // get array elements that correspond to 12 noon
   

    for (let i = 0; i < data.list.length; i++) {
      var index=[] 
     
    
      index[i] = data.list[i].dt_txt.slice(11,13)
      console.log(data.list[i].dt_txt.slice(11,13));
      console.log(index[i]);

        if (index[i] === "12") {
        element[y]=i
        console.log(element[y])
        y++
        
        }
     
      }
        
        for (let i = 0; i < element.length;i++) {
          console.log(element[i])
        }
      
        
  
      
      })
      


      })


  
  }
}
    
