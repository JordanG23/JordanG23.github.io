var slider = document.getElementById("myRange");
var output = document.getElementById("index");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}