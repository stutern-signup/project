const inputs = document.querySelectorAll("input");
const patterns = {
    name : /^[a-z\s]{1,100}$/i,
    password: /^[\w@!-]{8,20}$/i
};
//validation function
function validate(field, regex){
    if(regex.test(field.value)){
        field.className = "valid"
    }else{
        field.className = "invalid"
    }
};

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        validate(e.target,patterns[e.target.attributes.type.value]);
    })
})

//Login
const login = document.querySelector('.input-div');
login.addEventListener("submit", (e) =>{
    e.preventDefault();


//Getting Dom elements
const loginName = document.querySelector('#login-name');
const loginPassword = document.querySelector('#login-password');

//Grabbing the input values
const signinName = loginName.value.trim();
const signinPassword = loginPassword.value.trim();

//getting Items from local Storage
const local = JSON.parse(localStorage.user)

//checking the inputs
    if(signinName === '' || signinPassword === ''){
        alert('Fields cannot be empty');
        return false
        
    } else if (loginName.className !== "valid" || loginPassword.className !== "valid" ){
        alert("Invalid Input");
        return false
    }else if (local.username !== signinName || local.userPassword !== signinPassword){
        alert("wrong username or password")
        return false
    } else if (local.username === signinName && local.userPassword === signinPassword){
    window.location.href = "landingPage.html" }      
});







