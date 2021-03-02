/* Variables */
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomBg = document.getElementById('color-random');

/* Functions */

// bodyの背景色をinputを使って選ばれた色に変更
const setGradient = function () {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
};

// inputのvalueをランダムに生成
const randomBackgroundColor = function () {
	color1.value = `#${Math.floor(Math.random() * 16 ** 6).toString(16)}`;
	color2.value = `#${Math.floor(Math.random() * 16 ** 6).toString(16)}`;
	setGradient();
};

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomBg.addEventListener('click', randomBackgroundColor);
