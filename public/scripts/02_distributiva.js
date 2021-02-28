let a = 1,
    b = 2,
    c = 3,
    d = 4,
    numeros = [],
    resultAd = [],
    resultMult = [];

numeros.push(a, b, c, d);

console.log(numeros);

for (let c1 = 0; numeros.length > c1 ; c1++){
    for(let c2 = c1 + 1; numeros.length > c2 ; c2++ ){
        resultAd.push(Number(numeros[c1] + numeros[c2]));
        resultMult.push(Number(numeros[c1] * numeros[c2]));
        // console.log(`${numeros[c1]} + ${numeros[c2]} = ${Number(numeros[c1] + numeros[c2])}`);
        // console.log(`${numeros[c1]} * ${numeros[c2]} = ${Number(numeros[c1] * numeros[c2])}`);
    }
}

//----------------------------------------------------------------------------------------------------

// let numArr = []
// const limiteArr = 4;

// function addNumToArr (num) {
//     if (Number.isInteger(num) && numArr.length < limiteArr){
//         numArr.push(num)
//         console.log(numArr);
//     } else if (!Number(num) || !Number.isInteger(num)){
//         console.log('Atenção: Só é possível calcular números inteiros');
//     } else {
//         console.log('Atenção: Você ultrapassou o limite de números, ao adicionar o número: ' + num);
//     }
// }

// addNumToArr(1);
// addNumToArr(2);
// addNumToArr(3);
// addNumToArr(4);
// addNumToArr(5);

// // Adição distributiva e Multiplicação distributiva.
// let resultAd = [];
// let resultMult = [];

// if (numArr.length === limiteArr) {
//     for (let c1 = 0; numArr.length > c1 ; c1++){
//         for(let c2 = c1 + 1; numArr.length > c2 ; c2++ ){
//             resultAd.push(Number(numArr[c1] + numArr[c2]));
//             resultMult.push(Number(numArr[c1] * numArr[c2]));
//             // console.log(`${numArr[c1]} + ${numArr[c2]} = ${Number(numArr[c1] + numArr[c2])}`);
//             // console.log(`${numArr[c1]} * ${numArr[c2]} = ${Number(numArr[c1] * numArr[c2])}`);
//         }
//     }
// } else if (numArr.length < limiteArr){
//     console.log('São necessários 4 números para iniciar o calculo');
// }