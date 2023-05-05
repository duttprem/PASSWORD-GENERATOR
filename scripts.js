let generateButton = document.getElementById("generate-button");
let passwordInput = document.getElementById("password-input");

function GeneratePassword() {
  let password = " ";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (let i = 0; i < 15; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  passwordInput.value = password;
}
generateButton.addEventListener("click", GeneratePassword); 
