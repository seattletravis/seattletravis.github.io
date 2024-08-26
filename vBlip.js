console.log('vBlipn is Online');

const blipDecimalHour10BinaryHour8 = document.getElementById('blipD10BH8');

function updateVerticalBlipClock() {
	const now = new Date();
	const decimalHour10 = Math.floor(now.getHours() / 10);
	const decimalHour1 = now.getHours() % 10;

	console.log(decimalHour10);
	console.log(decimalHour1);
}

updateVerticalBlipClock();
