const entrada =
    document.getElementById("entrada");

const botaoEntrar =
    document.getElementById("botaoEntrar");

const botaoFinal =
    document.getElementById("botaoFinal");


// BOTÃO DA TELA AZUL
// Apenas passa para a página informativa

botaoEntrar.addEventListener(
    "click",
    function () {

        entrada.classList.add("saindo");

    }
);


// BOTÃO FINAL
// Vai para a página de resultados

botaoFinal.addEventListener(
    "click",
    function () {

        window.location.href = "index.html";

    }
);