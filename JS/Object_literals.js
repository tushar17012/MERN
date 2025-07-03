let student = {
  name: "John Doe",
  age: 20,
  subjects: ["Math", "Science", "History"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  },
  name: "Tushar Bhatt",
  age: 24,
  subjects: ["Math", "Science", "History"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};
console.log(student.name); // Output: John Doe
console.log(student.age); // Output: 20
console.log(student.subjects[1]); // Output: Science
console.log(student.address.city); // Output: Anytown
console.log(student["address"]["zip"]); // Output: 12345
console.log(student["subjects"][0]); // Output: Math  
console.log(student); // Output: { name: 'John Doe', age: 20, subjects: [ 'Math', 'Science', 'History' ], address: { street: '123 Main St', city: 'Anytown', zip: '12345' } }
console.log(student.name); // Output: Tushar Bhatt
console.log(student.age); // Output: 24

console.log(student.subjects[1]); // Output: Science
console.log(student.address.city); // Output: Anytown
console.log(student["address"]["zip"]); // Output: 12345
console.log(student["subjects"][0]); // Output: Math
console.log(student); // Output: { name: 'Tushar Bhatt', age: 24, subjects: [ 'Math', 'Science', 'History' ], address: { street: '123 Main St', city: 'Anytown', zip: '12345' } }