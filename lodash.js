const _ = require('lodash');

// .map() requires .value() to get the value, enables chaining
const r1 = _([1, 2, 3]).map(x => 2 * x).value();
console.log(r1);

// notes that .reduce() does not enable chaining, i.e. no .value()
const r2 = _([1, 2, 3]).map(x => 2 * x).reduce((a, b) => a + b, 0);
console.log(r2);

const person = {
	name: 'Charles',
	age: 45,
	getInfo: function () {
		return `The person ${this.name} is ${this.years} years old.`;
	}
}
const person2 = _.clone(person);

person.name = 'James';
console.log(person.name);
console.log(person.getInfo());

console.log(person2.name);
console.log(person2.getInfo());

// ._keyBy()
const computers = [
	{
		id: 1,
		name: "PC323",
		os: 'Windows 10'
	},
	{
		id: 2,
		name: "PC113",
		os: 'Windows Server 2016'
	},
	{
		id: 3,
		name: "PC221",
		os: 'Ubuntu'
	}
];
const lookupComputers = _.keyBy(computers, 'id');
console.log(lookupComputers[2]);

// _.deburr()
const persons = [
	{
		name: 'Émile Zola',
		age: 45
	},
	{
		name: 'Camille Saint-Saëns',
		age: 46
	}
];
_.each(persons, person => {
	console.log(`save info on ${person.name} to: ${_.deburr(person.name).toLowerCase().split(' ').join('').split('-').join('')}.txt`);
})