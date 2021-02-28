let listaNomes = []

let addNome = (nome) => {
    if (listaNomes.length < 10){
        listaNomes.push(nome);
    } else {
        console.log('Não é possível adicionar mais nomes.');
    }
}

console.log(listaNomes);