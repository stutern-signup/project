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
const local = JSON.parse(localStorage.storeDetails)

    if(signinName === '' || signinPassword === ''){
        alert('Fields cannot be empty');
        
    } else if (loginName.className !== "valid" || loginPassword.className !== "valid" ){
        alert("Invalid Input");
    }
        if (storeDetails[i].username === myName && storeDetails[i].userPassword === myPassword){
                alert("welcome") 
            }      
});

// const getCredentials = JSON.parse(localStorage.getItem("myDetails"))


//for(let i = 0; i < storeDetails.length; i++){
// //storing array in localStorage
// var colors = ["red","blue","green"];
// localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
// var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back







