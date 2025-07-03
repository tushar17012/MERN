// Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;
let new_input = document.createElement("input");
let new_btn = document.createElement("button");
let container = document.createElement("div");

new_input.type = "text";
new_input.placeholder = "Enter the detail...";
new_btn.innerText = "Click Me!";

container.classList.add("box-padding");

container.append(new_input, new_btn);
document.body.append(container);

//Add following attributes to the element
//Change placeholder value of input to “username”
//Change the id of button to “btn”

new_btn.setAttribute("id", "btn");
new_input.setAttribute("placeholder", "username");

//Access the btn using the querySelector and button id.Change the button background color to blue and text color to white.
setTimeout(() => {
  let btn_id = document.querySelector("#btn");
  btn_id.classList.add("btn_background");
}, 10000);
// Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.
let new_h1_element = document.createElement("h1");
new_h1_element.innerText = "DOM Practice";
new_h1_element.classList.add("h1_new_element", "tag_underline");
document.body.prepend(new_h1_element);

//Create a p tag on the page and set its text to “ Apna College Delta Practice” , where Delta is bold.
let new_p_element = document.createElement("p");
new_p_element.innerText = "Apna College Delta Practice";
new_p_element.innerHTML = new_p_element.innerHTML.replace(
  "Delta",
  "<strong>Delta</strong>"
);
document.body.prepend(new_p_element);
