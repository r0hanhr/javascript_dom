/*
let demo = document.getElementById("demo");
console.log(demo);
let links = document.getElementsByClassName("links"); // HTML collection
console.log(links);
console.log(Array.isArray(links)); //false
//links[0].style.background = "red";
for (let i = 0; i < links.length; i++) {
  links[i].style.background = "crimson";
}
demo.setAttribute("title", "title is a tool tip for an element");
demo.setAttribute("style", "border:2px solid black");
*/
//adding class names through js
/*
let link = document.getElementsByTagName("a");
for (let i = 0; i < link.length; i++) {
  link[i].className = "links-" + i;
}
*/
//using for..of
/*
let link = document.getElementsByTagName("a");
for (let linkss of link) {
  console.log(linkss);
  linkss.className = "link";
}
*/
//forEach is an array helper method
//first convert htmlCollection into array by spread operator
/*  
let link = document.getElementsByTagName("a");
[...link].forEach(function (links, i) {
  console.log(links);
  links.className = "link-" + i;
});
*/
/*
let linksOld = document.getElementsByTagName("a");
console.log(linksOld, "TagName Way");
let linksNew = document.querySelectorAll("a");
console.log(linksNew, "Query Selector Way");
*/
/*
let linksOdd = document.querySelectorAll("a:nth-child(odd)");
let linksNew = document.querySelectorAll("a:nth-child(even)");
linksOdd.forEach(odd => odd.classList.add("btn", "btn-success"));
linksNew.forEach(even => even.classList.add("btn", "btn-primary"));
*/
/*
let demo = document.querySelector("#demo");
console.log(demo);
*/
/*
let template = document.querySelectorAll("#template", ".list");
template.forEach(list => list.classList.add("btn", "btn-success"));
let demos = document.querySelectorAll("#demos", ".list");
demos.forEach(list => list.classList.add("btn", "btn-primary"));
*/
//create dom elements
/*
let temp = document.querySelector("#temp");
console.log(temp);

let p = document.createElement("p");
p.textContent = "welcome to jspiders";
// p.innerHTML = "welcome to jspiders";
// p.innerText = "welcome to jspiders";
console.log(p);
temp.appendChild(p);
*/

let form = document.createElement("form");
form.setAttribute("method", "GET");
form.setAttribute("action", "#");

let label_username = document.createElement("label");
label_username.className = "form-group";
let input_username = document.createElement("input");
input_username.setAttribute("placeholder", "ENTER USERNAME");
input_username.className = "form-control";
label_username.textContent = "username";
label_username.setAttribute("for", "username");

let label_password = document.createElement("label");
label_password.className = "form-group";
let input_password = document.createElement("input");
input_password.setAttribute("placeholder", "ENTER PASSWORD");
label_password.textContent = "password";
input_password.className = "form-control";
label_password.setAttribute("for", "password");

let btn = document.createElement("button");
btn.textContent = "LOGIN";
btn.classList.add("btn", "btn-success");

form.appendChild(label_username);
form.appendChild(input_username);
form.appendChild(label_password);
form.appendChild(input_password);
form.appendChild(btn);
console.log(form);
document.body.classList.add("container", "my-4", "col-md-2", "mx-auto");
label_password.className = "pt-2";
btn.classList.add("m-2", "pl-4", "pr-4");
document.body.appendChild(form);
/*
btn.onclick = function () {
  alert("hello");
};
*/

btn.addEventListener("click", event => {
  alert("hello");
  console.log(event);
  console.log(event.target);
  console.log(event.type);
  console.log(this);
  console.log(event.clientX);
  console.log(event.clientY);
  let getActiveClass = event.target.classList.toggle("active");
  console.log(getActiveClass);
  if (getActiveClass === true) {
    document.body.style.background = "crimson";
    label_username.style.color = "white";
    label_password.style.color = "white";
    btn.className = "m-2 pl-4 pr-4 btn-primary active";
  } else {
    document.body.style.background = "white";
    label_username.style.color = "black";
    label_password.style.color = "black";
    btn.className = "m-2 pl-4 pr-4 btn-success";
  }
});
