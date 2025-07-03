// Create and append a red paragraph
let new_element = document.createElement('p');
new_element.innerText = 'This is a new element';
new_element.style.color = 'red';
new_element.style.fontSize = '30px';
document.body.append(new_element);

// Create and append a blue h3
let new_element2 = document.createElement('h3');
new_element2.innerText = "I'm a blue H3";
new_element2.style.color = 'blue';
document.body.append(new_element2);

// Create and append a styled div
let new_element3 = document.createElement('div');
new_element3.style.border = '1px solid black';
new_element3.style.padding = '10px';
new_element3.style.backgroundColor = 'pink';
document.body.append(new_element3);

// Create and append an h1 inside the div
let new_element4 = document.createElement('h1');
new_element4.innerText = 'I am a new H1 inside a div';
new_element3.append(new_element4);  // append to the div you created

// Create and append a paragraph inside the same div
let new_element5 = document.createElement('p');
new_element5.innerText = 'Me Too!';
new_element3.append(new_element5);  // ✅ Fixed: correctly appending to div
