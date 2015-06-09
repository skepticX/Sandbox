var result ="";

for (var counter = 1; counter < 100; counter++) {
	if (counter % 15 == 0) {
		document.write("FizzBuzz" + "<br>");
	}
	else if (counter % 5 == 0) {
		document.write("Buzz" + "<br>");
	}
	else if (counter % 3 == 0) {
		document.write("Fizz" + "<br>");
	}
	else {
	document.write(counter + "<br>")
	}
}