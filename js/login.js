let errorsArray = [];

function checkForm() {
    const formElement = document.getElementsByTagName("form")[0];
    if (!formElement) {
        errorsArray.push('form is not found');
    }
}

function checkLabelEmail() {
    const labelEmail = document.querySelector(['label[for="email"]']);
    if (!labelEmail) {
        errorsArray.push('E-mail label is missing');
    }
}

function checkInputEmail() {
    const inputEmail = document.querySelector(['input[type="email"][name=email][required]']);
    if (!inputEmail) {
        errorsArray.push('E-mail input is missing or incorrect');
    }
}

function checkLabelPassword() {
    const labelPassword = document.querySelector(['label[for="password"]']);
    if (!labelPassword) {
        errorsArray.push('Password label is missing');
    }
}

function checkInputPassword() {
    const inputPassword = document.querySelector(['input[type="password"][name="password"][required]']);
    if (!inputPassword) {
        errorsArray.push('Password input is missing or incorrect');
    }
}

function checkLoginButton() {
    const loginButton = document.querySelector(['button[type="submit"]']);
    if (!loginButton) {
        errorsArray.push('Missing submit button');
    }
}

function checkLink() {
    const linkBtn = document.querySelector(["a[href='register.html']"]);
    if (!linkBtn) {
        errorsArray.push('link to register is missing or invalid');
    }
}

function check() {
    const ValidationsResults = document.getElementById("ValidationsResults");
    ValidationsResults.style['display'] = 'block';

    if (errorsArray.length === 0) {
        ValidationsResults.innerHTML += '<p>Every validation has passed</p>';
    } else {
        for (let i = 0; i < errorsArray.length; i++) {
            console.log(errorsArray[i]);
            ValidationsResults.innerHTML += '<li>' + errorsArray[i] + '</li>>';
        }
    }
}

// checkForm();
// checkLabelEmail();
// checkInputEmail();
// checkLabelPassword();
// checkInputPassword();
// checkLoginButton();
// checkLink();
// check();
