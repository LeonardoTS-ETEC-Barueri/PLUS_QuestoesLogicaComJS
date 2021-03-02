// Involved Elements.
let userInput = document.querySelector('input#inpNumsDistributiva');
let resultado = document.querySelector('div#resultadoDistributiva');
let resultadoDefault = resultado.innerHTML;
let btnCalcular = document.querySelector('button#calcDistributiva');
let btnReiniciar = document.querySelector('button#resetDistributiva');

// Listeners.
btnCalcular.addEventListener('click', () => {

    if (userInput.value){

        let erros = [];

        let numeros = [];

        let userInputArr = userInput.value.split(',');
        
        for (let i = 0; userInputArr.length > i; i++){
            if (userInputArr[i].trim() === "" || Number(userInputArr[i]) !== Number.parseInt(userInputArr[i])){
                erros.push('Algum dos valores digitados não é um número inteiro.');
                break;
            } else {
                numeros.push(Number(userInputArr[i].trim()));
            }
        }

        if (numeros.length !== 4){
            erros.push('Esse cálculo utiliza 4 números inteiros, nem mais, nem menos.');
        }

        if (erros.length > 0){
            resultado.innerHTML = '<p class="text-center text-danger fw-bold">&#x26A0; Atenção &#x26A0;</p>'
            erros.forEach((erro) => {
                resultado.innerHTML += `<p>• ${erro}</p>`
            });
            return;
        }

        resultado.classList.add('row');
        resultado.innerHTML = `<div id="resultA" class="col-sm-12 col-md-6 col-lg-6 text-center">
        <p class="fw-bold border my-2">Somas</p>
        </div>
        <div id="resultB" class="col-sm-12 col-md-6 col-lg-6 text-center">
        <p class="fw-bold border my-2">Multiplicações</p>
        </div>`

        for (let c1 = 0; numeros.length > c1 ; c1++){
            for(let c2 = c1 + 1; numeros.length > c2 ; c2++ ){
                document.querySelector('div#resultA').innerHTML += `<p class="m-0">${numeros[c1]} + ${numeros[c2]} = ${Number(numeros[c1] + numeros[c2])}</p>`
                document.querySelector('div#resultB').innerHTML += `<p class="m-0">${numeros[c1]} * ${numeros[c2]} = ${Number(numeros[c1] * numeros[c2])}</p>`
            }
        }

    }

});

btnReiniciar.addEventListener('click', () => {
    userInput.value ? userInput.value = '' : userInput ;
    resultado.innerHTML = resultadoDefault;
});


//-----------------------------------------------------------------------------------------
// let a = 1,
//     b = 2,
//     c = 3,
//     d = 4,
//     numeros = [],
//     resultAd = [],
//     resultMult = [];

// numeros.push(a, b, c, d);

// console.log(numeros);

// for (let c1 = 0; numeros.length > c1 ; c1++){
//     for(let c2 = c1 + 1; numeros.length > c2 ; c2++ ){
//         resultAd.push(Number(numeros[c1] + numeros[c2]));
//         resultMult.push(Number(numeros[c1] * numeros[c2]));
//         // console.log(`${numeros[c1]} + ${numeros[c2]} = ${Number(numeros[c1] + numeros[c2])}`);
//         // console.log(`${numeros[c1]} * ${numeros[c2]} = ${Number(numeros[c1] * numeros[c2])}`);
//     }
// }

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