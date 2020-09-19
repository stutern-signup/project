const form = document.querySelector("#login-form");
const loginName = document.querySelector("#your_name");
const loginPass = document.querySelector("#your_pass");

const local = JSON.parse(localStorage.user);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = loginName.value.trim();
  const pass = loginPass.value.trim();

  if (name == local.name && pass == local.password) {
    window.location.href = "/pages/landing.html";
  } else {
    invalidInput(loginName, "Wrong name", "visible", "red");
    invalidInput(loginPass, "Wrong password", "visible", "red");
  }
});

function invalidInput(para, message, visibility, color) {
  para.nextElementSibling.innerHTML = message;
  para.nextElementSibling.style.visibility = visibility;
  para.nextElementSibling.style.color = color;
}
