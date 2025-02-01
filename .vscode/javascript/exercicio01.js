// Solicitar para o usuário o valor da conta
let valorConta = parseFloat (prompt("Digite o valor da conta"))

// Solicitar para o usuário o valor da gorjeta
let valorGorjeta = parseFloat (prompt("Digite o valor da gorjeta"))

let total = (valorConta + valorGorjeta)

alert(
    "Valor da conta:" + valorConta +
    "\nValor da gorjeta: " + valorGorjeta + 
    "\nTotal:" + (valorConta + valorGorjeta));