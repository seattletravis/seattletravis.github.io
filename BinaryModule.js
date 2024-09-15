export class testClass {
	constructor(hourMode = '12') {
		const nowNow = new Date();
		if ((hourMode = '12')) {
		}
		let sec11InBin = nowNow.getSeconds().toString(2).padStart(6, '0');
		let min11InBin = nowNow.getMinutes().toString(2).padStart(6, '0');
		let hrs11InBin = nowNow.getHours().toString(2).padStart(6, '0');
		let sec01InBin = (nowNow.getSeconds() % 10).toString(2).padStart(4, '0');
		let sec10InBin = Math.floor(nowNow.getSeconds() / 10)
			.toString(2)
			.padStart(4, '0');

		let min01InBin = (nowNow.getMinutes() % 10).toString(2).padStart(4, '0');
		let min10InBin = Math.floor(nowNow.getMinutes() / 10)
			.toString(2)
			.padStart(4, '0');
		let hrs01InBin = (nowNow.getHours() % 10).toString(2).padStart(4, '0');
		let hrs10InBin = Math.floor(nowNow.getHours() / 10)
			.toString(2)
			.padStart(4, '0');

		// Split Hand to Binary - Hours, '10' - 1st Hand | '01' - 2nd Hand
		this.hrs10 = hrs10InBin;
		// hours 1st hand
		this.hrs10_08 = false;
		this.hrs10_04 = hrs10InBin.charAt(1) == '1' ? true : false;
		this.hrs10_02 = hrs10InBin.charAt(2) == '1' ? true : false;
		this.hrs10_01 = hrs10InBin.charAt(3) == '1' ? true : false;
		// hours 2nd hand
		this.hrs01 = hrs01InBin;
		this.hrs01_08 = hrs01InBin.charAt(0) == '1' ? true : false;
		this.hrs01_04 = hrs01InBin.charAt(1) == '1' ? true : false;
		this.hrs01_02 = hrs01InBin.charAt(2) == '1' ? true : false;
		this.hrs01_01 = hrs01InBin.charAt(3) == '1' ? true : false;

		// Split Hand to Binary - Minutes, '10' - 1st Hand | '01' - 2nd Hand
		this.min10 = min10InBin;
		// minutes 1st hand
		this.min10_08 = false;
		this.min10_04 = min10InBin.charAt(1) == '1' ? true : false;
		this.min10_02 = min10InBin.charAt(2) == '1' ? true : false;
		this.min10_01 = min10InBin.charAt(3) == '1' ? true : false;
		// minutes 2nd hand
		this.min01 = min01InBin;
		this.min01_08 = min01InBin.charAt(0) == '1' ? true : false;
		this.min01_04 = min01InBin.charAt(1) == '1' ? true : false;
		this.min01_02 = min01InBin.charAt(2) == '1' ? true : false;
		this.min01_01 = min01InBin.charAt(3) == '1' ? true : false;

		// Split Hand to Binary - Seconds, '10' - 1st Hand | '01' - 2nd Hand
		this.sec10 = sec10InBin;
		// seconds 1st hand
		this.sec10_08 = false;
		this.sec10_04 = sec10InBin.charAt(1) == '1' ? true : false;
		this.sec10_02 = sec10InBin.charAt(2) == '1' ? true : false;
		this.sec10_01 = sec10InBin.charAt(3) == '1' ? true : false;
		// seconds 2nd hand
		this.sec01 = sec01InBin;
		this.sec01_08 = sec01InBin.charAt(0) == '1' ? true : false;
		this.sec01_04 = sec01InBin.charAt(1) == '1' ? true : false;
		this.sec01_02 = sec01InBin.charAt(2) == '1' ? true : false;
		this.sec01_01 = sec01InBin.charAt(3) == '1' ? true : false;

		// Full Hand to Binary - Seconds
		this.sec11 = sec11InBin;
		this.sec11_32 = sec11InBin.charAt(0) == '1' ? true : false;
		this.sec11_16 = sec11InBin.charAt(1) == '1' ? true : false;
		this.sec11_08 = sec11InBin.charAt(2) == '1' ? true : false;
		this.sec11_04 = sec11InBin.charAt(3) == '1' ? true : false;
		this.sec11_02 = sec11InBin.charAt(4) == '1' ? true : false;
		this.sec11_01 = sec11InBin.charAt(5) == '1' ? true : false;
		// Full Hand to Binary - Minutes
		this.min11 = min11InBin;
		this.min11_32 = min11InBin.charAt(0) == '1' ? true : false;
		this.min11_16 = min11InBin.charAt(1) == '1' ? true : false;
		this.min11_08 = min11InBin.charAt(2) == '1' ? true : false;
		this.min11_04 = min11InBin.charAt(3) == '1' ? true : false;
		this.min11_02 = min11InBin.charAt(4) == '1' ? true : false;
		this.min11_01 = min11InBin.charAt(5) == '1' ? true : false;
		// Full Hand to Binany - Hours
		this.hrs11 = hrs11InBin;
		this.hrs11_32 = false;
		this.hrs11_16 = false;
		this.hrs11_08 = hrs11InBin.charAt(2) == '1' ? true : false;
		this.hrs11_04 = hrs11InBin.charAt(3) == '1' ? true : false;
		this.hrs11_02 = hrs11InBin.charAt(4) == '1' ? true : false;
		this.hrs11_01 = hrs11InBin.charAt(5) == '1' ? true : false;
	}
}
