/* Variables */
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomBg = document.getElementById('color-random');
const text = document.getElementById('current-color');

/* Functions */

// bodyの背景色をinputを使って選ばれた色に変更
const setGradient = function () {
	body.style.background = `linear-gradient(to right bottom, ${color1.value}, ${color2.value})`;
	currentColorText();
};

// #current-colorに選ばれた色のコードを挿入
const currentColorText = function () {
	text.textContent = `background-image: ${body.style.background};`;
};

// inputのvalueをランダムに生成
const randomBackgroundColor = function () {
	// 16進数の値を取得
	let randomColor1 = Math.floor(Math.random() * 16 ** 6).toString(16);
	// 6桁未満の時、冒頭に0をつける
	for (let textCount = randomColor1.length; textCount < 6; textCount++) {
		randomColor1 = `0${randomColor1}`;
	}

	// 16進数の値を取得
	let randomColor2 = Math.floor(Math.random() * 16 ** 6).toString(16);
	// 6桁未満の時、冒頭に0をつける
	for (let textCount = randomColor2.length; textCount < 6; textCount++) {
		randomColor2 = `0${randomColor2}`;
	}

	color1.value = `#${randomColor1}`;
	color2.value = `#${randomColor2}`;
	setGradient();
};

/* Event */
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomBg.addEventListener('click', randomBackgroundColor);
