let A = [ '1', 2, 3, 4, 5, 6, 7, 8, 9, 10];

let addNumero = (num) => {
    if (A.length < 10){
        A.push(Number(num));
    } else {
        console.log('Não é possível adicionar mais números.');
    }
}

let processamentoParOuImpar = (numArr) => {
    let erros = [];
    
    let B = [];
    
    if (!Array.isArray(numArr)){
        erros.push('Matriz de números inexistente.')
        return;
    }

    for (let i = 0; numArr.length > i; i++){
        if (Number(numArr[i]) !== Number.parseInt(numArr[i])){
            erros.push('Algum dos valores não é um número inteiro');
            break;
        }

        if (numArr[i] % 2 === 0){
            B.push(Number(numArr[i]) * 5);   
        } else {
            B.push(Number(numArr[i]) + 5);
        }
    }

    if (erros.length > 0){
        return console.log('Erros: ', erros);
    } else {
        return B;
    }

}

const resultado = processamentoParOuImpar(A);
console.log('Matriz A:', A)
console.log('Matriz B:', resultado);
