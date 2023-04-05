const container = document.querySelector('.container');
const nome = document.querySelector('#name');
const email = document.querySelector('#mail');
const senha = document.querySelector('#password');
const Confpassword = document.querySelector('#_confirmePassword');


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    //valida nome (beta)
    if(nome.value === ""){
        alert("Envie o seu nome");
        return;
    }
    //valida email(beta)
    
    if(email.value === "" || !isEmailValido(mail.value)){
        alert("Bota teu email");
        return;
    }

    //verifica a senha(beta)
    if(senha.value === "" || !validaPassword(password.value)){
        alert("A senha precisa de 5 characteres, sendo um numero e um caracter maiusculo");
        return;
    }

    //confirma a senha(beta)
    if(Confpassword.value === "" || confirmaPassword(_confirmePassword.value) != validaPassword(password.value)){
        alert("as senhas não são iguais");
        return;
    }
});

//Funcao valida email
function isEmailValido(mail){
    const emailRegex = new RegExp(
        //usario@host.com e etc
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(mail)){
        return true;
    }else{
        return false;
    }
}

//Funcao valida senha(não é a confirmação)
function validaPassword(password){
    const senhaRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/
    );
    if (senhaRegex.test(password)){
        return true;
    }else{
        return false;
    }
}
function confirmaPassword(_confirmePassword){
    const senhaConfRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/
    );
    if (senhaConfRegex.test(_confirmePassword)){
        return true;
    }else{
        return false;
    }
}
