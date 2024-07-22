// Desafio 1

// const temFome = prompt("Você está com fome?")
// const temDinheiro = prompt("Você tem dinheiro?")
// const restaurante = prompt("O restaurante esta aberto?")

// if(temFome === "não" || temDinheiro === "não"){
//     console.log("Hoje a janta será em casa.")
// }else if(temFome === "sim" && temDinheiro === "sim" && restaurante === "não"){
//     console.log("Peça um delivery!")
// }else{
//     console.log("Hoje o jantar será no seu restaurante preferido!")
// }

// Desafio 2

const nome = prompt("Digite seu nome:")
const idade = Number(prompt("Digite sua idade:"))
const temCarteira = prompt("Você tem carteira de motorista?")
const temCarro = prompt("Você tem carro?")

if(idade < 18 || temCarteira === "não"){
    console.log(nome + ", você não pode dirigir.")
} else if(idade >= 18 && temCarteira === "sim" && temCarro === "não"){
    console.log(nome + ", você pode dirigir mas não tem um carro.")
} else{
    console.log(nome + ", você sera o motorista!")
}