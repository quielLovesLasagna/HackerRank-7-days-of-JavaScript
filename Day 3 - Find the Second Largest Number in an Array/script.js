"use strict";

function processData(myArray) {
	return Array.from([...new Set(myArray)]).sort((a, b) => b - a)[1];
}

console.log(processData([10, 20, 30]));
