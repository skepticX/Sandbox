function range(start, end, step) {
	var myArray = [];
	if (step == undefined) {
		step = 1;
		}
	// if (start > end && step == undefined) {
	// 	step = -1;
	// }
	if (step < 0) {
		while (start >= end) {
			myArray.push(start);
			start += step;
		}
	}
	else {
		while (start <= end) {
			myArray.push(start);
			start += step;
		}
	}

	return myArray;
}

function sum(sumArray) {
	var result = 0;
	for (var counter = 0; counter < sumArray.length; counter++) {
		result += sumArray[counter];
	}
	return result;
}

document.write(range(8, 3) + "<br>");
document.write(sum(range(8, 3, -2)) + "<br>");
document.write(range(2, 8) + "<br>");
document.write(sum(range(2, 8)));