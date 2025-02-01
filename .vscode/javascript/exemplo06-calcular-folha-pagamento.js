function apresentarDivModalidade() {
    let campoModalidade = document.querySelector("input[name='modalidade']:checked");
    let modalidade = campoModalidade.value;
    let divMensalista = document.querySelector("#modalidade-mensalista");
    let divHorista = document.querySelector("#modalidade-horista");

    if (modalidade === "horista") {
        divHorista.classList.remove("ocultar"); // Apresentar a div
        divMensalista.classList.add("ocultar");

    } else if (modalidade === "mensalista") {
        divMensalista.classList.remove("ocultar");
        divHorista.classList.add("ocultar");
    }

    function preencherSalarioBaseValorHora
}