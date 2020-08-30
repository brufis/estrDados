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


estadosNe.forEach(function(dados){
    console.log(dados)
})

// --------------------------------------------------
// #2

let demografica = function(populacao,area){
    return populacao/area
}

// --------------------------------------------------
//#3

for (i = 0; i < estadosNe.length; i++){
    estadosNe[i]["Densidade demográfica"] = (demografica(estadosNe[i].area,estadosNe[i].populacao))
    delete estadosNe[i].sigla
    console.log(estadosNe[i])
}

// -------------------------------------------------
//#4

let nordeste = (estadosNe) =>{
    for(i in estadosNe){
        console.log(i, estadosNe[i])
    }
}

//--------------------------------------------------
// #5

for(let i of estadosNe){
    nordeste(i)
    console.log(nordeste)
}

// --------------------------------------------------
// #6

let nomesNE = []

nomesNE.push(estado3.nome);
nomesNE.unshift(estado7.nome);
nomesNE.splice(8, 0, estado1.nome);
nomesNE.splice(2, 0, estado4.nome);
nomesNE.splice(3, 0, estado6.nome);
nomesNE.splice(4, 0, estado8.nome);
nomesNE.splice(5, 0, estado2.nome);
nomesNE.splice(6, 0, estado9.nome);
nomesNE.splice(7, 0, estado5.nome)


console.log(nomesNE)