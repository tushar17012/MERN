let input_task = document.querySelector("input");
let ul = document.querySelector("ul");
let btn_Add_task = document.querySelector("button");

btn_Add_task.addEventListener("click", function () {
  let tsk = input_task.value.trim();

  let new_task = document.createElement("li");
  new_task.innerText = tsk;

  let del_btn = document.createElement("button");
  del_btn.innerText = "Delete";
  del_btn.classList.add("delete_btn");

  new_task.appendChild(del_btn);
  ul.appendChild(new_task);
  input_task.value = "";
});

document.querySelector('ul').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete_btn')) {
    e.target.parentElement.remove();
  }
});

