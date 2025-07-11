const new_btn = document.createElement('button');
new_btn.innerText = 'Click Me!';
document.querySelector('body').append(new_btn);

new_btn.addEventListener('click',function(){
  this.style.backgroundColor = 'Green';
});

const new_btn1 = document.createElement('button');
new_btn1.innerText = 'Click Me!';
document.querySelector('body').append(new_btn1);

new_btn1.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

new_btn1.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

 // Get references to the HTML elements
        const nameInput = document.getElementById('nameInput');
        const displayNameHeading = document.getElementById('displayName');

        // Add an 'input' event listener to the input field
        // The 'input' event fires immediately when the value of an <input> or <textarea> element changes.
        nameInput.addEventListener('input', function() {
            // Get the current value from the input field
            let inputValue = this.value;

            // Use a regular expression to filter out unwanted characters.
            // [^a-zA-Z\s] matches any character that is NOT (^) a letter (a-zA-Z) or a whitespace character (\s).
            // The 'g' flag ensures that all occurrences are replaced, not just the first one.
            const filteredValue = inputValue.replace(/[^a-zA-Z\s]/g, '');

            // Update the input field's value with the filtered text.
            // This prevents invalid characters from even being displayed in the input box.
            this.value = filteredValue;

            // Dynamically update the H2 heading with the filtered input value.
            // If the input is empty, display a default message.
            if (filteredValue.trim() === '') {
                displayNameHeading.textContent = 'Your name will appear here...';
            } else {
                displayNameHeading.textContent = filteredValue;
            }

            console.log('Input Value:', inputValue);
            console.log('Filtered Value:', filteredValue);
        });

        // Initial state log
        console.log('Page loaded. Input and heading elements are ready.');