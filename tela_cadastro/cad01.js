console.log("Oi");
alert('oieee111');

const form = document.querySelector('#form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const Confpassword = document.querySelector('#_confirmePassword');
const CPF = document.querySelector('#cpf');
const numero = document.querySelector('#number');
const mes = document.querySelector('#month');

// form.addEventListener('submit', function(event){
    // event.preventDefault();

    
function validaFormulario(event){


    //valida nome (beta)    
    if(nome.value === "" || !isNomeValido(nome.value)){
        alert("O nome deve possuir no minimo 3 letras não podendo conter somante numeros");
        event.preventDefault();
        return;
    }
    //valida email(beta)
    if(email.value === "" || !isEmailValido(email.value)){
        alert("Insira um email válido!");
        event.preventDefault();
        return;
    }
    //verifica a senha(beta)
    if(senha.value === "" || !validaPassword(senha.value)){
        alert("A senha precisa de 5 caracteres, sendo um numero e um caracter maiusculo");
        event.preventDefault();
        return;
    }

    //confirma a senha(beta)
    if(Confpassword.value === "" || confirmaPassword(Confpassword.value) != validaPassword(password.value)){
        alert("As senhas não são iguais");
        event.preventDefault();
        return;
    }
    else if (!validaPassword(senha.value)) {
        alert("A senha precisa de 5 caracteres, sendo um numero e um caracter maiusculo");
        event.preventDefault();
        return;
    } 
    if(CPF.value === '' || !validaCPF(CPF.value)){
        alert("Insira o CPF corretamente, por favor")
        event.preventDefault();
        return;
    }
    if(numero.value === '' || !validaNumero(numero.value)){
        alert("Insira o numero corretamente")
        event.preventDefault();
        return;
    }
    else{
        return true;
    }
};
   
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