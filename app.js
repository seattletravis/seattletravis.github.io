import { testClass } from './BinaryModule.js';

// test import of class from BinaryModule.js
// const nowNow = new Date();
const now = new testClass();
console.log(now.hrs11);
console.log('Split Hour Hands: ' + now.hrs10 + ' | ' + now.hrs01);
console.log(
	now.hrs10_08 +
		' | ' +
		now.hrs10_04 +
		' | ' +
		now.hrs10_02 +
		' | ' +
		now.hrs10_01
);
console.log(
	now.hrs01_08 +
		' | ' +
		now.hrs01_04 +
		' | ' +
		now.hrs01_02 +
		' | ' +
		now.hrs01_01
);
console.log('Split Minute Hands: ' + now.min10 + ' | ' + now.min01);
console.log(
	now.min10_08 +
		' | ' +
		now.min10_04 +
		' | ' +
		now.min10_02 +
		' | ' +
		now.min10_01
);
console.log(
	now.min01_08 +
		' | ' +
		now.min01_04 +
		' | ' +
		now.min01_02 +
		' | ' +
		now.min01_01
);

console.log('Split Second Hands: ' + now.sec10 + ' | ' + now.sec01);
console.log(
	now.sec10_08 +
		' | ' +
		now.sec10_04 +
		' | ' +
		now.sec10_02 +
		' | ' +
		now.sec10_01
);
console.log(
	now.sec01_08 +
		' | ' +
		now.sec01_04 +
		' | ' +
		now.sec01_02 +
		' | ' +
		now.sec01_01
);

console.log("It's telling time, it's really really telling time!!!");

// end test

const decimalClock = document.getElementById('decimalClock');
const binaryClock = document.getElementById('binaryClock');
const blipperClock = document.getElementById('blipperClock');

const blipperH8 = document.getElementById('blipperH8');
const blipperH4 = document.getElementById('blipperH4');
const blipperH2 = document.getElementById('blipperH2');
const blipperH1 = document.getElementById('blipperH1');
const blipperM32 = document.getElementById('blipperM32');
const blipperM16 = document.getElementById('blipperM16');
const blipperM8 = document.getElementById('blipperM8');
const blipperM4 = document.getElementById('blipperM4');
const blipperM2 = document.getElementById('blipperM2');
const blipperM1 = document.getElementById('blipperM1');
const blipperS32 = document.getElementById('blipperS32');
const blipperS16 = document.getElementById('blipperS16');
const blipperS8 = document.getElementById('blipperS8');
const blipperS4 = document.getElementById('blipperS4');
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
	const hours = now.getHours().toString(2).padStart(4, '0');
	const minutes = now.getMinutes().toString(2).padStart(6, '0');
	const seconds = now.getSeconds().toString(2).padStart(6, '0');

	const blipperReadoutH1 = hours.charAt(3);
	const blipperReadoutH2 = hours.charAt(2);
	const blipperReadoutH4 = hours.charAt(1);
	const blipperReadoutH8 = hours.charAt(0);

	const blipperReadoutM1 = minutes.charAt(5);
	const blipperReadoutM2 = minutes.charAt(4);
	const blipperReadoutM4 = minutes.charAt(3);
	const blipperReadoutM8 = minutes.charAt(2);
	const blipperReadoutM16 = minutes.charAt(1);
	const blipperReadoutM32 = minutes.charAt(0);

	const blipperReadoutS1 = seconds.charAt(5);
	const blipperReadoutS2 = seconds.charAt(4);
	const blipperReadoutS4 = seconds.charAt(3);
	const blipperReadoutS8 = seconds.charAt(2);
	const blipperReadoutS16 = seconds.charAt(1);
	const blipperReadoutS32 = seconds.charAt(0);

	blipperH1.className =
		blipperReadoutH1 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperH2.className =
		blipperReadoutH2 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperH4.className =
		blipperReadoutH4 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperH8.className =
		blipperReadoutH8 == '1' ? 'blipperOn blips' : 'blipperOff blips';

	blipperM1.className =
		blipperReadoutM1 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperM2.className =
		blipperReadoutM2 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperM4.className =
		blipperReadoutM4 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperM8.className =
		blipperReadoutM8 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperM16.className =
		blipperReadoutM16 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperM32.className =
		blipperReadoutM32 == '1' ? 'blipperOn blips' : 'blipperOff blips';

	blipperS1.className =
		blipperReadoutS1 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperS2.className =
		blipperReadoutS2 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperS4.className =
		blipperReadoutS4 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperS8.className =
		blipperReadoutS8 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperS16.className =
		blipperReadoutS16 == '1' ? 'blipperOn blips' : 'blipperOff blips';
	blipperS32.className =
		blipperReadoutS32 == '1' ? 'blipperOn blips' : 'blipperOff blips';

	setTimeout(updateBlipperBinaryClock, 1000);
}

updateDecimalClock();
updateBinaryClock();
updateBlipperBinaryClock();
