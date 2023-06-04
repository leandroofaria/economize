
function validaEdit(event){
    const formUm = document.querySelector('#form1');
    if(formUm.value === "" || !validaEditValue(formUm.value)){
        alert("Digite seu nome completo!");
        event.preventDefault();
        return;
    }
};
function validaEdit(event){
    const formDois = document.querySelector('#form2');
    if(formDois.value === "" || !validaEdit2(formDois.value)){
        alert("Insira um email válido!");
        event.preventDefault();
        return;
    }
};
function validaEdit(event){
    const formTres = document.querySelector('#form3');

    if(formTres.value === "" || !validaEdit3(formTres.value)){
        alert("A senha de conter no mínimo 8 caracteres, pelo menos uma letra maiúscula e um número");
        event.preventDefault();
        return;
    }
};
function validaEdit(event){
    const formQuarto = document.querySelector('#form4');

    if(formQuarto.value === "" || validaEdit4(formQuarto.value) != validaEdit3(formTres.value)){
        alert("As senhas não são iguais");
        event.preventDefault();
        return;
    }
    else if (!validaEdit3(formTres.value)) {
        alert("A senha de conter no mínimo 8 caracteres, pelo menos uma letra maiúscula e um número");
        event.preventDefault();
        return;
    } 
};
function validaEdit(event){
    const formQuinto = document.querySelector('#form5');

    if(formQuinto.value === '' || !validaEdit5(formQuinto.value)){
        alert("Insira o CPF corretamente, por favor (XXXXXXXXXXX)")
        event.preventDefault();
        return;
    }
};
function validaEdit(event){
    const formSexto = document.querySelector('#form6');

    if(formSexto.value === '' || !validaEdit6(formSexto.value)){
        alert("Insira o numero corretamente (XXXXXXXXXXX)")
        event.preventDefault();
        return;
    }
};
function validaEdit(event){
    const formSetimo = document.querySelector('#form7');

    if(formSetimo.value === '' || validaEdit7(formSetimo.value) == false){
        alert("Insira uma data válida. Apenas usuários maiores de 16 anos tem permissão para utilizar a plataforma!")
        event.preventDefault();
        return;
    }
    else{
        alert('Usuário cadastrado com sucesso!')
        return true;
    }
};

function validaEditValue(formUm){
    const nomeRegex = new RegExp(
        /^[a-zA-Z]+(\s[a-zA-Z]+)+$/ 

    );
    if(nomeRegex.test(formUm)){
        return true;
    }else{
        return false;
    }
}

//Funcao valida emails
function validaEdit2(formDois){
    const emailRegex = new RegExp(
        //usario@host.com e etc
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(formDois)){
        return true;
    }else{
        return false;
    }
}

//Funcao valida senha(não é a confirmação)
function validaEdit3(formTres){
    const senhaRegex = new RegExp(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    );
    if (senhaRegex.test(formTres)){
        return true;
    }else{
        return false;
    }
}
function validaEdit4(formQuarto){
    const senhaConfRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/
    );
    if (senhaConfRegex.test(formQuarto)){
        return true;
    }else{
        return false;
    }
}

//função valida cpf
function validaEdit5(formQuinto){
    const cpfRegex = new RegExp(
        //xxx.xxx.xxx-xx ou xxxxxxxxxxx
        /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
    );
    if(cpfRegex.test(formSexto)){
        return true;
    }else{
        return false;
    }
}
//função valida numero
function validaEdit6(formSexto){
    const numberRegex = new RegExp(
        //(xx) xxxxx-xxxx
    /^[0-9]{11}$/
    );
    if(numberRegex.test(formSexto)){
        return true;
    }else{
        return false;
    }
}


function validaEdit7(formSetimo) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - 16;
    const currentMonth = currentDate.getMonth(); 
    const currentDay = currentDate.getDate();
  
    const maxDate = new Date(currentYear, currentMonth, currentDay);
  
    const dataRegex = new RegExp('^(19\\d{2}|20\\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$');


  
    if (dataRegex.test(dias) ) {
      const data = new Date(dias);
      if (data <= maxDate) {
        return true;
      }
    }
  
    return false;
  }
