const form = document.querySelector("#register-form");
const name = document.getElementById("name");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const rePassword = document.querySelector("#re_pass");

const login = { name: "", password: "", email: "" };

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //validate inputs
  validateName();
  validateEmail();
  validatePass();
  validateRepass();

  //validate login
  if (validateName() && validateEmail() && validatePass() && validateRepass()) {
    localStorage.user = JSON.stringify(login);
    window.location.href = "/pages/login.html";
  }
});

function validateName() {
  const value = name.value.trim();
  const regex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
  if (regex.test(value) == false) {
    invalidInput(name, "not a valid username", "visible", "red");
  } else {
    validInput(name, "hidden");
    login.name = `${value}`;
    return true;
  }
}
function validateEmail() {
  const emailValue = email.value.trim();
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(emailValue) == false) {
    invalidInput(email, "must be a valid email address", "visible", "red");
  } else {
    validInput(email, "hidden");
    login.email = `${emailValue}`;
    return true;
  }
}
function validatePass() {
  const passwordValue = password.value.trim();
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;

  if (regex.test(passwordValue) == false) {
    invalidInput(
      password,
      "<li>should have min of 8 chac</li><li>should contain at least one uppercase letter</li>",
      "visible",
      "red"
    );
  } else {
    validInput(password, "hidden");
    return true;
  }
}
function validateRepass() {
  const passwordValue = rePassword.value.trim();

  if (passwordValue != password.value.trim()) {
    invalidInput(rePassword, "password must match", "visible", "red");
  } else {
    validInput(rePassword, "hidden");
    login.password = `${passwordValue}`;
    return true;
  }
}

function invalidInput(para, message, visibility, color) {
  para.nextElementSibling.innerHTML = message;
  para.nextElementSibling.style.visibility = visibility;
  para.nextElementSibling.style.color = color;
}
function validInput(para, visibility) {
  para.nextElementSibling.style.visibility = visibility;
  para.nextElementSibling.innerHTML = "input is valid";
}
