const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'].filter((town) => {
            if(town.name === "Preston" || town.name === "Fish Haven" || town.name === "Soda Springs") {
                return town;
            }
        });
        for (let i = 0; i < towns.length; i++ ) {
            let townstat = document.createElement('section');           

            let headline = document.createElement('h2');
            headline.textContent = towns[i].name;
            townstat.appendChild(headline);

            let motto = document.createElement('h3');
            motto.textContent = towns[i].motto;
            townstat.appendChild(motto);

            let founded = document.createElement('h4');
            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            townstat.appendChild(founded);

            let popu = document.createElement('h4');
            popu.textContent = 'Population: ' + towns[i].currentPopulation;
            townstat.appendChild(popu);

            let rain = document.createElement('h4');
            rain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' in.';
            townstat.appendChild(rain);          

            let div = document.createElement('div');
            div.appendChild(headline)
            div.appendChild(motto)
            div.appendChild(founded)
            div.appendChild(popu)
            div.appendChild(rain)
            townstat.appendChild(div)

            let img = document.createElement('img');
            img.setAttribute('src', './images/city' + (i + 1) + ".JPG");
            img.setAttribute('alt', towns[i].name);
            townstat.appendChild(img);

            document.querySelector('div.townstat').appendChild(townstat);
        }
      });