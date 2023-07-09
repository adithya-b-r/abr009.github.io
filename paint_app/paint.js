const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');
const cx = canvas.offsetLeft;
const cy = canvas.offsetTop;

canvas.width = window.innerWidth - cx;
canvas.height = window.innerHeight - cy;

let isPainting = false;

toolbar.addEventListener('click', e => {
	if (e.target.id === 'clear') {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
});

toolbar.addEventListener('change', e => {
	if (e.target.id === 'stroke') 
		ctx.strokeStyle = e.target.value;
	else
		ctx.lineWidth = e.target.value;
});

const draw = e => {
	if (isPainting) {
	ctx.lineCap = 'round';
	ctx.lineTo(e.clientX - cx+20, e.clientY - cy)	//use cx+20 for more accuracy.
	ctx.stroke();
}}

canvas.addEventListener('mousedown', e => {
	isPainting = true;
});

canvas.addEventListener('mouseup', e => {
	isPainting = false;
	ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
