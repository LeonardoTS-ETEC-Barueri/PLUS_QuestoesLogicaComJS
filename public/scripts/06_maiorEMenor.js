let numeros = ['a', 9, 1, 4, 5];

let resultado = [maiorEMenor(numeros)];

console.log(resultado);

function maiorEMenor(numeros = []){

    let erros = [];

    let maior = 0;
    numeros.every((num) => {

        if (Number(num) !== Number.parseInt(num)){
            erros.push('Algum dos valores não é um número inteiro');
            return false;
        } else {
            num > maior ? maior = Number(num) : maior;
            return true;
        }
    });

    let menor = maior;
    numeros.every((num) => {
        if (Number(num) !== Number.parseInt(num)){
            return false;
        } else {
            num < menor ? menor = Number(num) : menor ;
            return true;
        }
    });

    if (erros.length > 0){
        return console.log('Erro: ' + erros);
    } else {
        return {
            maior,
            menor
        }
    }

}




