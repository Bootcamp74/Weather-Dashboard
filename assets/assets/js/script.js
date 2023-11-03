
// Needed to change const key to var key to run in github??
// Error: "key already defined." Ran fine in Live server
var x
var key = 'fc8bffadcdca6a94d021c093eac22797'
var key1 ='4405d10b6225de2b46a773cf230ca378'
var city = document.getElementById("citysearch").value
var search = document.getElementById("search")
var Temp = document.getElementById('Temp')
var Wind = document.getElementById('Wind')
var Humidity = document.getElementById('Humidity')
var cityNam

var date1 = document.getElementById('date1')
var icon1 = document.getElementById('icon1')
var temp1 = document.getElementById('temp1')
var wind1 = document.getElementById('wind1')
var humi1 = document.getElementById('humi1')

var date2 = document.getElementById('date2')
var icon2 = document.getElementById('icon2')
var temp2 = document.getElementById('temp2')
var wind2 = document.getElementById('wind2')
var humi2 = document.getElementById('humi2')

var date3 = document.getElementById('date3')
var icon3 = document.getElementById('icon3')
var temp3 = document.getElementById('temp3')
var wind3 = document.getElementById('wind3')
var humi3 = document.getElementById('humi3')

var date4 = document.getElementById('date4')
var icon4 = document.getElementById('icon4')
var temp4 = document.getElementById('temp4')
var wind4 = document.getElementById('wind4')
var humi4 = document.getElementById('humi4')

var date5 = document.getElementById('date5')
var icon5 = document.getElementById('icon5')
var temp5 = document.getElementById('temp5')
var wind5 = document.getElementById('wind5')
var humi5 = document.getElementById('humi5')

var pastCities = []
var temp


var day1 = [];
var day2 = [];
var day3 = [];
var day4 = [];
var day5 = [];
var y = 0
var element = []
var dayDate = [0,1,2,3,4]
var dayIcon = []
var dayTemp = []
var dayHumid = []
var timeZone

function myFunction () {
   
}

// Test for clicks button function

search.addEventListener("click", start);  
document.getElementById("button0").addEventListener("click", start0);
document.getElementById("button1").addEventListener("click", start1);
document.getElementById("button2").addEventListener("click", start2);
document.getElementById("button3").addEventListener("click", start3);
document.getElementById("button4").addEventListener("click", start4);
document.getElementById("button5").addEventListener("click", start5);
document.getElementById("button6").addEventListener("click", start6);
document.getElementById("button7").addEventListener("click", start7);
document.getElementById("button8").addEventListener("click", start8);
document.getElementById("button9").addEventListener("click", start9);


// buttons functions
// These functions crete the past search buttons with names of cities in the inner HTML


function start0 () {
  document.getElementById("citysearch").value = pastCities[0]
  start()
}

function start1 () {
  document.getElementById("citysearch").value = pastCities[1]
  start()
}

function start2 () {
  document.getElementById("citysearch").value = pastCities[2]
  start()
}

function start3 () {
  document.getElementById("citysearch").value = pastCities[3]
  start()
}

function start4 () {
  document.getElementById("citysearch").value = pastCities[4]
  start()
}

function start5 () {
  document.getElementById("citysearch").value = pastCities[5]
  start()
}

function start6 () {
  document.getElementById("citysearch").value = pastCities[6]
  start()
}

function start7 () {
  document.getElementById("citysearch").value = pastCities[7]
  start()
}

function start8 () {
  document.getElementById("citysearch").value = pastCities[8]
  start()
}

function start9 () {
  document.getElementById("citysearch").value = pastCities[9]
  start()
}





function start ()
{
  
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
// Displays "Request failed. Status:  " + response.status + ". Please try again later."" if network fails
      if (response.status === 200) {
        console.log('Request succeeded');

      } else {
      document.getElementById('mainicon').removeAttribute("src")
       Temp.innerHTML = ""
       Wind.innerHTML = ""
       Humidity.innerHTML = ""
       cityTitle.innerHTML = "Request failed. Status:  " + response.status + ". Please try again later.";
        return
      }
        return response.json();
      })

      .then(function (data) {
      //  console.log(data);

// Checks object length to determine if city exists from the user search
// displays message "City not found. Please check spelling and try again."

  if (data.length < 1) {
    document.getElementById('mainicon').removeAttribute("src")
    Temp.innerHTML = ""
    Wind.innerHTML = ""
    Humidity.innerHTML = ""
    cityTitle.innerHTML = "City not found. Please check spelling and try again."
    return}
  
    

 // City Name is confirmed
 
    var cityNam = data[0].name
    var cityLat = data[0].lat
    var cityLon = data[0].lon
  
 myFunction()

// Get past city searches out of local storage

 temp = localStorage.getItem("weather") 

 
 // if statement for no Storage

 if (temp  == null) {
   
     pastCities[0]=cityNam
     var temp = JSON.stringify(pastCities);
     localStorage.setItem("weather", temp);

    }


//    //  compare cityNam to each element of pastCities

   pastCities = JSON.parse(temp)

   for (let i = 0; i < pastCities.length; i++) {
    
    if (cityNam==pastCities[i]){
      x = 25 }
    }
    
      
 if (x > 5 )  {
temp = JSON.stringify(pastCities);
localStorage.setItem("weather", temp);
x = 0 }
 else {

 pastCities.unshift(cityNam) 
 if (pastCities.length > 10) {
   pastCities.splice(10, 1)}
 temp = JSON.stringify(pastCities);
 localStorage.setItem("weather", temp);
x = 0
 }

 for (let i = 0; i < pastCities.length; i++) {
  
    document.getElementById("button" + i).style.display="block";
    document.getElementById("button" + i).innerHTML= pastCities[i]
  
 }

 // Fetch request for weather


requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon +'&appid='+key;


fetch(requestUrl)
.then(function (response) {
      return response.json();
    })

  .then(function (data) {
    // console.log(data);
    // console.log(data.list.length)
 
    // use timezone info to get array elements that correspond to a time frame of between 11 am to 1pm 
   
  timeZone = Math.round((data.city.timezone/3600))
   
      // write city name to main box and convert date to American format.
      // write temp, wind and humidity to main box. Convert kelvin to degrees F.

      cityTitle.innerHTML = cityNam + " (" + data.list[0].dt_txt.slice(5,7) + "/" + data.list[0].dt_txt.slice(8,10)+ "/" + data.list[0].dt_txt.slice(0,4) + ")"
      document.getElementById('mainicon').setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png')
      document.getElementById('mainicon').style.height = '50px';
      document.getElementById('Temp').innerHTML = "Temp: "+ (Math.round((data.list[0].main.temp - 273.15) * 9/5) +32) + "°F"
      document.getElementById('Wind').innerHTML = "Wind: " + data.list[0].wind.speed + ' MPH.'
      document.getElementById('Humidity').innerHTML = "Humidity: "+ data.list[0].main.humidity + " %"
    for (let i = 0; i < 10; i++) {
      let index=[] 
     
    // change type of index[i] from a string to a number

      index[i] = Number(data.list[i].dt_txt.slice(11,13))
   


      // Get weather information for 5 days and display into cards

        if (index[i] + timeZone < 14 && index[i] + timeZone > 10) {
        date1.innerHTML = data.list[8].dt_txt.slice(5,7)  + "/" + data.list[+8].dt_txt.slice(8,10)  + "/" + data.list[8].dt_txt.slice(0,4)
        date2.innerHTML = data.list[6].dt_txt.slice(5,7) + "/" + data.list[16].dt_txt.slice(8,10) + "/" + data.list[16].dt_txt.slice(0,4)
        date3.innerHTML = data.list[24].dt_txt.slice(5,7) + "/" + data.list[24].dt_txt.slice(8,10) + "/" + data.list[24].dt_txt.slice(0,4)
        date4.innerHTML = data.list[32].dt_txt.slice(5,7) + "/" + data.list[32].dt_txt.slice(8,10) + "/" + data.list[32].dt_txt.slice(0,4)
        date5.innerHTML = data.list[39].dt_txt.slice(5,7) + "/" + data.list[39].dt_txt.slice(8,10) + "/" + data.list[39].dt_txt.slice(0,4)
     
        icon1.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png') 
        icon1.style.maxHeight = '25%';
        icon1.style.maxWidth = '25%';
        icon2.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png')
        icon2.style.maxHeight = '25%';
        icon2.style.maxWidth = '25%';
        icon3.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[24].weather[0].icon + '@2x.png')
        icon3.style.maxHeight = '25%';
        icon3.style.maxWidth = '25%';
        icon4.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[32].weather[0].icon + '@2x.png')
        icon4.style.maxHeight = '25%';
        icon4.style.maxWidth = '25%';
        icon5.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[39].weather[0].icon + '@2x.png')
        icon5.style.maxHeight = '25%';
        icon5.style.maxWidth = '25%';
        
        
        temp1.innerHTML = "Temp: " + (Math.round((data.list[8].main.temp - 273.15) * 9/5) +32) + "°F"
        temp2.innerHTML = "Temp: " + (Math.round((data.list[16].main.temp - 273.15) * 9/5) +32) + "°F"
        temp3.innerHTML = "Temp: " + (Math.round((data.list[24].main.temp - 273.15) * 9/5) +32) + "°F"
        temp4.innerHTML = "Temp: " + (Math.round((data.list[32].main.temp - 273.15) * 9/5) +32) + "°F"
        temp5.innerHTML = "Temp: " + (Math.round((data.list[39].main.temp - 273.15) * 9/5) +32) + "°F"

        wind1.innerHTML = "Wind: " + data.list[8].wind.speed + ' MPH.'
        wind2.innerHTML = "Wind: " + data.list[16].wind.speed + ' MPH.'
        wind3.innerHTML = "Wind: " + data.list[24].wind.speed + ' MPH.' 
        wind4.innerHTML = "Wind: " + data.list[32].wind.speed + ' MPH.'
        wind5.innerHTML = "Wind: " + data.list[39].wind.speed + ' MPH.'

        humi1.innerHTML = "Humidity: "+ data.list[8].main.humidity + " %"
        humi2.innerHTML = "Humidity: "+ data.list[16].main.humidity + " %"
        humi3.innerHTML = "Humidity: "+ data.list[24].main.humidity + " %" 
        humi4.innerHTML = "Humidity: "+ data.list[32].main.humidity + " %"
        humi5.innerHTML = "Humidity: "+ data.list[39].main.humidity + " %"


        }
      }
  
   




       
   









        
  
  
      
      })
      


      })


  
  }
}
    
