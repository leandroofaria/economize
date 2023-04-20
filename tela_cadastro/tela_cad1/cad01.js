const container = document.querySelector('.container');
const name = document.querySelector('#nome');
const email = document.querySelector('#mail');
const senha = document.querySelector('#password');
const Confpassword = document.querySelector('#_confirmePassword');


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    //valida nome (beta)
    if(nome.value === "" || !isNomeValido(nome.value)){
        alert("Envie o seu nome, ele tem que possuir no minimo 3 letras não podendo conter somante numeros");
        return;
    }
    //valida email(beta)
    
    if(email.value === "" || !isEmailValido(mail.value)){
        alert("Insira um email válido!");
        return;
    }

    //verifica a senha(beta)
    if(senha.value === "" || !validaPassword(password.value)){
        alert("A senha precisa de 5 caracteres, sendo um numero e um caracter maiusculo");
        return;
    }

    //confirma a senha(beta)
    if(Confpassword.value === "" || confirmaPassword(_confirmePassword.value) != validaPassword(password.value)){
        alert("As senhas não são iguais");
        return;
    }
    else if (!validaPassword(password.value)) {
        alert("A senha precisa de 5 caracteres, sendo um numero e um caracter maiusculo");
        return;
    } else {
        window.location = "/tela_cadastro/tela_cad2/index.html";
    }
});

function isNomeValido(nome){
    const nomeRegex = new RegExp(
        //o nome tem que ter mais de 3 caracteres e não pode conter somente numeros
        /^[a-zA-Z]{3,}$/
    );
    if(nomeRegex.test(nome)){
        return true;
    }else{
        return false;
    }
}

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
