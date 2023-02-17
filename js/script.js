// Declaração de variáveis
const generatorBtn = document.querySelector("#generator-btn");
let passwrdContainer = document.querySelector("#password-container");
let qtyPicker = document.querySelector("#qty-picker");
let passwordSize = document.querySelector("#password-size");
let generatedPassword = document.querySelector("#generated-password");
let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%¨&*()"
let newPasswrd = "";

// Define que o tamanho da senha será o valor do input
passwordSize.innerHTML = qtyPicker.value;

qtyPicker.oninput = function(){
    passwordSize.innerHTML = this.value;
}

// Adicionando o evento ao botão
generatorBtn.addEventListener("click", generatePasswrd)

// função que cria a senha aleatória
function generatePasswrd(){
    let passwrd = "";

    // Escolhe aleatoriamente um caracter da variável "char" pelo método random da lib Math
    for(let i = 0, n = char.length; i < qtyPicker.value; ++i){
        passwrd += char.charAt(Math.floor(Math.random() * n));
    }
    generatedPassword.innerHTML = passwrd;
    newPasswrd = passwrd;
    passwrdContainer.classList.remove("hide");
}
