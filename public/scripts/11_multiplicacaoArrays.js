let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let B = [];

let addNumero = (num) => {
    if (A.length < 10){
        A.push(Number(num));
    } else {
        console.log('Não é possível adicionar mais números.');
    }
}

A.forEach((num) => {
    B.push(num * 3);
});

console.log('Matriz A:', A);
console.log('Matriz B:', B);



