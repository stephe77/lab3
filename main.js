const registrationButton = document.getElementById('registrationButton');
const loginButton = document.getElementById('loginButton');
const showPasswordButton = document.getElementById('showPasswordButton');
const registrationForm = document.getElementById('registrationForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const errorText = document.getElementById('errorText');
const errorText_email = document.getElementById('errorText_email');



registrationButton.addEventListener('click', () => {
    registrationForm.toggleAttribute('hidden');
});

registrationForm.addEventListener('submit', (e) => {
    
    if(validInputEM() && validInputPAS()){
        printConsole();
        registrationForm.toggleAttribute('hidden');
        e.preventDefault();
    }
    
});


showPasswordButton.addEventListener('pointerdown', ()=>{
    passwordInput.setAttribute('type', 'text')
});
showPasswordButton.addEventListener('pointerup', ()=>{
    passwordInput.setAttribute('type', 'password')
});


function validInputEM() {
    errorText.hidden =true;
    emailInput.setCustomValidity('');
    errorText_email.innerText = '';

    if (!emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {  
        emailInput.setCustomValidity('Неверный email');
        errorText_email.innerText = 'Неверный email';
        errorText_email.hidden = false;
        return false;
    }  
    return true;
}


function validInputPAS() {
    errorText.hidden =true;
    passwordInput.setCustomValidity('');
    errorText.innerText = '';
    if (passwordInput.value.length < 6) {
        passwordInput.setCustomValidity('Пароль должен содержать не менее 6 символов');
        errorText.innerText = 'Пароль должен содержать не менее 6 символов';
        errorText.hidden = false;
        return false; 
    }   
    return true;
}


emailInput.addEventListener('blur', validInputEM);
passwordInput.addEventListener('blur', validInputPAS);

document.body.addEventListener('click', (e)=>{
    if (!registrationForm.contains(e.target) && ! registrationButton.contains(e.target)) {
        registrationForm.hidden = true;
    }
})