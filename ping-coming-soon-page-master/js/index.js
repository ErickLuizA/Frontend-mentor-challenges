const formElement = document.querySelector('form');

formElement.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.querySelector('input[type="email"');
    const emailValue = email.value;
    const small = document.querySelector('small');

    if (!emailValue) {
        email.classList.add('error');
        small.style.display = 'inline-block'
    } else if (!isValid(emailValue)) {
        email.classList.add('error');
        small.style.display = 'inline-block'
    } else {
        email.classList.remove('error');
        small.style.display = 'none'
    }

});


function isValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}