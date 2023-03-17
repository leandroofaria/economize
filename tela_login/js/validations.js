function validateEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexEmail.test(email.value)) {
        alert('Email invalido. Insira novamente!')
    }
};

function validatePassword() {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;

    if(!regexSenha.test(password.value)) {
        alert('Senha invalida. Insira novamente!')
    }
}
