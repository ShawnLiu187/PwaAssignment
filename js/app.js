//console.log(document.querySelector("#weatherImg"));

function getData (){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=ottawa&APPID=fc346fc7ba887239d2dd06c5874f55c3")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("weather").innerHTML = data.weather[0].description + ", " + Math.round((data.main.temp-273.15)) + "&#8451;"
        document.getElementById("weatherImg").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
//        console.log(document.querySelector("#weatherImg"))
    })
    .catch(function(err){
        console.log(err.message);
    })
}

function offLine () {
   fetch("http://api.openweathermap.org/data/2.5/weather?q=ottawa&APPID=fc346fc7ba887239d2dd06c5874f55c3")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("weather").innerHTML = "Offline Version: " + data.weather[0].description + ", " + (data.main.temp-273.15) + "&#8451;"
        document.getElementById("weatherImg").src = "img/offline.jpg"
//        console.log(document.querySelector("#weatherImg"))
    })
    .catch(function(err){
        console.log(err.message); 
})
}

getData()

window.addEventListener("online", getData);
window.addEventListener("offline", offLine);
