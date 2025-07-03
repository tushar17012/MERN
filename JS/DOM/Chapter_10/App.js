let header_chng = document.querySelector('h2');
let btn_chnge = document.querySelector('button');
let div_bgrnd_chng = document.querySelector('div');

btn_chnge.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgbColor = `rgb(${r}, ${g}, ${b})`;
  header_chng.innerText = rgbColor;
  div_bgrnd_chng.style.backgroundColor = rgbColor;
});

//This keyword in Event Listner

let btn = document.getElementById("input_keyboard_button");
btn.addEventListener("click", function () {
  this.style.backgroundColor = 'Blue';
}); 

//Keyborad Event Listner
let inp = document.getElementById("input_keyboard");
inp.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log("Key is pressed");
  if (e.key === 'Enter') {
    let submitBtn = document.querySelector('#input_keyboard_button'); // Adjust ID if needed
    if (submitBtn) {
      submitBtn.click(); // Simulates a button click
    }
  }
});