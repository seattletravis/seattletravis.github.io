import { timeInBinary } from './TimeInBinary.js';

function updateTib1() {
	const tib1 = new timeInBinary();
	console.log(tib1.hrsInDec + ' : ' + tib1.minInDec + ' : ' + tib1.secInDec);

	setTimeout(updateTib1, 1000);
}

updateTib1();
