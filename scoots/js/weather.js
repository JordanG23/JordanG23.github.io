
const weatherApiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=64a077ede0594723caa3d5ad20669634'
const forecastApiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=64a077ede0594723caa3d5ad20669634'

// ***current weather summary***//
fetch(weatherApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //   console.log(jsObject);

      document.getElementById('temp').innerText = Math.round(jsObject.main.temp);
      document.getElementById('condition').textContent = jsObject.weather[0].description;
      document.getElementById('humidity').textContent = jsObject.main.humidity;
  });

fetch(forecastApiURL)
.then((response) => response.json())
.then((jsObject) => {
    // console.log(jsObject);
    const daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const weatherForecast = jsObject['list'].filter((fore) => {
        if (fore.dt_txt.includes('12:00:00')) {
            return fore;
        }
    })
        for (let i = 4; i < weatherForecast.length; i++) {
            let fiveday = document.createElement('section')
            fiveday.setAttribute("class", "flex-col")
            let day = document.createElement("span")
            day.textContent = daynames[new Date(weatherForecast[i].dt_txt).getDay()]
            day.setAttribute("class", "col-head")
            fiveday.appendChild(day)
            document.querySelector("div.forecast").appendChild(fiveday)
            let img = document.createElement("img")
            img.setAttribute("src", 'https://openweathermap.org/img/w/' + weatherForecast[i].weather[0].icon + '.png')
            img.setAttribute("alt", weatherForecast[i].weather[0].description)
            img.setAttribute("id", "fore")
            fiveday.appendChild(img)
            let temper = document.createElement("span")
            temper.textContent = Math.round(weatherForecast[i].main.temp) + "°F";
            temper.setAttribute("class", "data")
            fiveday.appendChild(temper)
        }
        
})

function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle("responsive");
}

