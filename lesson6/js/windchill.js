const temp = parseFloat(document.getElementById("temp").innerHTML)
const speed = parseFloat(document.getElementById("speed").innerHTML)
if (temp <= 50 && speed > 3){
    const chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
document.querySelector("#chill").innerHTML = chill.toFixed(2)
} else {
    document.querySelector("#chill").innerHTML = "N/A"
}