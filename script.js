// =============================================
// CONFIGURAÇÕES
// =============================================

const CONFIG = {

    estadoPadrao: "RJ",

    votosIniciais: 0

};


// =============================================
// PRESIDENTE
// =============================================

const presidentes = [

    {
        nome: "Luiz Inácio Lula da Silva",
        cargo: "Presidente",
        foto: "lula.jpg",
        numero: 13,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Flávio Bolsonaro",
        cargo: "Presidente",
        foto: "flavio.jpg",
        numero: 22,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Samara Martins",
        cargo: "Presidente",
        foto: "samara.webp",
        numero: 80,
        partido: "UP",
        votos: 0
    },

    {
        nome: "Romeu Zema",
        cargo: "Presidente",
        foto: "zema.jpg",
        numero: 30,
        partido: "NOVO",
        votos: 0
    },

    {
        nome: "Hertz Dias",
        cargo: "Presidente",
        foto: "hertz.jpg",
        numero: 16,
        partido: "PSTU",
        votos: 0
    },

    {
        nome: "Edmilson Costa",
        cargo: "Presidente",
        foto: "edmilson.webp",
        numero: 21,
        partido: "PCB",
        votos: 0
    },

    {
        nome: "Renan Santos",
        cargo: "Presidente",
        foto: "renan.webp",
        numero: 14,
        partido: "MISSÃO",
        votos: 0
    },

    {
        nome: "Ronaldo Caiado",
        cargo: "Presidente",
        foto: "caiado.png",
        numero: 55,
        partido: "PSD",
        votos: 0
    },

    {
        nome: "Rui Costa Pimenta",
        cargo: "Presidente",
        foto: "rui.jpg",
        numero: 29,
        partido: "PCO",
        votos: 0
    },

    {
        nome: "Wilson Grassi",
        cargo: "Presidente",
        foto: "wilson.jpg",
        numero: 35,
        partido: "DEMOCRATA",
        votos: 0
    },

    {
        nome: "Clariana Barão",
        cargo: "Presidente",
        foto: "clariana.jpg",
        numero: 27,
        partido: "DC",
        votos: 0
    },

    {
        nome: "Augusto Cury",
        cargo: "Presidente",
        foto: "cury.jpeg",
        numero: 70,
        partido: "DC",
        votos: 0
    }

];


// =============================================
// GOVERNADOR - RIO DE JANEIRO
// =============================================

const governadoresRJ = [

    {
        nome: "André Marinho",
        cargo: "Governador",
        foto: "andre-marinho.webp",
        numero: 30,
        partido: "NOVO",
        votos: 0
    },

    {
        nome: "Coronel Busnello",
        cargo: "Governador",
        foto: "coronel-busnello.jpg",
        numero: 14,
        partido: "MISSÃO",
        votos: 0
    },

    {
        nome: "Cyro Garcia",
        cargo: "Governador",
        foto: "cyro-garcia.jpg",
        numero: 16,
        partido: "PSTU",
        votos: 0
    },

    {
        nome: "Douglas Ruas",
        cargo: "Governador",
        foto: "douglas-ruas.jpg",
        numero: 22,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Eduardo Paes",
        cargo: "Governador",
        foto: "eduardo-paes.jpg",
        numero: 55,
        partido: "PSD",
        votos: 0
    },

    {
        nome: "Anthony Garotinho",
        cargo: "Governador",
        foto: "garotinho.webp",
        numero: 10,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Juliete Pantoja",
        cargo: "Governador",
        foto: "juliete-pantoja.webp",
        numero: 80,
        partido: "UP",
        votos: 0
    },

    {
        nome: "Luan Monteiro",
        cargo: "Governador",
        foto: "luan-monteiro.webp",
        numero: 29,
        partido: "PCO",
        votos: 0
    },

    {
        nome: "William Siri",
        cargo: "Governador",
        foto: "william-siri.jpg",
        numero: 50,
        partido: "PSOL",
        votos: 0
    }

];


// =============================================
// GOVERNADOR - SÃO PAULO
// =============================================

const governadoresSP = [

    {
        nome: "Tarcísio de Freitas",
        cargo: "Governador",
        foto: "tarcisio.jpg",
        numero: 10,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Fernando Haddad",
        cargo: "Governador",
        foto: "haddad.jpg",
        numero: 13,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Carlos Machado",
        cargo: "Governador",
        foto: "carlos-machado.jpg",
        numero: 21,
        partido: "PCB",
        votos: 0
    },

    {
        nome: "Vivian Mendes",
        cargo: "Governador",
        foto: "vivian-mendes.jpg",
        numero: 80,
        partido: "UP",
        votos: 0
    },

    {
        nome: "Vera Lúcia",
        cargo: "Governador",
        foto: "vera-lucia.jpg",
        numero: 16,
        partido: "PSTU",
        votos: 0
    },

    {
        nome: "Izadora Dias",
        cargo: "Governador",
        foto: "izadora-dias.jpg",
        numero: 29,
        partido: "PCO",
        votos: 0
    },

    {
        nome: "Policial Edjane",
        cargo: "Governador",
        foto: "policial-edjane.jpg",
        numero: 36,
        partido: "AGIR",
        votos: 0
    }

];


// =============================================
// SENADOR - RIO DE JANEIRO
// =============================================

const senadoresRJ = [

    {
        nome: "Benedita da Silva",
        cargo: "Senador",
        foto: "benedita.jpg",
        numero: 131,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Carlos Portinho",
        cargo: "Senador",
        foto: "carlos-portinho.jpg",
        numero: 222,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Marcelo Crivella",
        cargo: "Senador",
        foto: "crivella.jpg",
        numero: 100,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Mônica Benício",
        cargo: "Senador",
        foto: "monica-benicio.jpg",
        numero: 500,
        partido: "PSOL",
        votos: 0
    },

    {
        nome: "Pedro Paulo",
        cargo: "Senador",
        foto: "pedro-paulo.jpg",
        numero: 555,
        partido: "PSD",
        votos: 0
    }

];


// =============================================
// SENADOR - SÃO PAULO
// =============================================

const senadoresSP = [

    {
        nome: "André do Prado",
        cargo: "Senador",
        foto: "andre-do-prado.jpeg",
        numero: 222,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Guilherme Derrite",
        cargo: "Senador",
        foto: "guilherme-derrite.jpg",
        numero: 111,
        partido: "PP",
        votos: 0
    },

    {
        nome: "Marina Silva",
        cargo: "Senador",
        foto: "marina-silva.jpg",
        numero: 180,
        partido: "REDE",
        votos: 0
    },

    {
        nome: "Simone Tebet",
        cargo: "Senador",
        foto: "simone-tebet.jpg",
        numero: 400,
        partido: "PSB",
        votos: 0
    },

    {
        nome: "Soninha Francine",
        cargo: "Senador",
        foto: "soninha-francine.jpg",
        numero: 232,
        partido: "CIDADANIA",
        votos: 0
    }

];


// =============================================
// DEPUTADO FEDERAL - RIO DE JANEIRO
// =============================================

const deputadosFederaisRJ = [

    {
        nome: "Adalberto",
        cargo: "Deputado Federal",
        foto: "adalberto.webp",
        numero: 1063,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Adele Fatima",
        cargo: "Deputado Federal",
        foto: "adele-fatima.jpeg",
        numero: 1588,
        partido: "MDB",
        votos: 0
    },

    {
        nome: "Adelson Guedes",
        cargo: "Deputado Federal",
        foto: "adelson-guedes.jpeg",
        numero: 1311,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Adely Ozon",
        cargo: "Deputado Federal",
        foto: "adely-ozon.jpg",
        numero: 1537,
        partido: "MDB",
        votos: 0
    },

    {
        nome: "Ademir Máximo Respeito",
        cargo: "Deputado Federal",
        foto: "ademir-maximo-respeito.avif",
        numero: 4069,
        partido: "PSB",
        votos: 0
    }

];


// =============================================
// DEPUTADO FEDERAL - SÃO PAULO
// =============================================

const deputadosFederaisSP = [

    
        {
    nome: "Adams Coletivo Com Cury",
    cargo: "Deputado Federal",
    foto: "adams-coletivo-com-cury.jpeg",
    numero: 7075,
    partido: "AVANTE",
    votos: 0
  },

    {
        nome: "Abel Fiel",
        cargo: "Deputado Federal",
        foto: "abel-fiel.jpeg",
        numero: 4507,
        partido: "PSDB",
        votos: 0
    },

    {
        nome: "Abençoado da Bahia",
        cargo: "Deputado Federal",
        foto: "abencoado-da-bahia.jpeg",
        numero: 2268,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Abou Anni",
        cargo: "Deputado Federal",
        foto: "abou-anni.jpg",
        numero: 2001,
        partido: "PODE",
        votos: 0
    },

    {
        nome: "Ada Xavier",
        cargo: "Deputado Federal",
        foto: "ada-xavier.jpg",
        numero: 1575,
        partido: "MDB",
        votos: 0
    }

];


// =============================================
// DEPUTADO ESTADUAL - RIO DE JANEIRO
// =============================================

const deputadosEstaduaisRJ = [

    {
        nome: "Dionisio de Souza Lins",
        cargo: "Deputado Estadual",
        foto: "dionisio-de-souza-lins.webp",
        numero: 11111,
        partido: "PP",
        votos: 0
    },

    {
        nome: "Jonas Fernando da Silva",
        cargo: "Deputado Estadual",
        foto: "jonas-fernando-da-silva.jpg",
        numero: 44044,
        partido: "UNIÃO",
        votos: 0
    },

    {
        nome: "Tatiana de Paula Oliveira Lima",
        cargo: "Deputado Estadual",
        foto: "tatiana-de-paula.webp",
        numero: 11456,
        partido: "PP",
        votos: 0
    },

    {
        nome: "Jacivania Cristina Dias",
        cargo: "Deputado Estadual",
        foto: "jacivania-cristina-dias.jpg",
        numero: 25220,
        partido: "PRD",
        votos: 0
    },

    {
        nome: "Rubens de Araujo Pires",
        cargo: "Deputado Estadual",
        foto: "rubens-de-araujo-pires.webp",
        numero: 11155,
        partido: "PP",
        votos: 0   
    }

];


// =============================================
// DEPUTADO ESTADUAL - SÃO PAULO
// =============================================

const deputadosEstaduaisSP = [

    {
        nome: "Abdul Jarour",
        cargo: "Deputado Estadual",
        foto: "abdul-jarour.jpg",
        numero: 40999,
        partido: "PSB",
        votos: 0
    },

    {
        nome: "Abelardo",
        cargo: "Deputado Estadual",
        foto: "abelardo.jpg",
        numero: 10900,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Abidan Henrique",
        cargo: "Deputado Estadual",
        foto: "abidan-henrique.jpg",
        numero: 40000,
        partido: "PSB",
        votos: 0
    },

    {
        nome: "Acacio Coletivo do Povo",
        cargo: "Deputado Estadual",
        foto: "acacio-coletivo-do-povo.webp",
        numero: 27337,
        partido: "DC",
        votos: 0
    },

    {
        nome: "Adalberto Freitas",
        cargo: "Deputado Estadual",
        foto: "adalberto-freitas.jpg",
        numero: 15707,
        partido: "MDB",
        votos: 0
    }

];


// =============================================
// CRIAR CARD
// =============================================

function criarCard(candidato) {

    const card = document.createElement("div");

    card.className = "card";


    const nome = document.createElement("h2");

    nome.textContent = candidato.nome;


    const cargo = document.createElement("p");

    cargo.textContent = "Cargo: " + candidato.cargo;


    const numero = document.createElement("p");

    numero.textContent = "Número: " + candidato.numero;


    const partido = document.createElement("p");

    partido.textContent = "Partido: " + candidato.partido;


    const imagem = document.createElement("img");

    imagem.className = "foto-candidato";

    imagem.src = candidato.foto;

    imagem.alt = candidato.nome;


    const votos = document.createElement("p");

    votos.className = "votos";

    votos.textContent =
        "Votos: " +
        Number(candidato.votos || 0).toLocaleString("pt-BR");


    const porcentagem = document.createElement("p");

    porcentagem.className = "porcentagem";

    porcentagem.textContent = "0,00%";


    const barra = document.createElement("div");

    barra.className = "barra";


    const progresso = document.createElement("div");

    progresso.className = "progresso";

    progresso.style.width = "0%";


    barra.appendChild(progresso);


    card.appendChild(imagem);

    card.appendChild(nome);

    card.appendChild(cargo);

    card.appendChild(numero);

    card.appendChild(partido);

    card.appendChild(votos);

    card.appendChild(porcentagem);

    card.appendChild(barra);


    return card;

}


// =============================================
// RENDERIZAR CANDIDATOS
// =============================================

function renderizarCandidatos(lista, id) {

    const container = document.getElementById(id);


    if (!container) {

        return;

    }


    container.innerHTML = "";


    if (!lista || lista.length === 0) {

        const mensagem =
            document.createElement("p");

        mensagem.textContent =
            "Nenhum candidato cadastrado ainda.";

        container.appendChild(mensagem);

        return;

    }


    lista.forEach(function (candidato) {

        container.appendChild(
            criarCard(candidato)
        );

    });


    atualizarPorcentagens(
        container,
        lista
    );

} // =============================================
// ATUALIZAR PORCENTAGENS
// =============================================

function atualizarPorcentagens(container, lista) {

    if (!container || !lista || lista.length === 0) {
        return;
    }


    const totalVotos = lista.reduce(
        function (total, candidato) {

            return total + Number(
                candidato.votos || 0
            );

        },
        0
    );


    const cards =
        container.querySelectorAll(".card");


    cards.forEach(function (card, index) {

        const candidato = lista[index];

        const votos =
            Number(candidato.votos || 0);


        let porcentagem = 0;


        if (totalVotos > 0) {

            porcentagem =
                (votos / totalVotos) * 100;

        }


        const textoPorcentagem =
            card.querySelector(".porcentagem");


        const progresso =
            card.querySelector(".progresso");


        if (textoPorcentagem) {

            textoPorcentagem.textContent =
                porcentagem.toFixed(2)
                .replace(".", ",") + "%";

        }


        if (progresso) {

            progresso.style.width =
                porcentagem + "%";

        }

    });

}


// =============================================
// MENU / ABAS
// =============================================

const linksMenu =
    document.querySelectorAll(".menu a");


const abas =
    document.querySelectorAll(".aba-conteudo");


function abrirAba(id) {

    abas.forEach(function (aba) {

        aba.classList.remove(
            "aba-ativa"
        );

    });


    const aba =
        document.querySelector(id);


    if (!aba) {

        return;

    }


    aba.classList.add(
        "aba-ativa"
    );


    history.replaceState(
        null,
        "",
        id
    );

}


linksMenu.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const id =
                this.getAttribute("href");


            abrirAba(id);

        }
    );

});


// =============================================
// ABRIR ABA INICIAL
// =============================================

function abrirAbaInicial() {

    const hash =
        window.location.hash;


    if (
        hash &&
        document.querySelector(hash)
    ) {

        abrirAba(hash);

    } else {

        abrirAba("#presidente");

    }

}


// =============================================
// CARREGAR DADOS
// =============================================

function carregarDados() {

    // Presidente

    renderizarCandidatos(
        presidentes,
        "lista-presidente"
    );


    // Governador RJ

    renderizarCandidatos(
        governadoresRJ,
        "lista-governador"
    );


    // Senador RJ

    renderizarCandidatos(
        senadoresRJ,
        "lista-senador"
    );


    // Deputado Federal RJ

    renderizarCandidatos(
        deputadosFederaisRJ,
        "lista-deputado-federal"
    );


    // Deputado Estadual RJ

    renderizarCandidatos(
        deputadosEstaduaisRJ,
        "lista-deputado-estadual"
    );

}


// =============================================
// GOVERNADOR - TROCA DE ESTADO
// =============================================

const selectGovernador =
    document.getElementById(
        "estado-governador"
    );


if (selectGovernador) {

    selectGovernador.addEventListener(
        "change",
        function () {

            if (this.value === "SP") {

                renderizarCandidatos(
                    governadoresSP,
                    "lista-governador"
                );

            } else {

                renderizarCandidatos(
                    governadoresRJ,
                    "lista-governador"
                );

            }

        }
    );

}


// =============================================
// SENADOR - TROCA DE ESTADO
// =============================================

const selectSenador =
    document.getElementById(
        "estado-senador"
    );


if (selectSenador) {

    selectSenador.addEventListener(
        "change",
        function () {

            if (this.value === "SP") {

                renderizarCandidatos(
                    senadoresSP,
                    "lista-senador"
                );

            } else {

                renderizarCandidatos(
                    senadoresRJ,
                    "lista-senador"
                );

            }

        }
    );

}


// =============================================
// DEPUTADO FEDERAL - TROCA DE ESTADO
// =============================================

const selectDeputadoFederal =
    document.getElementById(
        "estado-deputado-federal"
    );


if (selectDeputadoFederal) {

    selectDeputadoFederal.addEventListener(
        "change",
        function () {

            if (this.value === "SP") {

                renderizarCandidatos(
                    deputadosFederaisSP,
                    "lista-deputado-federal"
                );

            } else {

                renderizarCandidatos(
                    deputadosFederaisRJ,
                    "lista-deputado-federal"
                );

            }

        }
    );

}


// =============================================
// DEPUTADO ESTADUAL - TROCA DE ESTADO
// =============================================

const selectDeputadoEstadual =
    document.getElementById(
        "estado-deputado-estadual"
    );


if (selectDeputadoEstadual) {

    selectDeputadoEstadual.addEventListener(
        "change",
        function () {

            if (this.value === "SP") {

                renderizarCandidatos(
                    deputadosEstaduaisSP,
                    "lista-deputado-estadual"
                );

            } else {

                renderizarCandidatos(
                    deputadosEstaduaisRJ,
                    "lista-deputado-estadual"
                );

            }

        }
    );

}


// =============================================
// STATUS DA APURAÇÃO
// =============================================

function atualizarStatus() {

    const elemento =
        document.querySelector(
            ".ultima-atualizacao"
        );


    if (!elemento) {

        return;

    }


    const agora =
        new Date();


    const data =
        agora.toLocaleDateString(
            "pt-BR"
        );


    const hora =
        agora.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    elemento.textContent =
        "Última atualização: " +
        data +
        " às " +
        hora;

}


// =============================================
// INICIAR SITE
// =============================================

carregarDados();

abrirAbaInicial();

atualizarStatus();