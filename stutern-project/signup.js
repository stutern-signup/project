    const inputs = document.querySelectorAll("input")
    const patterns = {
        phoneNumber: /^\d{11}$/,
        name : /^[a-z\s]{1,100}$/i,
        password: /^[\w@!-]{8,20}$/i,
        email: /^([a-z\d\.-]+)@([a-z-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
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

    //Submitting the form
    const form = document.querySelector('.input-div');
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

    //getting DOM Elements
    const name = document.querySelector('#name');
    const emailAddress = document.querySelector('#email');
    const phone= document.querySelector('#phone');
    const passwords = document.querySelector('#password');
    const repeatPassword = document.querySelector('#repeat-password');

    //getting input values
    const myName = name.value.trim();
    const myEmail = emailAddress.value.trim();
    const myPhone = phone.value.trim();
    const myPassword = passwords.value.trim();
    const myRepeatPassword = repeatPassword.value.trim();

    //variables to be stored in local storage
    const loginDetails = {
        username: myName,
        userPassword: myPassword,
    };

    if(myName === '' || myPhone === '' || myEmail === '' || myPassword === '' || myRepeatPassword === ''){
        alert('fields cannot be empty');
        return false;
    }
    else if (myPassword !== myRepeatPassword){
        alert("passwords do not match");
        return false;
    }
    else if(name.className !== "valid"|| phone.className !== "valid" || emailAddress.className !== "valid" ){
        alert("Invalid Input")

    }else if(passwords.className !== "valid" || repeatPassword.className !== "valid"){
        alert("Incomplete Passwords")
    }else{
        window.location.href = "loginpage.html";

    //saving credentials to local storage

        localStorage.user = JSON.stringify(loginDetails)
    }
})


