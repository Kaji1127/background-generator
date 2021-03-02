var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

var setGradient = function () {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
};

window.addEventListener('load', function () {
	color1.value = '#ff0000';
	color2.value = '#ffff00';
});

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
