"use strict";

function main() {
	var t = parseInt(readLine());
	for (var a0 = 0; a0 < t; a0++) {
		var n = parseInt(readLine());
		var height = 1;
		for (let i = 1; i <= n; i++) {
			if (i % 2 !== 0) {
				height *= 2;
			} else {
				height += 1;
			}
		}
		console.log(height);
	}
}
