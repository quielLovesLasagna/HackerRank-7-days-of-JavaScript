"use strict";

const my_function = (array) => {
	const newArray = array.map((num) => {
		if (num % 2 === 0) {
			return ++num;
		} else {
			return --num;
		}
	});
	return newArray;
};
