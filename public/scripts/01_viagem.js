// Involved Elements.
let inpLitroKm = document.querySelector('input#inpConsumo');
let inpTempo = document.querySelector('input#inpTempo');
let inpVelMedia = document.querySelector('input#inpVelMedia');
let resultado = document.querySelector('div#resultadoViagem');
let resultadoDefault = resultado.innerHTML;
let btnCalcular = document.querySelector('button#calcViagem');
let btnReiniciar = document.querySelector('button#resetViagem');

// Listeners.
btnCalcular.addEventListener('click', () => {
    
    let erros = [];
    if (Number(inpLitroKm.value) !== Number.parseInt(inpLitroKm.value)){
        erros.push('O consumo do automóvel em litros por kilometro deve ser uma estimativa em números inteiros.');
    }
    
    console.log(inpTempo.value);
    if(!inpTempo.value.match(/^(\d+):([0-5][0-9]|[0-9]):([0-5][0-9]|[0-9])$/) || inpTempo.value === ''){
        erros.push('O tempo da viagem não parece estar correto, digite no formato "hh:mm:ss", sem áspas.')
    }
    
    if (Number(inpVelMedia.value) !== Number.parseInt(inpVelMedia.value)){
        erros.push('A velocidade média deve ser uma estimativa em números inteiros.')
    }

    if (erros.length > 0){
        resultado.innerHTML = '<p class="text-center text-danger fw-bold">&#x26A0; Atenção &#x26A0;</p>'
        erros.forEach((erro) => {
            resultado.innerHTML += `<p>• ${erro}<p>`
        });
        return;
    }

    const inpTempoArr = inpTempo.value.split(':');
    let h = Number(inpTempoArr[0]) || 0;
    let m = Number(inpTempoArr[1]) || 0;
    let s = Number(inpTempoArr[2]) || 0;
    const tempoEmSegundos = ( ( (h * 60) + m ) * 60) + s
    
    let velMedia = Number(inpVelMedia.value) || 0;
    let secToHour = Number(((tempoEmSegundos / 60) / 60).toFixed(3));

    let distancia = Number((secToHour * velMedia).toFixed(2));
    let litrosUsados = Number((distancia / inpLitroKm.value).toFixed(2));
    
    return resultado.innerHTML = `<p>• O tempo gasto na viagem será: ${h} horas, ${m} minutos e ${s} segundos.</p>
    <p>• A distância percorrida é de: ${distancia} km</p>
    <p>• A quantidade estimada de litros gastos na viagem será de: ${litrosUsados} L</p>`;

});

btnReiniciar.addEventListener('click', () => {
    inpLitroKm.value ? inpLitroKm.value = '' : inpLitroKm ;
    inpTempo.value ? inpTempo. value = '' : inpTempo ;
    inpVelMedia.value ? inpVelMedia.value = '' : inpVelMedia ;
    resultado.innerHTML = resultadoDefault;
});

//-----------------------------------------------------------------------------------------
// let inpLitroKm = 12;

// let inpTempo = '3:20:10';
// let inpVelMedia = '3 Km/h';

// // Fazer validações dos campos de entrada.

// const inpTempoArr = inpTempo.split(':');
// console.log('inpTempoArr: ', inpTempoArr);

// let h = Number(inpTempoArr[0]) || 0;
// let m = Number(inpTempoArr[1]) || 0;
// let s = Number(inpTempoArr[2]) || 0;
// // console.log('Tempo Separado:', h, m, s);

// const inpVelMediaArr = inpVelMedia.split(' ');
// console.log('inpVelMediaArr', inpVelMediaArr);

// let velMedia = Number(inpVelMediaArr[0]) || 0;
// // console.log('Vel Separada:', velMedia);

// const tempoEmSegundos = ( ( (h * 60) + m ) * 60) + s
// console.log('tempoEmSegundos', tempoEmSegundos);

// // Calculo da distância percorrida em Km/h.
// let distancia = undefined;

// let secToHour = Number(((tempoEmSegundos / 60) / 60).toFixed(3));
// console.log('Segundos convertidos em Horas: ', secToHour);
// /* Observação:  Em situações onde não é interessante arredondar os decimais, como ao trabalhar com valores monetários.
// *               Podemos criar uma função que recebe como parâmetros o valor e a quantidade de dígitos decimais.
// *               A função então coletará o valor como uma string contendo a determinada quantidade de dígitos decimais.
// *               Podemos utilizar uma RegEx para esse processamento e o retorno será o valor original não arredondado porém com a quantidade de casas decimais que desejamos.
// */

// distancia = Number((secToHour * velMedia).toFixed(2));   // Distância em Km = Horas * Velocidade Média de Km/h
// console.log('distancia', distancia);

// // Cálculo da quantidade de litros usados na viagem em um automóvel que gasta 12L/km.
// let litrosUsados = undefined;

// litrosUsados = Number((distancia / inpLitroKm).toFixed(2));  // Litros Usados = Distância / LitroPorKm
// console.log('litrosUsados', litrosUsados);

// // Resultado.
// console.log(`[Resultado]
// O tempo gasto na viagem será: ${h} horas, ${m} minutos e ${s} segundos.
// A distância percorrida é de: ${distancia} km
// A quantidade estimada de litros gastos na viagem será de: ${litrosUsados} L`);