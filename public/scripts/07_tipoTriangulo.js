let a = 1,
    b = '3',
    c = 3

// Declarando a função.
let tipoTriangulo = (lado1, lado2, lado3) => {

    let erros = [];

    let ladosTriangulo = [lado1, lado2, lado3];
    let ladosUnicos = []
    let qtdLadosIguais = 0;

    for (let i = 0; ladosTriangulo.length > i; i++){
        if (!Number.isFinite(Number.parseFloat(ladosTriangulo[i]))){
            erros.push('Um valor inválido foi encontrado');
            break;
        }
        ladosUnicos.includes(Number.parseFloat(ladosTriangulo[i])) ? qtdLadosIguais++ : ladosUnicos.push(Number.parseFloat(ladosTriangulo[i]));
    }

    if (erros.length > 0){
        return console.log('Erro: ' + erros);
    } else {
        switch(qtdLadosIguais){
            case 0:
                return console.log(`Nenhum lado igual: O Triângulo é um [ Escaleno ].`);
                break;
            case 1:
                return console.log(`Dois lado iguai: O Triângulo é um [ Isósceles ].`);
                break;
            case 2:
                return console.log(`Todos os lados são iguais: O Triângulo é um [ Equilátero ].`);
                break;
        }
    }
}

// Chamando a função.
tipoTriangulo(a, b, c);