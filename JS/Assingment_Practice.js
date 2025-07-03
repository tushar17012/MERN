// Write a JavaScript program to get the first n elements of an array. [n can be any positive number]
let Ques_Arr = [7, 9, 0, -2];
let n = 3;
console.log("First n elements:", Ques_Arr.slice(0, n));

// Write a JavaScript program to get the last n elements of an array. [n can be any positive number]
console.log("Last n elements:", Ques_Arr.slice(-n));

// Write a JavaScript program to check whether a string is blank or not.
let Ques2_str = '';
if (Ques2_str.length === 0) {
  console.log(`String is empty. Length: ${Ques2_str.length}`);
} else {
  console.log(`String is not empty. Length: ${Ques2_str.length}`);
}

// Write a JavaScript program to test whether the string is all lowercase
let Ques3_str = 'TuSharBhatt';
if (Ques3_str === Ques3_str.toLowerCase()) {
  console.log("All characters are lowercase");
} else {
  console.log("String contains non-lowercase characters");
}

// Write a JavaScript program to check if an element exists in an array or not
let Ques6_arr = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if (Ques6_arr.includes(item)) {
  console.log("true");
} else {
  console.log("false");
}

// Write a JavaScript program to strip leading and trailing spaces from a string.
let str = "   please enter a string   ";
console.log(`Original string: '${str}'`);
console.log(`Trimmed string: '${str.trim()}'`);

// Write a JS program to delete all occurrences of element ‘num’ in a given array
let occ_Arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
console.log("Before Deletion:", occ_Arr);

// Use filter to avoid modifying array while iterating
occ_Arr = occ_Arr.filter(e => e !== num);

console.log("After Deletion:", occ_Arr);

// Write a JS program to find the number of digits in a number.
let count_char = 287152;
let countStr = count_char.toString();
console.log(`Number of digits in ${count_char}: ${countStr.length}`);

// Write a JS program to find the sum of digits in a number.
let sum_char = 287152;
let sumStr = sum_char.toString();
let sum = 0;
for (let char of sumStr) {
  sum += parseInt(char);
}
console.log(`Sum of digits in ${sum_char}: ${sum}`);

// Create a program that generates a random number representing a dice roll.
let ran_Dice = Math.floor(Math.random() * 6) + 1;
console.log("Random dice roll:", ran_Dice);

// Create an object representing a car
let car = { name: "Maruti Suzuki", model: "Maruti Suzuki Dzire", color: "white" };
console.log(car.name);
console.log(car.model);
console.log(car.color);

// Create an object Person and modify properties
let person = { name: "Tushar", age: 24, city: "Delhi" };
console.log(person);
person.city = "New York";
console.log(person);
person.country = "USA"; // Corrected spelling from county → country
console.log(person);

// Create a function for the multiplication table
function multi_Tables(N, C) {
  for (let index = 1; index <= C; index++) {
    console.log(`${N} * ${index} = ${N * index}`);
  }
}
multi_Tables(98, 50);

//Write a JavaScript function that returns array elements larger than a number.
let lar_Arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let numb = 5;
function largest_Number(L_Arr, T) {
  for (let index = 0; index < L_Arr.length; index++) {
    if (L_Arr[index] > T) {
      console.log(L_Arr[index]);
    }
  }
}
largest_Number(lar_Arr, numb);

//Write a JavaScript function to extract unique characters from a string.
let uni_str = "abcdabcdefgggh";
function get_unique(uni_str) {
  let ans = '';
  for (let index = 0; index < uni_str.length; index++) {
    let currChar = uni_str[index];
    if (ans.indexOf(currChar) == -1) {
      ans += currChar;
    }
  }
  return ans;
}
console.log(get_unique(uni_str));

//Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers.

const this_Ques1 = {
  Arr: [],
  Arr_Avg: function () {
    let avg = 0;
    for (let i = 0; i < this.Arr.length; i++) {
      avg += this.Arr[i];
    }
    console.log(avg / this.Arr.length);
  }
};
this_Ques1.Arr = [1, 2, 3, 4, 5, 6];
this_Ques1.Arr_Avg();

//Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let isEven = (N) => {
  return N % 2 == 0;
};
console.log(isEven(4));
//Check if all number in array are multiple of 10 or not
let arr_Multiple = [10, 20, 3, 40, 50];
let allMultipleOfTen = arr_Multiple.every(num => num % 10 === 0); 
console.log("All numbers are multiple of 10:", allMultipleOfTen);

//Create a function to find the minimum in an array of numbers.
let min_Arr = [10, 20, 3, 40, 50];
function findMinimum(arr) {
  return arr.reduce((min, current) => (current < min ? current : min), arr[0]);
}
console.log("Minimum in the array:", findMinimum(min_Arr));

//Square and sum the array elements using the arrow function and then find the average of the array.
let arr_Square = [1, 2, 3, 4, 5];
let squareAndSum = (arr) => {
  let sum = arr.reduce((acc, num) => acc + num * num, 0);
  return sum / arr.length;
};
console.log("Average of squared elements:", squareAndSum(arr_Square));

//Create a new array using the map function whose each element is equal to the original element plus  5.
let arr_Map = [1, 2, 3, 4, 5];
let newArr = arr_Map.map(num => num + 5); 
console.log("New array with each element plus 5:", newArr);

//Create a new array using the filter function that contains only the even numbers from the original array.

let arr_Filter = [1, 2, 3, 4, 5, 6];
let evenNumbers = arr_Filter.filter(num => num % 2 === 0); 
console.log("Even numbers in the array:", evenNumbers);

//Create a new array whose elements are in uppercase of words present in the original array.

let arr_Uppercase = ["hello", "world", "javascript"];
let upperCaseWords = arr_Uppercase.map(word => word.toUpperCase());
console.log("Uppercase words in the array:", upperCaseWords);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObject = mergeObjects(obj1, obj2);
console.log("Merged Object:", mergedObject);

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
function doubleAndReturnArgs(arr, ...args) {
  let doubledArgs = args.map(arg => arg * 2);
  return [...arr, ...doubledArgs];
}
let originalArray = [1, 2, 3];
let additionalArgs = [4, 4]; 
let resultArray = doubleAndReturnArgs(originalArray, ...additionalArgs);
console.log("Resulting Array:", resultArray);
