const toggleButton = document.querySelector("#toggle-button");
const password = document.querySelector("#password");

function change() {
  if (password.type === "password") {
    password.type = "Text";
    toggleButton.innerText = "Hide Password";
  } else {
    password.type = "password";
    toggleButton.innerText = "Hide Password";
  }
}

toggleButton.addEventListener("click", change);
