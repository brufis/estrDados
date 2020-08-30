// Exercícios de revisão

// #01

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

let estado2 = {
    nome: 'Pernambuco',
    sigla: 'PE',
    area: 98149.119,
    populacao: 	9557071
}

let estado3 = {
    nome: 'Bahia',
    sigla: 'BA',
    area:  564733.17,
    populacao: 14930634
}

let estado4 = {
    nome: 'Ceará',
    sigla: 'CE',
    area: 148920.472,
    populacao: 	9075649
}

let estado5 = {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    area:  52811.126,
    populacao: 	3506853
}

let estado6 = {
    nome: 'Maranhão',
    sigla: 'MA',
    area: 331937.450,
    populacao: 7035055
}

let estado7 = {
    nome: 'Alagoas',
    sigla: 'AL',
    area: 27778.506,
    populacao: 3337357
}

let estado8 = {
    nome: 'Paraíba',
    sigla: 'PA',
    area: 56469.778,
    populacao: 3996496
}

let estado9 = {
    nome: 'Piauí',
    sigla: 'PI',
    area: 251577.738,
    populacao: 3264531

}

estadosNe.push(estado1)
estadosNe.push(estado2)
estadosNe.push(estado3)
estadosNe.push(estado4)
estadosNe.push(estado5)
estadosNe.push(estado6)
estadosNe.push(estado7)
estadosNe.push(estado8)
estadosNe.push(estado9)

estadosNe.forEach(function(nome)){
    console.log(nome)
}

// #2

let densidade = {

    densidade = populacao/area
}
