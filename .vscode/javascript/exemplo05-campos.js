function concatenar(){
    let campoNome - document.querySelector("#campo-nome");
    let nome = campoNome.value;

    let campoSobrenome = document.querySelector("#campo-sobrenome");
    let sobrenome = campoSobrenome.value;

    alert("Nome completo:" + nome + ""+ sobrenome)

    // Limpar campos

    campoNome.value = "";
    campoSobrenome.value=""
}