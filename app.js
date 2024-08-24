const decimalClock = document.getElementById('decimalClock');
const binaryClock = document.getElementById('binaryClock');
const blipperClock = document.getElementById('blipperClock');
const blipperH6 = document.getElementById('blipperH32');
const blipperH5 = document.getElementById('blipperH16');
const blipperH4 = document.getElementById('blipperH8');
const blipperH3 = document.getElementById('blipperH4');
const blipperH2 = document.getElementById('blipperH2');
const blipperH1 = document.getElementById('blipperH1');
const blipperM6 = document.getElementById('blipperM32');
const blipperM5 = document.getElementById('blipperM16');
const blipperM4 = document.getElementById('blipperM8');
const blipperM3 = document.getElementById('blipperM4');
const blipperM2 = document.getElementById('blipperM2');
const blipperM1 = document.getElementById('blipperM1');
const blipperS6 = document.getElementById('blipperS32');
const blipperS5 = document.getElementById('blipperS16');
const blipperS4 = document.getElementById('blipperS8');
const blipperS3 = document.getElementById('blipperS4');
const blipperS2 = document.getElementById('blipperS2');
const blipperS1 = document.getElementById('blipperS1');

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

function updateBlipperBinaryClock() {
	const now = new Date();
	const seconds = now.getSeconds().toString(2).padStart(6, '0');

	const blipperReadoutS1 = seconds.charAt(5);
	const blipperReadoutS2 = seconds.charAt(4);

	blipperS1.innerText = blipperReadoutS1;
	blipperS2.innerText = blipperReadoutS2;

	setTimeout(updateBlipperBinaryClock, 1000);
}

updateDecimalClock();
updateBinaryClock();
updateBlipperBinaryClock();
