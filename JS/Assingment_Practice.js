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