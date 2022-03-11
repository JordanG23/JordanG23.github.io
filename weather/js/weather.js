
var today = new Date();
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById("currentDate").textContent = fulldate;



document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
// document.getElementById('currentDate').innerHTML = d.toDateString();

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

if (dayName == "Friday") {
	var banner = document.createElement("div");
	banner.className = "flash";
	banner.innerHTML = "Preston Pancakes in the Park! 9:00 a.m. Every Saturday at the City Park pavilion.";

	document.body.insertBefore(banner,document.body.childNodes[0]).style.display = "block";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontSize = "30px";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontFamily = "Spectral"
	document.body.insertBefore(banner,document.body.childNodes[0]).style.textAlign = "center";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.padding = "10px 10px 10px 10px";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.backgroundColor = "#C1D3FE";
}
