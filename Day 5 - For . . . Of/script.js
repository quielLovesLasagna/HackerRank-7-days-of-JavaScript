"use strict";

for (let str of my_array) {
	if (str === str.split("").reverse().join("")) {
		console.log(str);
	}
}
