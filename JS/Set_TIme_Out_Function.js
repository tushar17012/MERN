console.log("Hello Tushar Bhatt");

setTimeout(() => {
  console.log("Inside Set Timeout");
}, 1000);

console.log("Bye Tushar Bhatt");

// Passing Arguments
function greetWithName(name) {
  console.log(`Hello to Passing Arguments, ${name}`);
}

setTimeout(greetWithName, 1500, "Tushar");

// With Named Function
function greet() {
  console.log("Hello With Named Function Tushar!");
}

setTimeout(greet, 3000); // Runs after 3 seconds
