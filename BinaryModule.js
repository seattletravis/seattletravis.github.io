export function binaryClockData() {
  console.log("Here's your object with all the stuff you need in it!!!");
}

export class testClass {
  constructor(nowNow) {
    let secondsInBinary = nowNow.getSeconds().toString(2).padStart(6, "0");
    let minutesInBinary = nowNow.getMinutes().toString(2).padStart(6, "0");
    let hoursInBinary = nowNow.getHours().toString(2).padStart(6, "0");
    this.secondsInBinary = secondsInBinary;
    this.sec11_32 = secondsInBinary.charAt(0) == "1" ? true : false;
    this.sec11_16 = secondsInBinary.charAt(1) == "1" ? true : false;
    this.sec11_08 = secondsInBinary.charAt(2) == "1" ? true : false;
    this.sec11_04 = secondsInBinary.charAt(3) == "1" ? true : false;
    this.sec11_02 = secondsInBinary.charAt(4) == "1" ? true : false;
    this.sec11_01 = secondsInBinary.charAt(5) == "1" ? true : false;
    this.minutesInBinary = minutesInBinary;
    this.min11_32 = minutesInBinary.charAt(0) == "1" ? true : false;
    this.min11_16 = minutesInBinary.charAt(1) == "1" ? true : false;
    this.min11_08 = minutesInBinary.charAt(2) == "1" ? true : false;
    this.min11_04 = minutesInBinary.charAt(3) == "1" ? true : false;
    this.min11_02 = minutesInBinary.charAt(4) == "1" ? true : false;
    this.min11_01 = minutesInBinary.charAt(5) == "1" ? true : false;
    this.hoursInBinary = hoursInBinary;
    this.hr11_32 = hoursInBinary.charAt(0) == "1" ? true : false;
    this.hr11_16 = hoursInBinary.charAt(1) == "1" ? true : false;
    this.hr11_08 = hoursInBinary.charAt(2) == "1" ? true : false;
    this.hr11_04 = hoursInBinary.charAt(3) == "1" ? true : false;
    this.hr11_02 = hoursInBinary.charAt(4) == "1" ? true : false;
    this.hr11_01 = hoursInBinary.charAt(5) == "1" ? true : false;
  }
}
