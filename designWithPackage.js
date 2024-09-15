import { timeInBinary } from './TimeInBinary.js';
const baseTenClock = document.getElementById('tib1TimeInBase10');

function updateTib1() {
	const tib1 = new timeInBinary();
	baseTenClock.innerHTML =
		tib1.hrsInDec + ' : ' + tib1.minInDec + ' : ' + tib1.secInDec;
	setTimeout(updateTib1, 1000);
}

updateTib1();
