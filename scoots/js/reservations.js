const requestURL = 'https://JordanG23.github.io/scoots/data/reservation.json'

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const vehicles = jsonObject['vehicles'];
        for (let i = 0; i < vehicles.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = vehicles[i].name + ' ' + vehicles[i].lastname;
            card.appendChild(h2);
            let max = document.createElement('h3');
            max.textContent = 'Maximum Occupants: ' + vehicles[i].maxPersons;
            card.appendChild(max);
            let img = document.createElement('img');
            img.setAttribute('src', vehicles[i].imageurl);
            img.setAttribute('alt', vehicles[i].name + ' ' + vehicles[i].lastname + ' - ' + i+1);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);
        }
      });