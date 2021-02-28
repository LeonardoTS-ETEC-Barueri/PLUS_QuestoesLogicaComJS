let calcFatorial = (n) => {

    let res = 1
    for (i = 1; i < n; i++){
        res += res * i;
    }

    return console.log(`${n}! = ${res}`);

}

calcFatorial(5);