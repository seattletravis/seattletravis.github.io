const decimalClock = document.getElementById('decimalClock');
const binaryClock = document.getElementById('binaryClock');

function updateDecimalClock() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	const decimalClockReadout = `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

	decimalClock.innerText = decimalClockReadout;
	setTimeout(updateDecimalClock, 1000);
}

function updateBinaryClock() {
	const now = new Date();
	const hours = now.getHours().toString(2).padStart(4, '0');
	const minutes = now.getMinutes().toString(2).padStart(6, '0');
	const seconds = now.getSeconds().toString(2).padStart(6, '0');

	const binaryClockReadout = `${hours} : ${minutes} : ${seconds}`;

	binaryClock.innerText = binaryClockReadout;
	setTimeout(updateBinaryClock, 1000);
}

updateDecimalClock();
updateBinaryClock();
