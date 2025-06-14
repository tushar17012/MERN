
//Objects
let person = {
  name: "Tushar",
  age: 24,
  city: "Delhi"
};

console.log(person.name);  // Output: Tushar
console.log(person["age"]); // Output: 24

//Object with Methods (Functions)
let student = {
  name: "Rahul",
  marks: 85,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

student.greet();  // Output: Hello, my name is Rahul

//Nested Objects
let car = {
  brand: "Toyota",
  model: "Camry",
  engine: {
    type: "V6",
    horsepower: 301
  }
};

console.log(car.engine.type);  // Output: V6

//Adding, Updating, and Deleting Properties
let book = {
  title: "JavaScript Basics",
  author: "John Doe"
};

// Add a new property
book.pages = 250;

// Update a property
book.title = "Advanced JavaScript";

// Delete a property
delete book.author;

console.log(book);

//Using Object.keys(), Object.values(), Object.entries()
let user = {
  username: "tushar123",
  email: "tushar@example.com",
  isAdmin: false
};

console.log(Object.keys(user));   // ['username', 'email', 'isAdmin']
console.log(Object.values(user)); // ['tushar123', 'tushar@example.com', false]
console.log(Object.entries(user)); // [['username', 'tushar123'], ['email', 'tushar@example.com'], ['isAdmin', false]]
