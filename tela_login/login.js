const form = document.querySelector('#form');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');

form.addEventListener("submit", (e) =>{
    e.preventDefault();


    if(email.value === "" || !isEmailValido(email.value)){
        alert("Bota teu email");
        return;
    }

    if(senha.value === "" || !validaPassword(password.value)){
        alert("A senha precisa de 5 characteres, sendo um numero e um caracter maiusculo");
        return;
    }
});

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
