"use strict";

function findDay(myDate) {
	// Return day for date myDate(MM/DD/YYYY)
	// Note that myDate contains the date in string format
	const daysInWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const date = new Date(myDate);
	console.log(daysInWeek[date.getDay()]);
}
findDay("10/11/2009");
