let a = 5,
    b = 2,
    c = 9,
    numeros = []

numeros.push(a, b, c);
console.log(`Números não organizados: (a.${a}); (b.${b}); (c.${c})`);
numeros.sort();
console.log('Números organizados em ordem crescente: ', numeros);
numeros.reverse();
console.log('Números organizados em ordem decrescente: ', numeros);
