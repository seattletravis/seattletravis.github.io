export function binaryClockData() {
	console.log("Here's your object with all the stuff you need in it!!!");
}

export class testClass {
	constructor(nowNow) {
		let seconds11InBinary = nowNow.getSeconds().toString(2).padStart(6, '0');
		let minutes11InBinary = nowNow.getMinutes().toString(2).padStart(6, '0');
		let hours11InBinary = nowNow.getHours().toString(2).padStart(6, '0');
		let seconds01InBinary = nowNow.getSeconds() % 10;
		let seconds10InBinary = Math.floor(nowNow.getSeconds() / 10);

		this.sec10 = seconds10InBinary;
		this.sec01 = seconds01InBinary;

		this.sec11 = seconds11InBinary;
		this.sec11_32 = seconds11InBinary.charAt(0) == '1' ? true : false;
		this.sec11_16 = seconds11InBinary.charAt(1) == '1' ? true : false;
		this.sec11_08 = seconds11InBinary.charAt(2) == '1' ? true : false;
		this.sec11_04 = seconds11InBinary.charAt(3) == '1' ? true : false;
		this.sec11_02 = seconds11InBinary.charAt(4) == '1' ? true : false;
		this.sec11_01 = seconds11InBinary.charAt(5) == '1' ? true : false;
		this.min11 = minutes11InBinary;
		this.min11_32 = minutes11InBinary.charAt(0) == '1' ? true : false;
		this.min11_16 = minutes11InBinary.charAt(1) == '1' ? true : false;
		this.min11_08 = minutes11InBinary.charAt(2) == '1' ? true : false;
		this.min11_04 = minutes11InBinary.charAt(3) == '1' ? true : false;
		this.min11_02 = minutes11InBinary.charAt(4) == '1' ? true : false;
		this.min11_01 = minutes11InBinary.charAt(5) == '1' ? true : false;
		this.hr11 = hours11InBinary;
		this.hr11_32 = hours11InBinary.charAt(0) == '1' ? true : false;
		this.hr11_16 = hours11InBinary.charAt(1) == '1' ? true : false;
		this.hr11_08 = hours11InBinary.charAt(2) == '1' ? true : false;
		this.hr11_04 = hours11InBinary.charAt(3) == '1' ? true : false;
		this.hr11_02 = hours11InBinary.charAt(4) == '1' ? true : false;
		this.hr11_01 = hours11InBinary.charAt(5) == '1' ? true : false;
	}
}
