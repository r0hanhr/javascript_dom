/*let username = document.getElementById("username");
console.log(username);
username.addEventListener("keyup", e => {
  console.log(e.target.value);
});
*/
let textArea = document.getElementById("textArea");
let textAreaClone = document.getElementById("textAreaClone");
textArea.addEventListener("keyup", e => {
  let result = e.target.value;
  let rev = [...result].reverse().join("");

  if (e.keyCode === 13) {
    textAreaClone.innerHTML = rev;
  }
  if (result.length < 10) {
    textAreaClone.style.color = "crimson";
  }
  if (result.length > 10 && result.length < 20) {
    textAreaClone.style.color = "royalblue";
    document.body.innerHTML = `<img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>`;
  }
  if (result.length > 20 && result.length < 30) {
    textAreaClone.style.color = "lightgreen";
  }
});
