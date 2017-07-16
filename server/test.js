function transformData(array) {
	let arr = [];
	let obj = {};
	array.forEach(function (employee) {
		
		employee.forEach(function (detail) {
			obj[detail[0]] = detail[1];
		});
		arr.push(obj);
	});
	return arr;
}

// Input
const employeeData = [
	[
		['firstName', 'Joe'], ['lastName', 'Blow'], ['age', '42'], ['role', 'clerk']
	],
	[
		['firstName', 'Jane'], ['lastName', 'Blow'], ['age', '35'], ['role', 'technitian']
	]
];

const data = transformData(employeeData);
console.log(data[0]);
console.log(data[1]);