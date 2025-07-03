let student = {
  name: "John Doe",
  age: 20,
  subjects: ["Math", "Science", "History"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};
let { name, age, subjects: [firstSubject, ...otherSubjects], address: { city } , location = 'Delhi' } = student;
console.log(name); // John Doe
console.log(age); // 20 
console.log(firstSubject); // Math
console.log(otherSubjects); // [ 'Science', 'History' ]
console.log(city); // Anytown
console.log(location); // Delhi
console.log(student); // { name: 'John Doe', age: 20, subjects: [ 'Math', 'Science', 'History' ], address: { street: '123 Main St', city: 'Anytown', zip: '12345' } }
console.log(student.location); // undefined
