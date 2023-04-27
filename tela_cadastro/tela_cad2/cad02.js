const form = document.querySelector('#form');
const CPF = document.querySelector('#cpf');
const numero = document.querySelector('#number');
const mes = document.querySelector('month')

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    //verifica cpf
    if(CPF.value === '' || !validaCPF(cpf.value)){
        error(CPF, "Insira o CPF corretamente, por favor")
        return;
    }else{
        success(CPF);
    }

    if(numero.value === '' || !validaNumero(number.value)){
        error(numero, "Insira o numero corretamente")
        return;
    }
    else{
        success(numero);
        window.location = "/tela_home_user/index.html";
    }
});

//função valida cpf
function validaCPF(cpf){
    const cpfRegex = new RegExp(
        //xxx.xxx.xxx-xx ou xxxxxxxxxxx
        /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
    );
    if(cpfRegex.test(cpf)){
        return true;
    }else{
        return false;
    }
}
//função valida numero
function validaNumero(number){
    const numberRegex = new RegExp(
        //(xx) xxxxx-xxxx
    /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
    );
    if(numberRegex.test(number)){
        return true;
    }else{
        return false;
    }
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