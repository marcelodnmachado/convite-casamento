/* =========================================================
   ELEMENTOS
========================================================= */

const abrirConvite =
    document.getElementById("abrirConvite");

const inicio =
    document.getElementById("inicio");

const convite =
    document.getElementById("convite");

const garrafa =
    document.querySelector(".garrafa");

const musica =
    document.getElementById("musica");

const musicaBtn =
    document.getElementById("musicaBtn");


/* =========================================================
   ABRIR CONVITE
========================================================= */

abrirConvite.addEventListener("click", function () {

    /*
        Começa a animação da garrafa
    */

    garrafa.classList.add("abrindo");


    /*
        Depois da animação,
        esconde a tela inicial
    */

    setTimeout(function () {

        inicio.style.display = "none";

        convite.classList.remove("escondido");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});


/* =========================================================
   TAMBÉM PERMITE CLICAR NA GARRAFA
========================================================= */

garrafa.addEventListener("click", function () {

    abrirConvite.click();

});


/* =========================================================
   CONTAGEM REGRESSIVA
========================================================= */

/*
    ALTERE A DATA DO CASAMENTO AQUI

    Formato:

    ANO-MÊS-DIA T-HORA:MINUTO:SEGUNDO

*/

const dataCasamento =
    new Date("2026-08-21T18:00:00").getTime();


function atualizarContador() {

    const agora =
        new Date().getTime();


    const distancia =
        dataCasamento - agora;


    /*
        Se a data chegou
    */

    if (distancia <= 0) {

        document.getElementById("dias").innerText = "00";

        document.getElementById("horas").innerText = "00";

        document.getElementById("minutos").innerText = "00";

        document.getElementById("segundos").innerText = "00";

        return;
    }


    /*
        Cálculo
    */

    const dias =
        Math.floor(
            distancia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (distancia %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (distancia %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (distancia %
                (1000 * 60))
            /
            1000
        );


    /*
        Atualiza tela
    */

    document.getElementById("dias")
        .innerText =
        String(dias).padStart(2, "0");


    document.getElementById("horas")
        .innerText =
        String(horas).padStart(2, "0");


    document.getElementById("minutos")
        .innerText =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos")
        .innerText =
        String(segundos).padStart(2, "0");
}


/*
    Atualiza imediatamente
*/

atualizarContador();


/*
    Atualiza a cada segundo
*/

setInterval(
    atualizarContador,
    1000
);


/* =========================================================
   MÚSICA
========================================================= */

let musicaTocando = false;

musicaBtn.addEventListener("click", function () {

    if (musica.paused) {

        musica.volume = 0.5;

        musica.play()
            .then(function () {

                musicaTocando = true;

                musicaBtn.innerHTML =
                    "❚❚ <span>Pausar música</span>";

            })
            .catch(function (erro) {

                console.error("Erro:", erro);

                alert("Erro ao tocar a música. Verifique o arquivo musica.mp3.");

            });

    } else {

        musica.pause();

        musicaTocando = false;

        musicaBtn.innerHTML =
            "♪ <span>Ouvir nossa música</span>";
    }

});