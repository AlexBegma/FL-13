const toggle = document.querySelector('.nav-action');

toggle.addEventListener('click', function() {
	const mainContent = document.querySelector('.main');
	const nav = document.querySelector('.nav');

	this.classList.toggle('is-active');
	mainContent.classList.toggle('is-active');
	nav.classList.toggle('is-active');
	document.body.classList.toggle('is-active');
});

window.onload = function() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	context.moveTo(0, 200);
	context.lineTo(0, 0);
	context.stroke();
};