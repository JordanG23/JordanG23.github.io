
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const weatherApiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=64a077ede0594723caa3d5ad20669634'
const forecastApiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=64a077ede0594723caa3d5ad20669634'

// ***current weather summary***//
fetch(weatherApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //   console.log(jsObject);
      const weatherSummary = jsObject;

      let temp = weatherSummary.main.temp;
      let speed = weatherSummary.wind.speed;
      let chill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16; 
      document.querySelector("#chill").textContent = Math.round(chill);  

      document.getElementById('temp').innerText = Math.round(jsObject.main.temp);
      document.getElementById('condition').textContent = jsObject.weather[0].description;
      document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
      document.getElementById('humidity').textContent = jsObject.main.humidity;
      document.getElementById('speed').innerText = Math.round(jsObject.wind.speed);

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
        if (fore.dt_txt.includes('18:00:00')) {
            return fore;
        }
    })
        for (let i = 0; i < weatherForecast.length; i++) {
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

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'].filter((town) => {
            if(town.name === "Fish Haven") {
                return town;
            }
        });
        for (let i = 0; i < towns.length; i++ ) {
            let events = document.createElement('section');           

            let headline = document.createElement('h2');
            headline.textContent = 'Upcoming Events';
            events.appendChild(headline);

            let event1 = document.createElement('h3');
            event1.textContent = towns[i].events[0];
            events.appendChild(event1);   
            
            let event2 = document.createElement('h3');
            event2.textContent = towns[i].events[1];
            events.appendChild(event2);

            let event3 = document.createElement('h3');
            event3.textContent = towns[i].events[2];
            events.appendChild(event3);

            let event4 = document.createElement('h3');
            event4.textContent = towns[i].events[3];
            events.appendChild(event4);

            document.querySelector('div.events').appendChild(events);
        }
      });


      