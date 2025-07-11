let game_seq = [];
let user_seq = [];
let colors = ["red", "blue", "green", "yellow"];
let started = false;
let h3_value = document.querySelector("h3");
let pressed_div = document.querySelectorAll(".btn");
let level = 0;

document.addEventListener("keydown", function () {
  if (!started) {
    started = true;
    console.log("Key pressed");
    console.log("Game started");
    next_level();
  }
});

function next_level() {
  level++;
  h3_value.innerText = "Level " + level;

  let rndIDs = Math.floor(Math.random() * 4);
  console.log("Random ID: " + rndIDs);

  let rndColor = colors[rndIDs];
  console.log("Random Color: " + rndColor);

  game_seq.push(rndColor); // ✅ Optional: track the game sequence
  let btn = document.querySelector("." + rndColor);
  flash_button(btn);
}

function flash_button(btn) {
  console.log("Flashing button: ", btn);
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}
for (let element of pressed_div) {
  element.addEventListener("click", function () {
    user_seq.push(element.classList[1]);
    console.log("User clicked: " + element.classList[1]);
  });
}