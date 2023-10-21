let loginUser = true;
globalUserName=""
const mobilePhone = document.getElementById('loginPhone')
const acc_password = document.getElementById('loginPass')
const btn_submit = document.getElementById('submitLogin')
let spanerror = document.getElementById("errorLogin")

// submit.removeAttribute("data-bs-dismiss");


btn_submit.addEventListener('click', (event) => {
    const phoneUser = mobilePhone.value
    const passwordUser = acc_password.value

    if (loginUser == true) {
        if(phoneUser == "" || passwordUser == "") {
            spanerror.textContent = "Заполните все поля"
        }
        else{
            const flag = validateUser(phoneUser, passwordUser)
            if(flag){
                let div1 = document.getElementById('div1');
                let div2 = document.getElementById('div2');
                if (div1.classList.contains('visible')) {
                    div1.classList.remove('visible');
                    div1.classList.add('hidden');
            
                    div2.classList.remove('hidden');
                    div2.classList.add('visible');
                  } else {
                    div1.classList.remove('hidden');
                    div1.classList.add('visible');
            
                    div2.classList.remove('visible');
                    div2.classList.add('hidden');
                  }
                document.getElementById("acc2").innerHTML = globalUserName
                loginUser = false;
                btn_submit.setAttribute("data-bs-dismiss", "modal");
                console.log("шшс")
            }else{
                spanerror.textContent = "Неверный логин или пароль"
            }
        }

     
    }
    if (loginUser == false) {
        console.log("2click")
        btn_submit.click();
    }

});



function validateUser(enteredPhone, enteredPassword) {
    let fl = false
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(value);
        let user = JSON.parse(value)
        if(user.phone == enteredPhone & user.password == enteredPassword){
            globalUserName = user.name
            fl  = true
            break
        } 
    }
    return fl;
}