console.log('vBlipn is Online');

const blipDecimalHour10BinaryHour8 = document.getElementById('blipD10BH8');

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

	const readout = `${binaryHr10}`;

	console.log(readout);

	// console.log(decimalSec10);

	// console.log(decimalSec1);

	setTimeout(updateVerticalBlipClock, 1000);
}

updateVerticalBlipClock();
