const formElement = document.querySelector('form');

formElement.addEventListener('submit',e => {
    e.preventDefault();

    const firstName = formElement['firstName'].value;
	const lastName = formElement['lastName'].value;
	const email = formElement['email'].value;
    const password = formElement['password'].value;
    
    if (firstName === '') {
		addErrorTo('firstName', 'First Name is required');
	} else {
		removeErrorFrom('firstName');
	}

	if (lastName === '') {
		addErrorTo('lastName', 'Last Name is required');
	} else {
		removeErrorFrom('lastName');
	}

	if (email === '') {
		addErrorTo('email', 'Email is required');
	} else if (!isValid(email)) {
		addErrorTo('email', 'Email is not valid');
	} else {
		removeErrorFrom('email');
	}

	if (password === '') {
		addErrorTo('password', 'Password is required');
	} else {
		removeErrorFrom('password');
	}
});

function addErrorTo(field, message) {
	const formControl = formElement[field].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = message;
}

function removeErrorFrom(field) {
	const formControl = formElement[field].parentNode;
	formControl.classList.remove('error');
}

function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
