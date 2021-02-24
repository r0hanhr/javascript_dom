let lists = document.querySelectorAll("li");
let form = document.getElementById("form");
let input = document.getElementById("input");
form.addEventListener("submit", e => {
  e.preventDefault();
  let item = input.value;
  console.log(item);
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `<a href=#>${item}</a>`;
  let ul = document.getElementById("ul");
  ul.appendChild(li);
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
  btn.textContent = "Remove";
  li.appendChild(btn);
});
for (let list of lists) {
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
  btn.textContent = "Remove";
  list.append(btn);
  btn.addEventListener("click", e => {
    list.remove();
  });
}
