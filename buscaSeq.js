// Importar um vetor com mais de 100k de nomes

const nomes = require('./Dados/vetor-nomes')

// Busca do nome BRUNA

console.time('BRUNA')
console.log(buscaSeq(nomes, 'BRUNA'))
console.timeEnd('BRUNA')