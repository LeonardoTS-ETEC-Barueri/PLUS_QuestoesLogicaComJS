let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    resSomaImpar = 0;

A.forEach((num) => {
    
    if(num % 2 > 0){
        resSomaImpar += num;
    }

})

console.log(resSomaImpar);