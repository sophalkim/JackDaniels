function init() {
	var demo = document.getElementById('demo');
	var left = 0;

	function frame() {
		left++;
		demo.style.left = left + 'px';
		if (left == 100) {
			clearInterval(id);
		}
	}

	var id = setInterval(frame, 20);
}

window.onload = init;