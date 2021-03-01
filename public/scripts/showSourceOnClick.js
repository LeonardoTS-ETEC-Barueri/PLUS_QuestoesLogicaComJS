// Dependências -> Prism (Um Plugin para o Highlight de Syntax);

// Involved Elements.
let divCode = document.querySelector('div#divCode')
let codeContainer = document.querySelector('div#codeContainer');
let codeTag = document.querySelector('code#codeGoesHere')
let fullRepoUrlToScripts = `${window.location.protocol}//${window.location.host}/PLUS_QuestoesLogicaComJS/public/scripts`;
let scriptLoader = document.querySelector('script#scriptTarefa');

// Show Intro.
document.querySelector(`a#list-introducao-list`).addEventListener('click', async () => {
    if (!divCode.classList.contains('d-none')){
        divCode.classList.add('d-none');
    }
    if (scriptLoader.hasAttribute('src')){
        scriptLoader.removeAttribute('src');
    }
});

// Show Source-codes.
document.querySelector(`a#list-exViagem-list`).addEventListener('click', async () => {
    if (scriptLoader.hasAttribute('src')){
        scriptLoader.removeAttribute('src');
    }
    scriptLoader.setAttribute('src', './public/scripts/01_viagem.js');
    document.querySelector('button#resetViagem').dispatchEvent(new Event('click'));

    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/01_viagem.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.textContent = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exDistributiva-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/02_distributiva.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exSomaProduto-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/03_somaproduto.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exNumOrdenado-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/04_numerosOrdenados.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exDivisiveis-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/05_saoDivisiveis.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exMaiorMenor-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/06_maiorEMenor.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exTipoTriangulo-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/07_tipoTriangulo.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exFatorial-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/08_fatorial.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exCalculadora-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/09_calculadoraBasica.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exListaNomes-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/10_listaNOmes.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exMultArr-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/11_multiplicacaoArrays.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exSomaImpar-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/12_somaImpar.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

document.querySelector(`a#list-exParImpar-list`).addEventListener('click', async () => {
    divCode.classList.remove('d-none');
    const viagem = await fetch(`${fullRepoUrlToScripts}/13_parOuImpar.js`)
    .then((res) => { 
        return res.text()
    })
    .catch((err) => {
        console.log(err);
    });

    codeTag.innerHTML = viagem;
    Prism.highlightAll();
    unfade(codeContainer);
});

// Element Transition Effect.
function unfade(element) {
    var op = 0.1;
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}