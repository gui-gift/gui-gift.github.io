// 获取像素图容器
var pixelArt = document.getElementById("pixel-art");

// 生成像素图
function generatePixelArt() {
	// 清空像素图容器
	pixelArt.innerHTML = "";

	// 生成像素
	for (var i = 0; i < 100; i++) {
		var pixel = document.createElement("div");
		pixel.className = "pixel";
		pixel.style.backgroundColor = getRandomColor();
		pixelArt.appendChild(pixel);
	}
}

// 获取随机颜色
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// 绑定生成按钮点击事件
var generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generatePixelArt);

// 初始生成像素图
generatePixelArt();