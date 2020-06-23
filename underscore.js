const _ = require('underscore');
const { map } = require('underscore');

const numbers = [2, 5, 8, 9];
const squares = _.map(numbers, x => x * x);
console.log(squares);

// object-oriented
console.log(_([1, 2, 3]).map(x => x + 10));
console.log(_([1, 2, 3]).map(x => x + 10).filter(x => x >= 12));

// each
_.each(numbers, x => {
	console.log(`x is ${x}`);
});

//template (like ES6 string literals)
const createOutput = _.template(`
<h1><%=name%></h1>
<p>This person is <%=age%> years old.</p>
`);
const html = createOutput({ name: "Charles", age: 45 });
console.log(html);