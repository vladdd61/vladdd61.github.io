1)
// BEGIN (write your solution here)
console.log('Hello, World!');
// END

2)
// BEGIN (write your solution here)
const weight = 60;
const c = 300000000;
const energy = weight * (c ** 2);
console.log(energy);
// END

3)
// BEGIN (write your solution here)
const squareOfSum = (a, b) => {
	return (a * a) + (2 * a * b) + (b * b);
};
console.log(squareOfSum);
// END

4)
// BEGIN (write your solution here)
const finalGrade = (exam, projects) => {
if (exam > 90 || projects > 10) {
	return 100;
} else if (exam > 75 && projects >= 5) {
	return 90;
} else if (exam > 50 && projects >= 2) {
	return 75;
} else {
	return 0;
}
}

5)
console.log(finalGrade);
// END

const reference = () => {
	// BEGIN (write your solution here)
	return a;
	// END
};

const type = () => {
// BEGIN (write your solution here)
const a = 5;
a();
// END
};

6)
const sequenceSum = (begin, end) => {
// BEGIN (write your solution here)
if (begin > end) {
	return NaN;
}
if (begin === end) {
	return begin;
}
if (begin < end) {

	return begin + sequenceSum(begin + 1, end);
}

// END
};

7)
const smallestDivisor = (num) => {
// BEGIN (write your solution here)
const iter = (a) => {

	if (a > num / 2) {
		return num;
	}
	if (num % a === 0) {
		return a;
	}
	return iter(a + 1);
};

return iter(2);
// END
};

8)
// BEGIN (write your solution here)
let smallestDivisor = (num) => {

if (num < 1) {
	return NaN;
}
if (num === 1) {
	return 1;
}
let schet = 2;
while (num % schet !== 0) {
	schet = schet + 1;
}
return schet;
}

// END

9)
// BEGIN (write your solution here)
const reverse = (str) => {

let i = str.length - 1;
let result = "";

while (i >= 0) {
	result += str[i];
	i -= 1;
}
return result;
}

// END

10)
// BEGIN (write your solution here)
function isPrime(num) {
	if (num >= 0) {
		switch (num) {
			case 0:
			case 1:
				return false;
			case 2:
				return true;
			default:
				for (var i = 2; i < num; i++) {
					if (num % i === 0)
						return false;
				}
				return true;
		}
	} else {
		return false;
	}
}
// END

11)
import assert from 'assert';
import factorial from './implementations';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(6), 720);
// BEGIN (write your solution here)

// END

12)
export const getTrianglePerimeter = (a, b, c) => a + b + c;

// BEGIN (write your solution here)
export const getTriangleArea = (h, b) => {
	const A = 1 / 2 * h * b;
	return A;
}
// END

import square from './square';

// BEGIN (write your solution here)
import {
	getTriangleArea
} from './myMathModule';
const abc = (n) => {
	const s = getTriangleArea(n, square(n) / 2);
	return s;
}
export default abc;
// END

13)
// BEGIN (write your solution here)
const square = (n) => {
	const sq = n * n;
	return sq;
}
const sumOfSquares = (a, b) => {
	const sum = square(a) + square(b);
	return sum;
}
const squareSumOfSquares = (x, y) => {
	const sumsq = square(square(x) + square(y));
	return sumsq;
}
// END

export default {
	square,
	sumOfSquares,
	squareSumOfSquares,
};

14)
import {
	length,
	toUpperCase
} from './strings';

const bigLettersCount = (str) => {
	// BEGIN (write your solution here)
	let result = 0;
	for (let i = 0; i < length(str); i += 1) {
		if (toUpperCase(str[i]) === str[i]) {
			result += 1;
		}
	}

	return result;
	// END
};


const compare = (first, second) => {
	const firstCount = bigLettersCount(first);
	const secondCount = bigLettersCount(second);

	// BEGIN (write your solution here)
	if (firstCount > secondCount) {
		return 1;
	} else if (firstCount < secondCount) {
		return -1;
	}

	return 0;
	// END
};

export const greaterThan = (first, second) => (
	compare(first, second) === 1);

export const lessThan = (first, second) => (
	compare(first, second) === -1);

export const isEqual = (first, second) => (
compare(first, second) === 0);

15)
import {
	length
} from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const sum = (str) => {
	let result = 0;
	for (let i = 0; i < length(str); i += 1) {
		result += Number(str[i]);
	}

	return result;
};

const addDigits = (num) => {
	let result = num;
	while (result >= 10) {
		result = sum(String(result));
	}

	return result;
};
export default addDigits;
// END

16)
import {
	length,
	toUpperCase
} from './strings';

// BEGIN (write your solution here)
export default (str) => {
	let result = '';
	for (let i = 0; i < length(str); i += 1) {
		if (i === 0 || str[i - 1] === ' ') {
			result += toUpperCase(str[i]);
		} else {
			result += str[i];
		}
	}

	return result;
};

// END
