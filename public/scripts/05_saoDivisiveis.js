let a = '1',
    b = 2,
    c = 3,
    d = 4,
    numDivisiveis = saoDivisiveis([a, b, c, d]);

function saoDivisiveis(numeros = []){

    let erros = [];

    if (!Array.isArray(numeros)){
        erros.push('A função não recebeu os parâmetros corretos. É necessário um Array contendo números inteiros.');
    };
    
    let divisiveisPorDois = [];
    let divisiveisPorTres = [];

    for (let i = 0; numeros.length > i; i++){
        if (Number(numeros[i]) !== Number.parseInt(numeros[i])){  // Se NaN ou Decimal...
            erros.push('Algum dos valores não é um número inteiro.');
            break;
        }
        
        if (numeros[i] % 2 === 0){
            divisiveisPorDois.push(Number(numeros[i]));
        }
        if (numeros[i] % 3 === 0){
            divisiveisPorTres.push(Number(numeros[i]));
        }
        
        // console.log(`[${numeros[i]}] é divisível por 2?`, (numeros[i] % 2));
        // console.log(`[${numeros[i]}] é divisível por 3?`, (numeros[i] % 3));
    }

    // console.log('Números divisíveis por 2: ', divisiveisPorDois);
    // console.log('Números divisíveis por 3: ', divisiveisPorTres);

    let divisiveis = { 
        divisiveisPorDois,
        divisiveisPorTres
    }

    if (erros.length > 0){
        console.error(erros)
        return 'Erro: Parando a execução...';
    } else {
        return divisiveis;
    }
}

console.log(numDivisiveis);

