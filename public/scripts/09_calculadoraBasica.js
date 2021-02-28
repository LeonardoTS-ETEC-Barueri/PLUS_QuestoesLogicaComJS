let soma = (n1, n2) => {
    n1 = Number(n1);
    n2 = Number(n2);

    return n1 + n2;
}

let subtracao = (n1, n2) => {
    n1 = Number(n1);
    n2 = Number(n2);

    return n1 - n2;
}

let multiplicacao = (n1, n2) => {
    n1 = Number(n1);
    n2 = Number(n2);

    return n1 * n2;
}

let divisao = (n1, n2) => {
    n1 = Number(n1);
    n2 = Number(n2);

    return n1 / n2;
}

const result = subtracao(1, '3');
console.log(result);