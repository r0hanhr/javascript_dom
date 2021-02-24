let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorBlock = document.getElementById("errorBlock");

/*
username.addEventListener("keyup", e => {
  let result = e.target.value;
  if (result.length < 5) {
    username.style.borderColor = "crimson";
    validatiion.innerHTML = "Username should be more than 5 character";
    validatiion.style.color = "crimson";
  } else {
    username.style.borderColor = "white";
    validatiion.style.display = "none";
  }
});
*/

//submit event or submit form
form.addEventListener("submit", e => {
  e.preventDefault();
  let name = username.value;
  let pass = password.value;
  let errorMessage = [];
  if (name === "" || name === null) {
    errorMessage.push("USERNAME IS REQUIRED");
    username.style.borderColor = "red";
  }
  if (pass === "" || pass === null) {
    errorMessage.push("PASSWORD IS REQUIRED");
    password.style.borderColor = "red";
  }
  if (pass.length < 6) {
    errorMessage.innerHTML = "PASSWORD SHOULD BE MINIMUM 6 CHARACTERS";
    password.style.borderColor = "red";
  } else {
    errorBlock.setAttribute("display", "block");
  }
  if (errorMessage.length > 0) {
    errorBlock.innerHTML = errorMessage.join(" ");
  } else {
    username.style.borderColor = "lightgreen";
    password.style.borderColor = "lightgreen";
    console.log(name);
    console.log(pass);
    username.value = "";
    password.value = "";
    errorBlock.setAttribute("display", "block");
  }
});
