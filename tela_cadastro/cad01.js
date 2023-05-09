console.log("Oi");
alert('oieee111');

const container = document.querySelector('.container');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const Confpassword = document.querySelector('#_confirmePassword');
const form = document.querySelector('#form');
const CPF = document.querySelector('#cpf');
const numero = document.querySelector('#number');
const mes = document.querySelector('#month')


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    //valida nome (beta)
    if(nome.value === "" || !isNomeValido(nome.value)){
        error(nome, "O nome deve possuir no minimo 3 letras não podendo conter somante numeros");
        return;
    }else{
        success(nome);
    }
    //valida email(beta)
    
    if(email.value === "" || !isEmailValido(email.value)){
        error(email, "Insira um email válido!");
        return;
    }else{
        success(email)
    }

    //verifica a senha(beta)
    if(senha.value === "" || !validaPassword(senha.value)){
        error(senha, "A senha precisa de 5 caracteres, sendo um numero e um caracter maiusculo");
        return;
    }else{
        success(senha)
    }

    //confirma a senha(beta)
    if(Confpassword.value === "" || confirmaPassword(Confpassword.value) != validaPassword(password.value)){
        error(Confpassword, "As senhas não são iguais");
        return;
    }
    else if (!validaPassword(senha.value)) {
        error(senha, "A senha precisa de 5 caracteres, sendo um numero e um caracter maiusculo");
        return;
    } if(CPF.value === '' || !validaCPF(CPF.value)){
        error(CPF, "Insira o CPF corretamente, por favor")
        return;
    }else{
        success(CPF);
    }

    if(numero.value === '' || !validaNumero(numero.value)){
        error(numero, "Insira o numero corretamente")
        return;
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
function isEmailValido(email){
    const emailRegex = new RegExp(
        //usario@host.com e etc
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
}

//Funcao valida senha(não é a confirmação)
function validaPassword(senha){
    const senhaRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/
    );
    if (senhaRegex.test(senha)){
        return true;
    }else{
        return false;
    }
}
function confirmaPassword(Confpassword){
    const senhaConfRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/
    );
    if (senhaConfRegex.test(Confpassword)){
        return true;
    }else{
        return false;
    }
}

//função valida cpf
function validaCPF(CPF){
    const cpfRegex = new RegExp(
        //xxx.xxx.xxx-xx ou xxxxxxxxxxx
        /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
    );
    if(cpfRegex.test(CPF)){
        return true;
    }else{
        return false;
    }
}
//função valida numero
function validaNumero(numero){
    const numberRegex = new RegExp(
        //(xx) xxxxx-xxxx
    /^[0-9]{11}$/
    );
    if(numberRegex.test(numero)){
        return true;
    }else{
        return false;
    }
}

//mensagem de erro
function error(element, msg){
    element.style.border = '3px red solid'
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';
}

function success(element){
    element.style.border = '3px green solid'
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';
}


//mensagem de alerta
function error(element, msg){
    element.style.border = '3px red solid'
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';
}

function success(element){
    element.style.border = '3px green solid'
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';
}