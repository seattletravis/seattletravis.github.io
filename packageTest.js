import { testClass } from './BinaryModule.js';

// test import of class from BinaryModule.js
// const nowNow = new Date();
const now = new testClass();
console.log(now.hrs11);
console.log(
	'Split Hour Hands: ' +
		now.hrs10 +
		' | ' +
		now.hrs01 +
		', Decimal: ' +
		now.hrsInDec
);
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
console.log(now.min11);
console.log(
	'Split Minute Hands: ' +
		now.min10 +
		' | ' +
		now.min01 +
		', Decimal: ' +
		now.minInDec
);
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
console.log(now.sec11);
console.log(
	'Split Second Hands: ' +
		now.sec10 +
		' | ' +
		now.sec01 +
		', Decimal: ' +
		now.secInDec
);
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
