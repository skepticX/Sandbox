function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

document.write(findSolution(24));

// Simple factorial recursive algorithm
// function factorial (n) {
// 	if (n == 1) {
// 		return 1;
// 	}
// 	else {
// 		return n * factorial(n - 1);
// 	}
// }
// document.write(factorial(4));

// Check if number is even or odd
// function isEven(num1) {
//   if (num1 == 0) {
//     return true;
//   }
//   else if (num1 == 1) {
//     return false;
//   }
//   else {
//     return isEven(num1 - 2);
//   }
// }
// document.write(isEven(50));