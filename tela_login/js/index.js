const email = document.getElementById('email')
const password = document.getElementById('password');

email.addEventListener('blur', validateEmail)
password.addEventListener('blur', validatePassword)
