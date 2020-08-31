

function buscaSeq(nomes, valorBusca) {
    for(let i = 0; i < nomes.length; i++ ){
        if nomes[i] === valorBusca) return i
    }
    
    return -1 
}


// Importar um vetor com mais de 100k de nomes

const nomes = require('./Dados/vetor-nomes')

// Busca do nome BRUNA

console.time('BRUNA')
console.log(buscaSeq(nomes, 'BRUNA'))
console.timeEnd('BRUNA')

// Nova busca em lista

function buscaSeq2(listaNomes, valorBusca, fnComp) {
    for(let i = 0; i = listaNomes.length; i++){
     if(fnComp(listaNomes[i], valorBusca)) return i
    }
    return -1
}

const = listaNomes = require('./Dados/lista-nomes')

console.time('BRUNA')
console.log(buscaSeq(listaNomes, 'BRUNA'))
console.timeEnd('BRUNA')