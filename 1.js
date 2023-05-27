const container = document.querySelector('.container');

for (let i = 0; i < 1600; i++) {
	const pixel = document.createElement('div');
	pixel.classList.add('pixel');
	pixel.style.backgroundColor = getRandomColor();
	container.appendChild(pixel);
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
