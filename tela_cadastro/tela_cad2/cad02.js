const form = document.querySelector('#form');
const CPF = document.querySelector('#cpf');
const numero = document.querySelector('#number');

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    //verifica cpf
    if(CPF.value === '' || !validaCPF(CPF.value)){
        alert("Insira o CPF corretamente, por favor")
        return;
    }

    if(numero.value === '' || !validaNumero(numero.value)){
        alert("Insira o numero corretamente")
        return;
    }
});

//função valida cpf
function validaCPF(CPF){
    const cpfRegex = new RegExp(
        //xxx.xxx.xxx-xx
        /^[0-9]{11,}$/
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
        //xxxxxxxxx
    /^[0-9]{9,}$/
    );
    if(numberRegex.test(numero)){
        return true;
    }else{
        return false;
    }
}