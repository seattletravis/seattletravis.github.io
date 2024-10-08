const displayVBlip = document.getElementById('displayVBlip');
const vBlipHr10_4 = document.getElementById('vBlipHr10_4');
const vBlipHr10_2 = document.getElementById('vBlipHr10_2');
const vBlipHr10_1 = document.getElementById('vBlipHr10_1');
const vBlipHr1_8 = document.getElementById('vBlipHr1_8');
const vBlipHr1_4 = document.getElementById('vBlipHr1_4');
const vBlipHr1_2 = document.getElementById('vBlipHr1_2');
const vBlipHr1_1 = document.getElementById('vBlipHr1_1');
const vBlipMin10_4 = document.getElementById('vBlipMin10_4');
const vBlipMin10_2 = document.getElementById('vBlipMin10_2');
const vBlipMin10_1 = document.getElementById('vBlipMin10_1');
const vBlipMin1_8 = document.getElementById('vBlipMin1_8');
const vBlipMin1_4 = document.getElementById('vBlipMin1_4');
const vBlipMin1_2 = document.getElementById('vBlipMin1_2');
const vBlipMin1_1 = document.getElementById('vBlipMin1_1');

function updateVerticalBlipClock() {
	const now = new Date();
	const decimalHr10 = Math.floor(now.getHours() / 10);
	const decimalHr1 = now.getHours() % 10;
	const decimalMin10 = Math.floor(now.getMinutes() / 10);
	const decimalMin1 = now.getMinutes() % 10;
	const decimalSec10 = Math.floor(now.getSeconds() / 10);
	const decimalSec1 = now.getSeconds() % 10;

	const binaryHr10 = decimalHr10.toString(2).padStart(3, '0');
	const binaryHr1 = decimalHr1.toString(2).padStart(4, '0');
	const binaryMin10 = decimalMin10.toString(2).padStart(3, '0');
	const binaryMin1 = decimalMin1.toString(2).padStart(4, '0');
	const binarySec10 = decimalSec10.toString(2).padStart(3, '0');
	const binarySec1 = decimalSec1.toString(2).padStart(4, '0');

	// Name format is Unit Hr/Min/Sec followed by base 10 followed by base 2 example Hr10_4
	const Hr10_4 = binaryHr10.charAt(2);
	const Hr10_2 = binaryHr10.charAt(1);
	const Hr10_1 = binaryHr10.charAt(0);
	const Hr1_8 = binaryHr1.charAt(3);
	const Hr1_4 = binaryHr1.charAt(2);
	const Hr1_2 = binaryHr1.charAt(1);
	const Hr1_1 = binaryHr1.charAt(0);
	const Min10_4 = binaryMin10.charAt(2);
	const Min10_2 = binaryMin10.charAt(1);
	const Min10_1 = binaryMin10.charAt(0);
	const Min1_8 = binaryMin1.charAt(3);
	const Min1_4 = binaryMin1.charAt(2);
	const Min1_2 = binaryMin1.charAt(1);
	const Min1_1 = binaryMin1.charAt(0);
	const Sec10_4 = binarySec10.charAt(2);
	const Sec10_2 = binarySec10.charAt(1);
	const Sec10_1 = binarySec10.charAt(0);
	const Sec1_8 = binarySec1.charAt(3);
	const Sec1_4 = binarySec1.charAt(2);
	const Sec1_2 = binarySec1.charAt(1);
	const Sec1_1 = binarySec1.charAt(0);

	vBlipHr10_4.className = Hr10_4 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipHr10_2.className = Hr10_2 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipHr10_1.className = Hr10_1 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipHr1_8.className = Hr1_8 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipHr1_4.className = Hr1_4 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipHr1_2.className = Hr1_2 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipHr1_1.className = Hr1_1 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';

	vBlipMin10_4.className =
		Min10_4 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipMin10_2.className =
		Min10_2 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipMin10_1.className =
		Min10_1 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipMin1_8.className = Min1_8 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipMin1_4.className = Min1_4 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipMin1_2.className = Min1_2 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipMin1_1.className = Min1_1 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';

	vBlipSec10_4.className =
		Sec10_4 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipSec10_2.className =
		Sec10_2 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipSec10_1.className =
		Sec10_1 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipSec1_8.className = Sec1_8 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipSec1_4.className = Sec1_4 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipSec1_2.className = Sec1_2 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';
	vBlipSec1_1.className = Sec1_1 == '1' ? 'vBlipOn vBlips' : 'vBlipOff vBlips';

	const readout = `${binaryHr10}|${binaryHr1} : ${binaryMin10}|${binaryMin1} : ${binarySec10}|${binarySec1}`;

	displayVBlip.innerText = readout;

	setTimeout(updateVerticalBlipClock, 1000);
}

updateVerticalBlipClock();
