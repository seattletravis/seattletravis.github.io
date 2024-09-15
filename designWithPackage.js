import { timeInBinary } from './TimeInBinary.js';
const tib1TimeInBase10 = document.getElementById('tib1TimeInBase10');

const elements = [
	'tib1TimeInBase10',
	'tib1',
	'tib1Hr10_01',
	'tib1Hr10_02',
	'tib1Hr10_04',
	'tib1Hr10_08',
	'tib1Hr01_01',
	'tib1Hr01_02',
	'tib1Hr01_04',
	'tib1Hr01_08',
	'tib1Min10_01',
	'tib1Min10_02',
	'tib1Min10_04',
	'tib1Min10_08',
	'tib1Min01_01',
	'tib1Min01_02',
	'tib1Min01_04',
	'tib1Min01_08',
	'tib1Sec10_01',
	'tib1Sec10_02',
	'tib1Sec10_04',
	'tib1Sec10_08',
	'tib1Sec01_01',
	'tib1Sec01_02',
	'tib1Sec01_04',
	'tib1Sec01_08',
];

function updateTib1() {
	const tib1 = new timeInBinary();
	tib1TimeInBase10.innerHTML =
		tib1.hrsInDec + ' : ' + tib1.minInDec + ' : ' + tib1.secInDec;
	setTimeout(updateTib1, 1000);
}

updateTib1();
