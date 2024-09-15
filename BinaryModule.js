export class testClass {
	constructor(hourMode = '12') {
		const nowNow = new Date();
		if ((hourMode = '12')) {
		}
		let seconds11InBinary = nowNow.getSeconds().toString(2).padStart(6, '0');
		let minutes11InBinary = nowNow.getMinutes().toString(2).padStart(6, '0');
		let hours11InBinary = nowNow.getHours().toString(2).padStart(6, '0');
		let seconds01InBinary = (nowNow.getSeconds() % 10)
			.toString(2)
			.padStart(4, '0');
		let seconds10InBinary = Math.floor(nowNow.getSeconds() / 10)
			.toString(2)
			.padStart(4, '0');

		let minutes01InBinary = (nowNow.getMinutes() % 10)
			.toString(2)
			.padStart(4, '0');
		let minutes10InBinary = Math.floor(nowNow.getMinutes() / 10)
			.toString(2)
			.padStart(4, '0');
		let hours01InBinary = (nowNow.getHours() % 10).toString(2).padStart(4, '0');
		let hours10InBinary = Math.floor(nowNow.getHours() / 10)
			.toString(2)
			.padStart(4, '0');

		// Split Hand to Binary - Hours, '10' - 1st Hand | '01' - 2nd Hand
		this.hr10 = hours10InBinary;
		// hours 1st hand
		this.hr10_08 = false;
		this.hr10_04 = hours10InBinary.charAt(1) == '1' ? true : false;
		this.hr10_02 = hours10InBinary.charAt(2) == '1' ? true : false;
		this.hr10_01 = hours10InBinary.charAt(3) == '1' ? true : false;
		// hours 2nd hand
		this.hr01 = hours01InBinary;
		this.hr01_08 = hours01InBinary.charAt(0) == '1' ? true : false;
		this.hr01_04 = hours01InBinary.charAt(1) == '1' ? true : false;
		this.hr01_02 = hours01InBinary.charAt(2) == '1' ? true : false;
		this.hr01_01 = hours01InBinary.charAt(3) == '1' ? true : false;

		// Split Hand to Binary - Minutes, '10' - 1st Hand | '01' - 2nd Hand
		this.min10 = minutes10InBinary;
		// minutes 1st hand
		this.min10_08 = false;
		this.min10_04 = minutes10InBinary.charAt(1) == '1' ? true : false;
		this.min10_02 = minutes10InBinary.charAt(2) == '1' ? true : false;
		this.min10_01 = minutes10InBinary.charAt(3) == '1' ? true : false;
		// minutes 2nd hand
		this.min01 = minutes01InBinary;
		this.min01_08 = minutes01InBinary.charAt(0) == '1' ? true : false;
		this.min01_04 = minutes01InBinary.charAt(1) == '1' ? true : false;
		this.min01_02 = minutes01InBinary.charAt(2) == '1' ? true : false;
		this.min01_01 = minutes01InBinary.charAt(3) == '1' ? true : false;

		// Split Hand to Binary - Seconds, '10' - 1st Hand | '01' - 2nd Hand
		this.sec10 = seconds10InBinary;
		// seconds 1st hand
		this.sec10_08 = false;
		this.sec10_04 = seconds10InBinary.charAt(1) == '1' ? true : false;
		this.sec10_02 = seconds10InBinary.charAt(2) == '1' ? true : false;
		this.sec10_01 = seconds10InBinary.charAt(3) == '1' ? true : false;
		// seconds 2nd hand
		this.sec01 = seconds01InBinary;
		this.sec01_08 = seconds01InBinary.charAt(0) == '1' ? true : false;
		this.sec01_04 = seconds01InBinary.charAt(1) == '1' ? true : false;
		this.sec01_02 = seconds01InBinary.charAt(2) == '1' ? true : false;
		this.sec01_01 = seconds01InBinary.charAt(3) == '1' ? true : false;

		// Full Hand to Binary - Seconds
		this.sec11 = seconds11InBinary;
		this.sec11_32 = seconds11InBinary.charAt(0) == '1' ? true : false;
		this.sec11_16 = seconds11InBinary.charAt(1) == '1' ? true : false;
		this.sec11_08 = seconds11InBinary.charAt(2) == '1' ? true : false;
		this.sec11_04 = seconds11InBinary.charAt(3) == '1' ? true : false;
		this.sec11_02 = seconds11InBinary.charAt(4) == '1' ? true : false;
		this.sec11_01 = seconds11InBinary.charAt(5) == '1' ? true : false;
		// Full Hand to Binary - Minutes
		this.min11 = minutes11InBinary;
		this.min11_32 = minutes11InBinary.charAt(0) == '1' ? true : false;
		this.min11_16 = minutes11InBinary.charAt(1) == '1' ? true : false;
		this.min11_08 = minutes11InBinary.charAt(2) == '1' ? true : false;
		this.min11_04 = minutes11InBinary.charAt(3) == '1' ? true : false;
		this.min11_02 = minutes11InBinary.charAt(4) == '1' ? true : false;
		this.min11_01 = minutes11InBinary.charAt(5) == '1' ? true : false;
		// Full Hand to Binany - Hours
		this.hr11 = hours11InBinary;
		this.hr11_32 = false;
		this.hr11_16 = false;
		this.hr11_08 = hours11InBinary.charAt(2) == '1' ? true : false;
		this.hr11_04 = hours11InBinary.charAt(3) == '1' ? true : false;
		this.hr11_02 = hours11InBinary.charAt(4) == '1' ? true : false;
		this.hr11_01 = hours11InBinary.charAt(5) == '1' ? true : false;
	}
}
