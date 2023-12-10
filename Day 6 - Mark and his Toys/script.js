"use strict";

function processData(input) {
	// Split input into lines and parse integers
	const lines = input.trim().split("\n");
	const [n, k] = lines[0].split(" ").map(Number);
	const prices = lines[1].split(" ").map(Number);

	// Sort the prices in ascending order
	prices.sort((a, b) => a - b);

	let count = 0;
	let totalPrice = 0;

	// Iterate through the sorted prices
	for (let i = 0; i < n; i++) {
		// Check if buying the current toy exceeds the budget
		if (totalPrice + prices[i] <= k) {
			// If within budget, buy the toy and update the total price
			totalPrice += prices[i];
			count++;
		} else {
			// If buying the current toy exceeds the budget, stop the loop
			break;
		}
	}

	console.log(count);
}
