const blipCircleHr10_4 = document.getElementById('blipCircleHr10_4');
const blipCircleHr10_2 = document.getElementById('blipCircleHr10_2');
const blipCircleHr10_1 = document.getElementById('blipCircleHr10_1');
const blipCircleHr1_8 = document.getElementById('blipCircleHr1_8');
const blipCircleHr1_4 = document.getElementById('blipCircleHr1_4');
const blipCircleHr1_2 = document.getElementById('blipCircleHr1_2');
const blipCircleHr1_1 = document.getElementById('blipCircleHr1_1');
const blipCircleMin10_4 = document.getElementById('blipCircleMin10_4');
const blipCircleMin10_2 = document.getElementById('blipCircleMin10_2');
const blipCircleMin10_1 = document.getElementById('blipCircleMin10_1');
const blipCircleMin1_8 = document.getElementById('blipCircleMin1_8');
const blipCircleMin1_4 = document.getElementById('blipCircleMin1_4');
const blipCircleMin1_2 = document.getElementById('blipCircleMin1_2');
const blipCircleMin1_1 = document.getElementById('blipCircleMin1_1');

function updateBlipCircleClock() {
	const now = new Date();
	const decimalHr10 = Math.floor(now.getHours() / 10);
	const decimalHr1 = now.getHours() % 10;
	const decimalMin10 = Math.floor(now.getMinutes() / 10);
	const decimalMin1 = now.getMinutes() % 10;

	const binaryCircleHr10 = decimalHr10.toString(2).padStart(3, '0');
	const binaryCircleHr1 = decimalHr1.toString(2).padStart(4, '0');
	const binaryCircleMin10 = decimalMin10.toString(2).padStart(3, '0');
	const binaryCircleMin1 = decimalMin1.toString(2).padStart(4, '0');

	const Hr10_4 = binaryCircleHr10.charAt(2);
	const Hr10_2 = binaryCircleHr10.charAt(1);
	const Hr10_1 = binaryCircleHr10.charAt(0);
	const Hr1_8 = binaryCircleHr1.charAt(3);
	const Hr1_4 = binaryCircleHr1.charAt(2);
	const Hr1_2 = binaryCircleHr1.charAt(1);
	const Hr1_1 = binaryCircleHr1.charAt(0);
	const Min10_4 = binaryCircleMin10.charAt(2);
	const Min10_2 = binaryCircleMin10.charAt(1);
	const Min10_1 = binaryCircleMin10.charAt(0);
	const Min1_8 = binaryCircleMin1.charAt(3);
	const Min1_4 = binaryCircleMin1.charAt(2);
	const Min1_2 = binaryCircleMin1.charAt(1);
	const Min1_1 = binaryCircleMin1.charAt(0);

	blipCircleHr10_4.className =
		Hr10_4 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleHr10_2.className =
		Hr10_2 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleHr10_1.className =
		Hr10_1 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleHr1_8.className =
		Hr1_8 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleHr1_4.className =
		Hr1_4 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleHr1_2.className =
		Hr1_2 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleHr1_1.className =
		Hr1_1 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';

	blipCircleMin10_4.className =
		Min10_4 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleMin10_2.className =
		Min10_2 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleMin10_1.className =
		Min10_1 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleMin1_8.className =
		Min1_8 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleMin1_4.className =
		Min1_4 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleMin1_2.className =
		Min1_2 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';
	blipCircleMin1_1.className =
		Min1_1 == '1' ? 'blipCircleOn blipsCircle' : 'blipCircleOff blipsCircle';

	setTimeout(updateBlipCircleClock, 1000);
}

updateVerticalBlipClock();
