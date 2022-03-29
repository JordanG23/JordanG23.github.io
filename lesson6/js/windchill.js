
var temp = document.getElementById('temp').innerText;
var speed = document.getElementById('speed').innerText;

if ( temp <= 50 && speed >= 3) {
    var chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.querySelector('#chill').innerHTML = Math.round(chill);
}
else {
    document.querySelector('#chill').innerText = 'N/A';
}