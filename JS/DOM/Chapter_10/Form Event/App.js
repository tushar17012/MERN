let form = document.querySelector('form'); // Select the actual form element

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.dir(e);
  console.log("Form submitted successfully!"); // Log message
}); // Listen for form submission


let user_inp = document.querySelector('input');

user_inp.addEventListener('change', function(){
  console.log('Change has been Triggered');
  console.log(`Input value is ${this.value}`);
});

