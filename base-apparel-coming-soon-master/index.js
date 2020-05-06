const errorText = document.querySelector('#error');
const errorIcon = document.querySelector('.error-icon');
const inputElement = document.querySelector('input[type="email"]');
const formElement = document.querySelector('.form');

const validator = e => {
    e.preventDefault();
    const emailVal = inputElement.value;

    if(!emailValidator(emailVal)) {
        errorText.style.display = 'block';
        errorIcon.style.display = 'block';   
    } else {
        document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
    }
}

const emailValidator = email => {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return res.test(String(email).toLowerCase());
}

formElement.addEventListener('submit',validator);
