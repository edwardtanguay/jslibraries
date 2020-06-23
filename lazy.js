// npm i -D lazy.js
const _ = require('lazy.js');

const numbers = [3, 4, 2];

let count = 1;
console.log(numbers.map(x => {
	return {
		id: count++,
		number: x,
		double: x * 2
	}
}));

_.makeHttpRequest('http://localhost:29900/howtos?id=100')
	.lines()
	.take(10)
	.each(line => console.log(line));