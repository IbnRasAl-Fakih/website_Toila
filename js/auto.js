let createUser = true;

const name = document.getElementById('regName')
const surname = document.getElementById('regSurname')
const phone = document.getElementById('regPhone')
const password = document.getElementById('regPassword')
const password2 = document.getElementById('regPassword2')
const submit = document.getElementById('regSubmit')
let errorSpan = document.getElementById("error")

const users = {}

class User {
    constructor(name, surname, phone, password) {
        this.name = name
        this.surname = surname
        this.phone = phone
        this.password = password
    }
}

function createId() {
    return localStorage.length
}


submit.addEventListener('click', (event) => {
    const nameUser = name.value
    const surnameUser = surname.value
    const phoneUser = phone.value
    const passwordUser = password.value
    const password2User = password2.value
    const sp = errorSpan.innerHTML

    if (createUser == true) {
        errorSpan.innerHTML = "";

        if (nameUser === "" || surnameUser === "" ||  phoneUser === "" || passwordUser === "" ||  password2User === "") {
            errorSpan.innerHTML = "All fields are required.";
        }else if (isNaN(phoneUser)){
            errorSpan.innerHTML = "Your number should look like this (87*********)";
        }
        else if(passwordUser.length < 8){
            errorSpan.innerHTML = "Your password must be at least 8 characters.";
        }else if (!/[a-zA-Z]/.test(passwordUser) || !/\d/.test(passwordUser)) {
            errorSpan.innerHTML = "Password must contain both letters and numbers.";
        }else if (passwordUser !== password2User) {
            errorSpan.innerHTML = "Passwords do not match.";
        }
        else {
            const user = new User(nameUser, surnameUser, phoneUser, passwordUser);
            const userId = 'User' + createId(users)
            users[userId] = user
            localStorage.setItem(userId, JSON.stringify(user));
            createUser = false;
            submit.setAttribute("data-bs-dismiss", "modal");
            alert("Вы успешно зарегистрировались!")

            name.value = "";
            surname.value = "";
            phone.value = "";
            password.value = "";
            password2.value = "";
        }
    }

    if (createUser == false) {
        submit.click();
    }
});
