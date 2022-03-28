
document.addEventListener("DOMContentLoaded", function() {
    const speed = parseFloat(document.getElementById("speed").innerText);
    const temp = parseFloat(document.getElementById("temp").innerText);
    let chill = document.getElementById("chill");
    chill.innerHTML = buildWC(speed, temp);
});

function buildWC(speed, temp) {
    // let chill = document.getElementById('chill');

    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    let floorwc = Math.floor(wc);

    floorwc = (floorwc > temp) ? temp : floorwc;

    console.log(wc);
    // chill.innerHTML = wc;
    return floorwc;
}