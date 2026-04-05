
let password = document.querySelector('#pwrd');
let passwordC = document.querySelector('#pwrdC');


password.addEventListener('input', setValidity);

passwordC.addEventListener('input', setValidity);

function setValidity() {
    if (password.value !== passwordC.value) {
        password.setCustomValidity('Passwords do not match');
        passwordC.setCustomValidity('Passwords do not match');
    } else {
        password.setCustomValidity('');
        passwordC.setCustomValidity('');
    }
}