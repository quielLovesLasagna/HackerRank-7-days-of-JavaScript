"use strict";

// Test data
const library = [
	{
		author: "Bill Gates",
		title: "The Road Ahead",
		libraryID: 1254,
	},
	{
		author: "Steve Jobs",
		title: "Walter Isaacson",
		libraryID: 4264,
	},
	{
		author: "Suzanne Collins",
		title: "Mockingjay: The Final Book of The Hunger Games",
		libraryID: 3245,
	},
];

function testFn() {
	// return the new object (sorted)
	library.sort((a, b) => {
		const b1 = a.title.toLowerCase();
		const b2 = b.title.toLowerCase();

		if (b1 < b2) return -1;
		if (b1 > b2) return 1;
		return 0;
	});
	console.log(library);
}

const sortLibrary = () =>
	library.sort((a, b) => a.title.localeCompare(b.title));

console.log(sortLibrary());
