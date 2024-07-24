// Exercicio 2

let acaoPosto = prompt("Deseja abastecer com gasolina, com alcool ou calibrar os pneus? (responda com G, A ou C)")

let valor
let quantidade

switch (acaoPosto) {
    case "G":
        valor = Number(prompt("Qual o valor desejado?"))
        quantidade = valor / 5
        console.log("Seu carro foi abastecido com " + quantidade + " litros de gasolina.")
        break

    case "A":
        valor = Number(prompt("Qual o valor desejado?"))
        quantidade = valor / 3
        console.log("Seu carro foi abastecido com " + quantidade + " litros de alcool.")
        break
    
    case "C":
        console.log("Pneus calibrados com sucesso.")
        break

    default:
        console.log("Erro! Digite um parametro válido.")
        break
}