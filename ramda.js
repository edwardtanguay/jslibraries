// npm i -D ramda
const R = require('ramda');
const { get } = require('lodash');

//simple use
const numbers = [5, 7, 2, 6, 3, 7, 3];
let id = 1;
const numberObjects = R.map(a => {
	return { id: id++, number: a }
}, numbers);
console.log(numberObjects);

//curry
const objectify = R.map(a => { return { id: id++, number: a } });
console.log(objectify(numbers));

//curry2
const getLargeDoubles = R.map(
	R.filter(x => x > 3), //second
	R.map(x => 2 * x) //first
);
console.log(getLargeDoubles([0, 1, 1.5, 2, 3, 4, 5, 6]));


//other
const equals3 = R.equals(3);
console.log(R.all(equals3)([3,3,3,4,3]));