//ForEach Loop
let arr_FE = [1, 2.3, 4, 5, 6, 7, 8, 9];
let print = (el) => {
  console.log(el);
}
arr_FE.forEach(print);
// // ----------------------------------------------
// setInterval(() => {
//   arr_FE.forEach(el => {
//     console.log(el);
//   });
// }, 10000);


//Map
let arr_MP = [1, 2, 3, 4, 5];
function square(el) {
  return el * 2;
}
let double = arr_MP.map(square);
console.log('Using Map Method',double);

//Filter

let arr_flt = [2, 4, 1, 5, 3, 6, 7, 8, 9, 5, 45, 65];
let even = arr_flt.filter((el) => { return el % 2 != 0 });
console.log(even);

//Every
let arr_Eve = [8, 2, 6, 4];

let result = arr_Eve.every((el) => (el % 2 == 0));
console.log('Using Every Method', result);

//Some
let numbers = [1, 3, 5, 7];
let hasEven = numbers.some(num => num % 2 === 0);
console.log('Using Some method', hasEven); // true


//Reduce
let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 15

//Maximum of Array
let arr_max = [2, 3, 4, 5, 3, 4, 6, 7, 1, 2, 8, 9, 10];
let res_maX = arr_max.reduce((acc, curr) => { if (acc > curr) return acc; else return curr; }, 0);
console.log(res_maX); // Output: 10
