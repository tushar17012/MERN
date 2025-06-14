console.log('Hello JS!');

// Template Literals
let pencilPrice = 10;
let eraserPrice = 6;
console.log('The total Price is: ' + (pencilPrice + eraserPrice) + ' rupee.');
console.log(`The total Price through template literals is: ${pencilPrice + eraserPrice} rupee.`);

// Declare your name as a string and print its length in JS
let userName = 'Tushar';
console.log(typeof userName);
console.log(userName.length);

// Declare your first name as a string and print its first character in JS
console.log(userName[0]);

// Print last character
console.log(userName[userName.length - 1]);

// Output of the following code
let combinedResult = 'apnacollege' + 123;
console.log(combinedResult); // Output: apnacollege123

// Lengths of empty and space strings
let emptyString = '';
console.log('Empty String Length: ' + emptyString.length);

let spaceString = ' ';
console.log('Space String Length: ' + spaceString.length);

// String Methods
let msg = ' Hello Tushar ';
let new_msg = msg.trim();
console.log(`Before trim method: '${msg}' and length ${msg.length}`);
console.log(`After trim method: '${new_msg}' and length ${new_msg.length}`);

// Replace
let msg1 = 'IloveCoding';
let result_msg1 = msg1.replace('love', 'do');
console.log(result_msg1); // Output: IdoCoding

// Repeat
let msg2 = 'Tushar';
let result_msg2 = msg2.repeat(2);
console.log(result_msg2);

// Practice Question
// Start = ['January', 'July','March','August'];
// Output = ['July','June','March','August']

let arr = ['January', 'July', 'March', 'August'];
console.log('Array Before Shift method:');
console.log(arr);
arr.shift(); // remove 'January'
arr.shift(); // remove 'July'
console.log('Array after Shift method:');
console.log(arr);
arr.unshift('June');
arr.unshift('July');
console.log('Array After UnShift method:');
console.log(arr);

// Array Methods
let primary = ['yellow', 'red', 'green'];

// indexOf
console.log(primary.indexOf('red'));    // 1
console.log(primary.indexOf('RED'));    // -1 (case-sensitive)

// includes
console.log(primary.includes('green')); // true

// concat
let arr1 = ['red', 'green', 'yellow'];
let arr2 = ['orange', 'purple', 'violet'];
console.log(arr1.concat(arr2));

// reverse
console.log(primary.reverse());

// slice
let arr_slice = ['red', 'green', 'yellow', 'orange', 'purple', 'violet'];
console.log(arr_slice.slice());         // full copy
console.log(arr_slice.slice(2));        // from index 2
console.log(arr_slice.slice(2, 3));     // index 2 only
console.log(arr_slice.slice(-2));       // last two elements

// splice
let arr_splice = ['red', 'green', 'yellow', 'orange', 'purple', 'violet'];
console.log(arr_splice.splice(3));      // removes from index 3 onward
console.log(arr_splice.splice(0, 0, 'Tushar', 'Bhatt', 'Happy')); // adds to start
console.log(arr_splice);

// Modify array using splice
let start_Splice = ['january', 'july', 'march', 'august'];
console.log('Original array:', start_Splice);
start_Splice.splice(0, 2, 'july', 'june'); // replace first two elements
console.log('Modified array:', start_Splice);

// Return the index of the element "javascript" after reversing the array
let start_Arr = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(start_Arr.reverse().indexOf('javascript'));

// Higher Order Function
function multi_Greet(func, N) {
  for (let index = 0; index <= N; index++) {
    func();
  }
}
let greet = function () {
  console.log("Hello Tushar Bhatt");
}
multi_Greet(greet, 10);
