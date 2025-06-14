// Basic Usage
setInterval(() => {
  console.log("This message appears every 2 seconds");
}, 2000);

// With Named Function
function greet() {
  console.log("Hello from setInterval");
}
setInterval(greet, 1000); // Runs every 1 second

// Passing Arguments
function showMessage(name) {
  console.log(`Hello, ${name}!`);
}
setInterval(showMessage, 3000, "Tushar");

// Stop setInterval Using clearInterval()
let count = 0;
let intervalId = setInterval(() => {
  console.log("Counting...", ++count);
  if (count === 5) {
    clearInterval(intervalId); // Stops after 5 counts
    console.log("Stopped interval");
  }
}, 1000);
